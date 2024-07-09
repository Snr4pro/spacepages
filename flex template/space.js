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


cards = [
    {
        name: "Doug Hurley",
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

var counter = 1;
setInterval(function(){
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if(counter > 4){
        counter = 1;
    }
}, 12000);





