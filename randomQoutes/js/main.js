var qoute = document.getElementById("quote");
var author = document.getElementById("author");

var qoutes=[
    {
        qoute:"Be yourself; everyone else is already taken." ,
        author:"Oscar Wilde"
    },
    {
        qoute:"A friend is someone who knows all about you and still loves you." ,
        author:"Elbert Hubbard"
    },
    {
        qoute:"So many books, so little time." ,
        author:"Frank Zappa"
    },
    {
        qoute:"A room without books is like a body without a soul." ,
        author:"Marcus Tullius Cicero"
    },
    {
        qoute:"You only live once, but if you do it right, once is enough." ,
        author:"Mae West"
    },
];

// document.getElementById("qouteDiv").style.visibility = "hidden";
var oldrandom = -99;

function qouteGen(){

    document.getElementById("qouteDiv").style.visibility = "unset";
    document.getElementById("button").innerHTML="New Qoute";
    randomNumber = changeRandom();    
    qoute.innerHTML=` ${qoutes[randomNumber]["qoute"]} `;
    author.innerHTML=` ${qoutes[randomNumber]["author"]}  `;
    oldrandom =randomNumber;

}   


function returnRandom(){
    var randomNumber= Math.random() * (qoutes.length);
    randomNumber = Math.floor(randomNumber);
    return randomNumber
}


function changeRandom(){
    while (true){
        random = returnRandom();
        if (oldrandom != random){
            break;
        }
    }
    return random
}


