
var urlParams = new URLSearchParams(window.location.search);
var storyID = urlParams.get("story");


var newsData = {
    "1": {
        title: "Government announces new policy on education reforms",
        body: "The central government has introduced major reforms focusing on skill-based learning, digital classrooms, and training programs. These policies aim to modernize the education system and improve access to technology across rural and urban schools. Experts say this step could reshape education over the next decade.",
        image: "images/education.jpg"
    },
    "2": {
        title: "Heavy rains disrupt normal life in several cities",
        body: "Several major cities experienced flooding, traffic delays, and power cuts due to heavy overnight rainfall. Meteorologists warn that more rain is expected in the coming days. Residents are advised to stay indoors unless necessary and to follow local advisories.",
        image: "images/rain.jpg"
    },
    "3": {
        title: "Startup ecosystem sees record funding this quarter",
        body: "Despite global economic uncertainty, the startup ecosystem has seen record funding this quarter. Investors are particularly interested in fintech, health tech, and edtech companies who are solving real-world problems with innovative solutions.",
        image: "images/education.jpg"
    },
    "4": {
        title: "National team registers historic win in final match",
        body: "In an unbelievable last-over finish, the national cricket team clinched a historic victory. Fans celebrated across the country as this win secured the championship trophy for the first time in 12 years.",
        image: "images/cricket.jpg"
    },
    "5": {
        title: "Star striker scores hat-trick in league clash",
        body: "The star striker delivered a stunning performance, scoring three goals in a single match. This crucial win keeps the team at the top of the league table and boosts confidence ahead of the upcoming finals.",
        image: "images/football.jpg"
    },
    "6": {
        title: "Badminton pair enters semifinals of major tournament",
        body: "The national badminton pair displayed superb coordination and strong defense to defeat the top-seeded opponents. They now move into the semifinals, carrying the hopes of millions of fans.",
        image: "images/badminton.jpg"
    },
    "7": {
        title: "Young athlete breaks national record in 100m sprint",
        body: "A 19-year-old sprinter has broken the long-standing national record in the 100m event. Coaches believe this is just the beginning of a promising career on the international stage.",
        image: "images/sprint.jpg"
    }
};


var titleEl = document.getElementById("newsTitle");
var bodyEl = document.getElementById("newsBody");
var imageEl = document.getElementById("newsImage");

if (newsData[storyID]) {
    titleEl.textContent = newsData[storyID].title;
    bodyEl.textContent = newsData[storyID].body;
    imageEl.src = newsData[storyID].image;
    imageEl.alt = newsData[storyID].title;
} else {
    titleEl.textContent = "News Not Found";
    bodyEl.textContent = "The news story you are looking for does not exist.";
    imageEl.style.display = "none";
}
