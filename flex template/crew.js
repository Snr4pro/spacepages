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

window.onload = borderWhite3();

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

function doug() {
    fetch("https://snr4pro.github.io/space_project/space_data.json")
        .then(response => response.json())
        .then(data => {
            document.querySelector('.title').innerText = data.crew[0].role;
            document.querySelector('.name').innerText = data.crew[0].name;
            document.querySelector('.details').innerText = data.crew[0].bio;
            document.querySelector('.box-two').innerHTML = `<img src="${data.crew[0].png}">`;
            document.querySelector('.dial1').style.backgroundColor = "white";
            document.querySelector('.dial2').style.backgroundColor = "#979797";
            document.querySelector('.dial3').style.backgroundColor = "#979797";
            document.querySelector('.dial4').style.backgroundColor = "#979797";
            document.querySelector('.dial1-mob').style.backgroundColor = "white";
            document.querySelector('.dial2-mob').style.backgroundColor = "#979797";
            document.querySelector('.dial3-mob').style.backgroundColor = "#979797";
            document.querySelector('.dial4-mob').style.backgroundColor = "#979797";
            document.querySelector('.dial1-mob2').style.backgroundColor = "white";
            document.querySelector('.dial2-mob2').style.backgroundColor = "#979797";
            document.querySelector('.dial3-mob2').style.backgroundColor = "#979797";
            document.querySelector('.dial4-mob2').style.backgroundColor = "#979797";
        })
}

function mark() {
    fetch("https://snr4pro.github.io/space_project/space_data.json")
        .then(response => response.json())
        .then(data => {
            document.querySelector('.title').innerText = data.crew[1].role;
            document.querySelector('.name').innerText = data.crew[1].name;
            document.querySelector('.details').innerText = data.crew[1].bio;
            document.querySelector('.box-two').innerHTML = `<img src="${data.crew[1].png}">`;
            document.querySelector('.dial2').style.backgroundColor = "white";
            document.querySelector('.dial1').style.backgroundColor = "#979797";
            document.querySelector('.dial3').style.backgroundColor = "#979797";
            document.querySelector('.dial4').style.backgroundColor = "#979797";
            document.querySelector('.dial2-mob').style.backgroundColor = "white";
            document.querySelector('.dial1-mob').style.backgroundColor = "#979797";
            document.querySelector('.dial3-mob').style.backgroundColor = "#979797";
            document.querySelector('.dial4-mob').style.backgroundColor = "#979797";
            document.querySelector('.dial2-mob2').style.backgroundColor = "white";
            document.querySelector('.dial1-mob2').style.backgroundColor = "#979797";
            document.querySelector('.dial3-mob2').style.backgroundColor = "#979797";
            document.querySelector('.dial4-mob2').style.backgroundColor = "#979797";

        })
}

function victor() {
    fetch("https://snr4pro.github.io/space_project/space_data.json")
        .then(response => response.json())
        .then(data => {
            document.querySelector('.title').innerText = data.crew[2].role;
            document.querySelector('.name').innerText = data.crew[2].name;
            document.querySelector('.details').innerText = data.crew[2].bio;
            document.querySelector('.box-two').innerHTML = `<img src="${data.crew[2].png}">`;
            document.querySelector('.dial3').style.backgroundColor = "white";
            document.querySelector('.dial1').style.backgroundColor = "#979797";
            document.querySelector('.dial2').style.backgroundColor = "#979797";
            document.querySelector('.dial4').style.backgroundColor = "#979797";
            document.querySelector('.dial3-mob').style.backgroundColor = "white";
            document.querySelector('.dial1-mob').style.backgroundColor = "#979797";
            document.querySelector('.dial2-mob').style.backgroundColor = "#979797";
            document.querySelector('.dial4-mob').style.backgroundColor = "#979797";
            document.querySelector('.dial3-mob2').style.backgroundColor = "white";
            document.querySelector('.dial1-mob2').style.backgroundColor = "#979797";
            document.querySelector('.dial2-mob2').style.backgroundColor = "#979797";
            document.querySelector('.dial4-mob2').style.backgroundColor = "#979797";
        })
}

function anoush() {
    fetch("https://snr4pro.github.io/space_project/space_data.json")
        .then(response => response.json())
        .then(data => {
            document.querySelector('.title').innerText = data.crew[3].role;
            document.querySelector('.name').innerText = data.crew[3].name;
            document.querySelector('.details').innerText = data.crew[3].bio;
            document.querySelector('.box-two').innerHTML = `<img src="${data.crew[3].png}">`;
            document.querySelector('.dial4').style.backgroundColor = "white";
            document.querySelector('.dial1').style.backgroundColor = "#979797";
            document.querySelector('.dial3').style.backgroundColor = "#979797";
            document.querySelector('.dial2').style.backgroundColor = "#979797";
            document.querySelector('.dial4-mob').style.backgroundColor = "white";
            document.querySelector('.dial1-mob').style.backgroundColor = "#979797";
            document.querySelector('.dial3-mob').style.backgroundColor = "#979797";
            document.querySelector('.dial2-mob').style.backgroundColor = "#979797";
            document.querySelector('.dial4-mob2').style.backgroundColor = "white";
            document.querySelector('.dial1-mob2').style.backgroundColor = "#979797";
            document.querySelector('.dial3-mob2').style.backgroundColor = "#979797";
            document.querySelector('.dial2-mob2').style.backgroundColor = "#979797";
        })
}

let radio1 = document.querySelector('#radio1');
let radio2 = document.querySelector('#radio2');
let radio3 = document.querySelector('#radio3');
let radio4 = document.querySelector('#radio4');




var counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    doug();
    assign();
    if (counter > 4) {
        counter = 1;
    }
}, 10000);

function assign(){
    if (counter == 1) {
        doug();
    }
    if (counter == 2) {
        mark();
    }
    if (counter == 3) {
        victor();
    }
    if (counter == 4) {
        anoush();
    }
};



window.onload = doug();





