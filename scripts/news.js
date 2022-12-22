console.log(userActive.pageSize);
console.log(parseUser(userActive), "parse user");
if (userActive) {
    const newContainer = document.getElementById("news-container");
    const btnprev = document.getElementById("btn-prev");
    const pageNum = document.getElementById("page-num");
    const btnNext = document.getElementById("btn-next");

    // bien tinh so page toi da tra ve tu API
    let totalResults = 0;

    getDataNews("us", 1);

    async function getDataNews(country, page) {
        try {
            // ket noi voi API
            const res = await fetch(
                `https://newsapi.org/v2/top-headlines?country=${country}&category=${userActive.category}&pageSize=${userActive.pageSize}&page=${page}&apiKey=64d24203387a46a0a4f3d26032f9fe1a`
            );
            const data = await res.json();
            console.log(data);

            if (data.status === "error" && data.code === "rateLimited") {
                throw new Error(data.message);
            }

            // bat loi khi chay tu tap tin khong thong qua sever , chay tren sever khong co loi nay
            if (data.code === "corsNotAllowed") {
                throw new Error(data.message);
            }
            // goi ham de hien thi list news
            displayNewList(data);
        } catch (err) {
            alert("Error: " + err.message);
        }
    }

    function checkBtnprev() {
        // neu page num la 1 thi an di
        if (pageNum == 1) {
            btnprev.style.display = "none";
        } else {
            btnprev.style.display = "block";
        }
    }

    function checkBtnNext() {
        if (pageNum.textContent == Math.ceil(totalResults / userActive.pageSize)) {
            btnNext.style.display = "none";
        } else {
            btnNext.style.display = "block";
        }
    }
    // click nut prev
    btnprev.addEventListener("click", function() {
        getDataNews("us", --pageNum.textContent);
    });

    btnNext.addEventListener("click", function() {
        getDataNews("us", ++pageNum.textContent);
    });

    function displayNewList(data) {
        totalResults = data.totalResults;
        // kiem tra cac nut next prev
        checkBtnNext();
        checkBtnprev();

        let html = "";
        // tao code html de hien thi
        data.articles.forEach(function(article) {
            html += `
            <div class="new-content">
                <div class="img-banner">
                    <img src=${
                        article.urlToImage
                            ? article.urlToImage 
                            :"no_image_available.jpg"
                    } alt="img"/>
                </div>
                <div class="content">
                    <h4>${article.title}</h4>
                    <p>${article.description}</p>
                    <button><a href=${article.url} target="blank">View</a></button>
                </div>
            </div>
            `;
        });
        newContainer.innerHTML = html;
    }
} else {
    alert("vui long dang nhap/dang ky");
    window.location.href = '../index.html';

}