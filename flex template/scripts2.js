function borderWhite() {
    document.querySelector('.active').style.borderBottom = "3px solid white";
    document.querySelector('.active').style.color = "white";
}

function borderWhite2() {
    document.querySelector('.active2').style.borderBottom = "3px solid white";
    document.querySelector('.active2').style.color = "white";
}

function borderWhite3() {
    document.querySelector('.active3').style.borderBottom = "3px solid white";
    document.querySelector('.active3').style.color = "white";
}

function borderWhite4() {
    document.querySelector('.active4').style.borderBottom = "3px solid white";
    document.querySelector('.active4').style.color = "white";
}

window.onload = borderWhite2();

let heading = document.querySelector('.heading');
let title = document.querySelector('.title');
let details = document.querySelector('.details');
let exploreBtn = document.querySelector('.explorebtn');
const burger = document.getElementById('burger');
const close = document.getElementById('closer');
const menu = document.querySelector('.burger-menu');

function hideMenu(){
    menu.style.display = "none";
};

function showMenu(){
    menu.style.display = "block";
};

burger.addEventListener('click', function(){
    showMenu();
});

close.addEventListener('click', function(){
    hideMenu();
});


fetch("https://snr4pro.github.io/space_project/space_data.json")
    .then(response => response.json())
    .then(data => {
        heading.innerText = data.space[0].heading;
        title.innerText = data.space[0].title;
        details.innerText = data.space[0].details;
        exploreBtn.innerText = data.space[0].explore;
    })
    

let planets = document.querySelector('.planets');
let distanceAnswer = document.querySelector('.distanceanswer');
let travelAnswer = document.querySelector('.travelanswer');
let distanceMobile = document.querySelector('.distancemobile');
let travelMobile = document.querySelector('.travelmobile');

function moon() {
    fetch("https://snr4pro.github.io/space_project/space_data.json")
        .then(response => response.json())
        .then(data => {
            planets.innerHTML = `<img src="${data.destinations[0].images.png}">`;
            title.innerText = data.destinations[0].name;
            details.innerText = data.destinations[0].description;
            distanceAnswer.innerText = data.destinations[0].distance;
            travelAnswer.innerText = data.destinations[0].travel;
            distanceMobile.innerText = data.destinations[0].distance;
            travelMobile.innerText = data.destinations[0].travel;
            document.getElementById('oneplan').style.borderBottom = "2px solid white";
            document.getElementById('oneplan').style.color = "white";
            document.getElementById('twoplan').style.borderBottom = "2px solid transparent";
            document.getElementById('twoplan').style.color = "#d0d6f9";
            document.getElementById('threeplan').style.borderBottom = "2px solid transparent";
            document.getElementById('threeplan').style.color = "#d0d6f9";
            document.getElementById('fourplan').style.borderBottom = "2px solid transparent";
            document.getElementById('fourplan').style.color = "#d0d6f9";
        })
}

function mars() {
    fetch("https://snr4pro.github.io/space_project/space_data.json")
        .then(response => response.json())
        .then(data => {
            planets.innerHTML = `<img src="${data.destinations[1].images.png}">`;
            title.innerText = data.destinations[1].name;
            details.innerText = data.destinations[1].description;
            distanceAnswer.innerText = data.destinations[1].distance;
            travelAnswer.innerText = data.destinations[1].travel;
            distanceMobile.innerText = data.destinations[1].distance;
            travelMobile.innerText = data.destinations[1].travel;
            document.getElementById('twoplan').style.borderBottom = "2px solid white";
            document.getElementById('twoplan').style.color = "white";
            document.getElementById('oneplan').style.borderBottom = "2px solid transparent";
            document.getElementById('oneplan').style.color = "#d0d6f9";
            document.getElementById('threeplan').style.borderBottom = "2px solid transparent";
            document.getElementById('threeplan').style.color = "#d0d6f9";
            document.getElementById('fourplan').style.borderBottom = "2px solid transparent";
            document.getElementById('fourplan').style.color = "#d0d6f9";
        })
}

function europa() {
    fetch("https://snr4pro.github.io/space_project/space_data.json")
        .then(response => response.json())
        .then(data => {
            planets.innerHTML = `<img src="${data.destinations[2].images.png}">`;
            title.innerText = data.destinations[2].name;
            details.innerText = data.destinations[2].description;
            distanceAnswer.innerText = data.destinations[2].distance;
            travelAnswer.innerText = data.destinations[2].travel;
            distanceMobile.innerText = data.destinations[2].distance;
            travelMobile.innerText = data.destinations[2].travel;
            document.getElementById('threeplan').style.borderBottom = "2px solid white";
            document.getElementById('threeplan').style.color = "white";
            document.getElementById('twoplan').style.borderBottom = "2px solid transparent";
            document.getElementById('twoplan').style.color = "#d0d6f9";
            document.getElementById('oneplan').style.borderBottom = "2px solid transparent";
            document.getElementById('oneplan').style.color = "#d0d6f9";
            document.getElementById('fourplan').style.borderBottom = "2px solid transparent";
            document.getElementById('fourplan').style.color = "#d0d6f9";
        })
}

function titan() {
    fetch("https://snr4pro.github.io/space_project/space_data.json")
        .then(response => response.json())
        .then(data => {
            planets.innerHTML = `<img src="${data.destinations[3].images.png}">`;
            title.innerText = data.destinations[3].name;
            details.innerText = data.destinations[3].description;
            distanceAnswer.innerText = data.destinations[3].distance;
            travelAnswer.innerText = data.destinations[3].travel;
            distanceMobile.innerText = data.destinations[3].distance;
            travelMobile.innerText = data.destinations[3].travel;
            document.getElementById('fourplan').style.borderBottom = "2px solid white";
            document.getElementById('fourplan').style.color = "white";
            document.getElementById('twoplan').style.borderBottom = "2px solid transparent";
            document.getElementById('twoplan').style.color = "#d0d6f9";
            document.getElementById('threeplan').style.borderBottom = "2px solid transparent";
            document.getElementById('threeplan').style.color = "#d0d6f9";
            document.getElementById('oneplan').style.borderBottom = "2px solid transparent";
            document.getElementById('oneplan').style.color = "#d0d6f9";
        })
}

/*--crew--*/





moon();