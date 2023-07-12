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
    author.innerHTML="";
    document.getElementById("qouteDiv").style.visibility = "unset";
    document.getElementById("button").innerHTML="New Qoute";
    randomNumebr = returnRandom();


    while (true){
        randomNumebr = returnRandom();
        if (oldrandom != randomNumebr){
            break;
        }
    }

    qoute.innerHTML=` ${qoutes[randomNumebr]["qoute"]} `;
    author.innerHTML=` ${qoutes[randomNumebr]["author"]}  `;
    var index=0;

    
    function type() {
        
        var name = qoutes[randomNumebr]["author"];
        
        if (index < name.length) {
            author.innerHTML += name[index];
            index++;
            setTimeout(type, 90);  
        }
    }
    
    type(randomNumebr);

    oldrandom =randomNumebr;
    
}


function returnRandom(){
    var randomNumber= Math.random() * (qoutes.length-1);
    randomNumber = Math.round(randomNumber);
    return randomNumber
}


