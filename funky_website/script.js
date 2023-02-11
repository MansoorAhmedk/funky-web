const nameInput = document.getElementById("name");
const submitButton = document.getElementById("submit");
const response = document.getElementById("response");
const responses = [
    {
        text: "You're looking groovy today!",
        image: "https://media0.giphy.com/media/3o6ZtgnmZDZeAshxYY/200w.webp?cid=ecf05e47yqcvi1s35qhrwl132remn11kv4fbdlov3qy0by89&rid=200w.webp&ct=g"
    },
    {
        text: "Funky fresh! That's what you are!",
        image: "https://media3.giphy.com/media/cGuzKb1PfOaTCWbOLe/200w.webp?cid=ecf05e47gb47ks20ei3ti1djmxdoqyyloytox7nvfgkdc3e3&rid=200w.webp&ct=g"
    },
    {
        text: "You're the king/queen of funk!",
        image: "https://media3.giphy.com/media/Lp71UWmAAeJHi/200w.webp?cid=ecf05e477d2u88t8zrht5vgvg8t6rvk5s1blb4jecczjiu3f&rid=200w.webp&ct=g"
    },
    {
        text: "You light up the room with your funky style!",
        image: "https://media0.giphy.com/media/6zeSNWc2BBmnWB1NUa/200w.webp?cid=ecf05e47qftvnk2gv0omaeqjtmbhl726svxr67ah8xv4gi0i&rid=200w.webp&ct=g"
    },
    {
        text: "Funky and fabulous, just like you!",
        image: "https://media2.giphy.com/media/IrQcyTog3X8VW/giphy.webp?cid=ecf05e475bh21qcsy06m63o8r2pv5nfbixmfx6xwnomiu5r9&rid=giphy.webp&ct=g"
    }
    ];

submitButton.addEventListener("click", function() {
const name = nameInput.value;
const randomIndex = Math.floor(Math.random() * responses.length);
const responseText = responses[randomIndex].text;
const responseImage = responses[randomIndex].image;
response.innerHTML = `Hello, <b>${name}</b>! 😂 ${responseText} <br><img src="${responseImage}" style="width:300px;">`;
});