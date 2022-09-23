// Variables
const carouseContainer = document.getElementById("carouse-container");
const articleOfTheDay = document.getElementById("article-of-the-day");
const impotArticles = document.getElementById("import-articles");
const miniArticles = document.getElementById("mini-articles");

// Functions

const fillCarouses = (container) => {
    $.getJSON("http://localhost/SEF/news-project-bootstrap/backend/get_carousel_articles.php", function (data) {
        container.innerHTML = `
        <!-- Active item -->
        <div class="carousel-item active">
            <img src="${data.articles[0].image}" class="d-block w-100" alt="...">
            <div class="carousel-caption d-none d-md-block">
                <h5>${data.articles[0].title}</h5>
                <p>${data.articles[0].content}</p>
            </div>
        </div>`;
        for (const index in data.articles) {
            if (Object.hasOwnProperty.call(data.articles, index)) {
                if (index > 0) {
                    const element = data.articles[index];
                    container.innerHTML += `
                    <!-- Other items -->
                    <div class="carousel-item">
                        <img src="${element.image}" class="d-block w-100" alt="...">
                        <div class="carousel-caption d-none d-md-block">
                            <h5>${element.title}</h5>
                            <p>${element.content}</p>
                        </div>
                    </div>`;
                }

            }
        }

    });
}

const fillNormalArticles = () => {
    $.getJSON("http://localhost/SEF/news-project-bootstrap/backend/get_normal_articles.php", function (data) {
        for (const article of data.articles) {
            if (article.type == "mini") {
                miniArticles.innerHTML += `
                <div class="row article">
                    <p class="title">${article.title}</p>
                    <p class="content">${article.content}</p>
                    <p class="author">${article.author}</p>
                </div>`;
            } else if (article.type == "important") {
                impotArticles.innerHTML += `
                <div class="col-4 article">
                    <p class="title">${article.title}</p>
                    <p class="content">${article.content}</p>
                    <p class="author">${article.author}</p>
                </div>`;
            } else if (article.type == "main") {
                articleOfTheDay.innerHTML += `
                <div class="article">
                    <p class="title">${article.title}</p>
                    <p class="content">${article.content}</p>
                    <p class="author">${article.author}</p>
                </div>`;
            }
        }
    });
}

fillCarouses(carouseContainer);
fillNormalArticles();


