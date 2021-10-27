let btnLoadImage = document.getElementById("loadImage")
divImage = document.querySelector(".image")
console.log(divImage)
fetch("https://api.pexels.com/v1/search?query=your-query", {
        "method": "GET",
        "mode": 'cors', // no-cors, *cors, same-origin
        "cache": 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        "credentials": 'same-origin',
        "headers": { "Authorization": "563492ad6f917000010000018b84cc9b06444d71933582a04a5a32ce" }
    }

).then(e => e.json()).then(data => {
    let halflenght = Math.floor(data.photos.length / 2)
    console.log(halflenght)
    btnLoadImage.addEventListener("click", function() {
        for (let i = 0; i < halflenght; i++) {
            divImage.innerHTML += `<div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                        <img class="bd-placeholder-img card-img-top" width="100%" height="225" src=${data.photos[i].src.original}>
    
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                            <div class="card-body">
                                <p class="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">
                        View
                      </button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">
                        Edit
                      </button>
                                    </div>
                                    <small class="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>`
        }
    })
})
let btnSecondaryImage = document.getElementById("secondaryImage")
divImg = document.querySelector(".img")
console.log(divImg)
fetch("https://api.pexels.com/v1/search?query=your-secondary-query", {
    "method": "GET",
    "mode": 'cors', // no-cors, *cors, same-origin
    "cache": 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
    "credentials": 'same-origin',
    "headers": { "Authorization": "563492ad6f917000010000018b84cc9b06444d71933582a04a5a32ce" }
}).then(e => e.json()).then(data => {
    let halflenght = Math.floor(data.photos.length / 2)
    btnSecondaryImage.addEventListener("click", function() {
        for (let i = 8; i < data.photos.length; i++) {
            divImg.innerHTML += `<div class="col-md-4">
                        <div class="card mb-4 shadow-sm">
                        <img class="bd-placeholder-img card-img-top" width="100%" height="225" src=${data.photos[i].src.original}>
    
                  <title>Placeholder</title>
                  <rect width="100%" height="100%" fill="#55595c" />
                  <text x="50%" y="50%" fill="#eceeef" dy=".3em">
                    Thumbnail
                  </text>
                </svg>
                            <div class="card-body">
                                <p class="card-text">
                                    This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.
                                </p>
                                <div class="d-flex justify-content-between align-items-center">
                                    <div class="btn-group">
                                        <button type="button" class="btn btn-sm btn-outline-secondary">
                        View
                      </button>
                                        <button type="button" class="btn btn-sm btn-outline-secondary">
                        Edit
                      </button>
                                    </div>
                                    <small class="text-muted">9 mins</small>
                                </div>
                            </div>
                        </div>
                    </div>`
        }
    })
})