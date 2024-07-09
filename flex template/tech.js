const burger = document.getElementById('burger');
const close = document.getElementById('closer');
const menu = document.querySelector('.burger-menu');

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

window.onload = borderWhite4();

function hideMenu(){
    menu.style.display = "none";
};

function showMenu(){
    menu.style.display = "block";
};

burger.addEventListener('click', function(){
    menu.style.right = "0%";
    showMenu();
});

close.addEventListener('click', function(){
    menu.style.right = "-100%";
    hideMenu();
});


function firstLaunch(){
fetch("https://snr4pro.github.io/space_project/space_data.json")
        .then(response => response.json())
        .then(data => {
            document.querySelector('.title').innerText = data.technology[0].name;
            document.querySelector('.details').innerText = data.technology[0].description;
            document.querySelector('.box-two').innerHTML = `<img src="${data.technology[0].portrait}">`;
            document.querySelector('.space-one').style.backgroundColor = "white";
            document.querySelector('.space-one').style.color = "black";
            document.querySelector('.space-two').style.color = "white";
            document.querySelector('.space-three').style.color = "white";
            document.querySelector('.space-two').style.backgroundColor = "transparent";
            document.querySelector('.space-three').style.backgroundColor = "transparent";
        })
    }



function techOne() {
    fetch("https://snr4pro.github.io/space_project/space_data.json")
        .then(response => response.json())
        .then(data => {
            document.querySelector('.title').innerText = data.technology[0].name;
            document.querySelector('.details').innerText = data.technology[0].description;
            document.querySelector('.box-two').innerHTML = `<img src="${data.technology[0].portrait}">`;
            document.querySelector('.space-one').style.backgroundColor = "white";
            document.querySelector('.space-one').style.color = "black";
            document.querySelector('.space-two').style.color = "white";
            document.querySelector('.space-three').style.color = "white";
            document.querySelector('.space-two').style.backgroundColor = "transparent";
            document.querySelector('.space-three').style.backgroundColor = "transparent";
        })
}

function techOne2() {
    fetch("https://snr4pro.github.io/space_project/space_data.json")
        .then(response => response.json())
        .then(data => {
            document.querySelector('.title').innerText = data.technology[0].name;
            document.querySelector('.details').innerText = data.technology[0].description;
            document.querySelector('.box-two').innerHTML = `<img src="${data.technology[0].landscape}">`;
            document.querySelector('.space-one2').style.backgroundColor = "white";
            document.querySelector('.space-one2').style.color = "black";
            document.querySelector('.space-two2').style.color = "white";
            document.querySelector('.space-three2').style.color = "white";
            document.querySelector('.space-two2').style.backgroundColor = "transparent";
            document.querySelector('.space-three2').style.backgroundColor = "transparent";
        })
}

function techTwo() {
    fetch("https://snr4pro.github.io/space_project/space_data.json")
        .then(response => response.json())
        .then(data => {
            document.querySelector('.title').innerText = data.technology[1].name;
            document.querySelector('.details').innerText = data.technology[1].description;
            document.querySelector('.box-two').innerHTML = `<img src="${data.technology[1].portrait}">`;
            document.querySelector('.space-two').style.backgroundColor = "white";
            document.querySelector('.space-two').style.color = "black";
            document.querySelector('.space-one').style.color = "white";
            document.querySelector('.space-three').style.color = "white";
            document.querySelector('.space-one').style.backgroundColor = "transparent";
            document.querySelector('.space-three').style.backgroundColor = "transparent";
        })
}

function techTwo2() {
    fetch("https://snr4pro.github.io/space_project/space_data.json")
        .then(response => response.json())
        .then(data => {
            document.querySelector('.title').innerText = data.technology[1].name;
            document.querySelector('.details').innerText = data.technology[1].description;
            document.querySelector('.box-two').innerHTML = `<img src="${data.technology[1].landscape}">`;
            document.querySelector('.space-two2').style.backgroundColor = "white";
            document.querySelector('.space-two2').style.color = "black";
            document.querySelector('.space-one2').style.color = "white";
            document.querySelector('.space-three2').style.color = "white";
            document.querySelector('.space-one2').style.backgroundColor = "transparent";
            document.querySelector('.space-three2').style.backgroundColor = "transparent";
        })
}

function techThree() {
    fetch("https://snr4pro.github.io/space_project/space_data.json")
        .then(response => response.json())
        .then(data => {
            document.querySelector('.title').innerText = data.technology[2].name;
            document.querySelector('.details').innerText = data.technology[2].description;
            document.querySelector('.box-two').innerHTML = `<img src="${data.technology[2].portrait}">`;
            document.querySelector('.space-three').style.backgroundColor = "white";
            document.querySelector('.space-three').style.color = "black";
            document.querySelector('.space-one').style.color = "white";
            document.querySelector('.space-two').style.color = "white";
            document.querySelector('.space-one').style.backgroundColor = "transparent";
            document.querySelector('.space-two').style.backgroundColor = "transparent";
        })
}

function techThree2() {
    fetch("https://snr4pro.github.io/space_project/space_data.json")
        .then(response => response.json())
        .then(data => {
            document.querySelector('.title').innerText = data.technology[2].name;
            document.querySelector('.details').innerText = data.technology[2].description;
            document.querySelector('.box-two').innerHTML = `<img src="${data.technology[2].landscape}">`;
            document.querySelector('.space-three2').style.backgroundColor = "white";
            document.querySelector('.space-three2').style.color = "black";
            document.querySelector('.space-one2').style.color = "white";
            document.querySelector('.space-two2').style.color = "white";
            document.querySelector('.space-one2').style.backgroundColor = "transparent";
            document.querySelector('.space-two2').style.backgroundColor = "transparent";
        })
}

document.addEventListener('DOMContentLoaded', init);
function init() {
    let query = window.matchMedia("(max-width: 1024px)");
    if (query.matches) {
        window.onload = techOne2();
    } 
}

window.onload = firstLaunch();





