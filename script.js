const accessKey = "WZikcYQ5KUL-4RklPLj15Y_A9kNprOB_3P8ga8Lax5A";




const formE1 = document.querySelector("form");
const inputE1 = document.getElementById("search-input");
const searchResults = document.querySelector(".search-results");
const showMore = document.getElementById("show-more-button");



let inputData = "";
let page = 1;

async function searchImages() {
    inputData = inputE1.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${accessKey}`;

    const response = await fetch(url);  // feth response
    const data = await response.json(); // conver data to json

    const results = data.results;


    if(page === 1){
        searchResults.innerHTML = "";
    }

    results.map((result) => {
        const imageWrapper = document.createElement("div");
        imageWrapper.classList.add("search-result");

        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;

        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;

        
        imageWrapper.appendChild(image);
        imageWrapper.appendChild(imageLink);
        searchResults.appendChild(imageWrapper);


    })


    page++;

    if(page > 1){
        showMore.style.display = "block";
    }
}

formE1.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
});

showMore.addEventListener("click", () => {
    searchImages();
});














// document.getElementById('search-button').addEventListener('click', function() {
//     let query = document.getElementById('search-input').value;
//     searchImages(query);
//     let show = document.getElementById("show-more");
//     show.style.color="black";
// });




// function searchImages(query) {
//     const apiKey = 'a3m8KbBQQB8t6acsksxob9ZHpseFGsFG1L8Thwi_Sac';
//     const url = `https://api.unsplash.com/search/photos?query=${query}&client_id=${apiKey}`;

//     fetch(url)
//         .then(response => response.json())
//         .then(data => {
//             let imageGallery = document.getElementById('image-gallery');
//             imageGallery.innerHTML = '';
//             data.results.forEach(image => {
//                 let imgDiv = document.createElement('div');
//                 imgDiv.classList.add('image-item');
//                 imgDiv.innerHTML = `<img src="${image.urls.small}" alt="${image.alt_description}">`;
//                 imageGallery.appendChild(imgDiv);
                
//             });
//         })
//         .catch(error => console.error('Error fetching the images:', error));
// }
// let show = document.getElementById("show-more");
// show.addEventListener('click',function(){
//     let query = document.getElementById('search-input').value;
//     searchImages(query+"s");
// })
// show.addEventListener('dblclick',function(){
//     let query = document.getElementById('search-input').value;
//     searchImages(query+"ss");
// })