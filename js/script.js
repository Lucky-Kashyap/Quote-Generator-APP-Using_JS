
// fetch("https://type.fit/api/quotes").then(function (response) {
//     return response.json();
// }).then(function(response){
//     console.log(response);
// });



// console.log(response);

let show = document.querySelector("#show");

let authorname = document.querySelector("#author");

let btn = document.querySelector("#btn");


btn.addEventListener('click', () => {

    let randomNumber = Math.floor(Math.random() * 1643 + 0);

    // console.log(randomNumber);

    fetch("https://type.fit/api/quotes").then(function (response) {
    return response.json();
}).then(function(response){
    // console.log(response);

    
        let text = response[randomNumber].text;
        let author = response[randomNumber].author;

        show.innerHTML=text;
        authorname.innerHTML =author; 
    
});
});