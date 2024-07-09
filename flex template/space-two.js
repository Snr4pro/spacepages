var burger = document.getElementById('burger');
var menu = document.querySelector('.menu');
var close = document.getElementById('close');
var menuSelect = document.querySelector('.menu-pages');
var home = document.getElementById('home');
var destination = document.getElementById('destin');
var crew = document.getElementById('crew');
var tech = document.getElementById('tech');

burger.addEventListener('click', () => {
  menu.classList.add('active');
  menu.style.display = "block";
})

close.addEventListener('click', () => {
  menu.classList.remove('active');
})

function menuClose() {
  menu.classList.remove('active');
  menu.style.display = "none";
}


let moonTitle = document.getElementById('moontitle');
let planets = document.querySelector('.planets');
let moonDescript = document.getElementById('moondescript');
let moonDist = document.getElementById('moondistance');
let moonTravel = document.getElementById('moontravel');

function moon() {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      planets.innerHTML = `<img src="${data.destinations[0].images.png}">`
      moonTitle.innerText = data.destinations[0].name
      moonDescript.innerText = data.destinations[0].description
      moonDist.innerText = data.destinations[0].distance
      moonTravel.innerText = data.destinations[0].travel
    })
    .catch(error => alert(error))
};

function mars() {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      planets.innerHTML = `<img src="${data.destinations[1].images.png}">`
      moonTitle.innerText = data.destinations[1].name
      moonDescript.innerText = data.destinations[1].description
      moonDist.innerText = data.destinations[1].distance
      moonTravel.innerText = data.destinations[1].travel
    })
    .catch(error => alert(error))
};

function europa() {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      planets.innerHTML = `<img src="${data.destinations[2].images.png}">`
      moonTitle.innerText = data.destinations[2].name
      moonDescript.innerText = data.destinations[2].description
      moonDist.innerText = data.destinations[2].distance
      moonTravel.innerText = data.destinations[2].travel
    })
    .catch(error => alert(error))
};

function titan() {
  fetch("data.json")
    .then(response => response.json())
    .then(data => {
      planets.innerHTML = `<img src="${data.destinations[3].images.png}">`
      moonTitle.innerText = data.destinations[3].name
      moonDescript.innerText = data.destinations[3].description
      moonDist.innerText = data.destinations[3].distance
      moonTravel.innerText = data.destinations[3].travel
    })
    .catch(error => alert(error))
};

window.onload = moon();

let crewJob = document.querySelector('.job');
let crewJob2 = document.querySelector('.job2');
let crewJob3 = document.querySelector('.job3');
let crewJob4 = document.querySelector('.job4');
let crewName = document.querySelector('.name');
let crewName2 = document.querySelector('.name2');
let crewName3 = document.querySelector('.name3');
let crewName4 = document.querySelector('.name4');
let crewDescript = document.querySelector('.crewdescript');
let crewDescript2 = document.querySelector('.crewdescript2');
let crewDescript3 = document.querySelector('.crewdescript3');
let crewDescript4 = document.querySelector('.crewdescript4');
let crewPics = document.querySelector('.crew');
let douglas = document.getElementById('doug');


cards = [
  {
    name: "Douglas Hurley",
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."

  },
  {
    name: "Mark Shuttleworth",
    role: "Mission Specialist",
    bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."
  },
  {
    name: "Victor Glover",
    role: "Pilot",
    bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."
  },
  {
    name: "Anousheh Ansari",
    role: "Flight Engineer",
    bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."
  }
];

crewDescript.innerText = cards[0].bio;
crewDescript2.innerText = cards[1].bio;
crewDescript3.innerText = cards[2].bio;
crewDescript4.innerText = cards[3].bio;

douglas.innerText = cards[0].png;

var counter = 1;
setInterval(function () {
  document.getElementById('radio' + counter).checked = true;
  counter++;
  if (counter > 4) {
    counter = 1;
  }
}, 12000);





