
var divs = document.getElementById("divs");

var div1 = document.getElementById("misson");
var div2 = document.getElementById("customer");
var div3 = document.getElementById("ideas");

var a1 = document.getElementById("div1");
var a2 = document.getElementById("div2");
var a3 = document.getElementById("div3");
var allWorks = document.getElementById("allWorks");
var worksContainerInside = document.querySelector(".works-container").querySelectorAll("div.col");



a1.addEventListener("click" , () => {
    if (!div1.classList.contains("activeClass")){
        div1.classList.add("activeClass");
        div2.classList.remove("activeClass");
        div3.classList.remove("activeClass");
    }
})

a2.addEventListener("click" , () => {
    if (!div2.classList.contains("activeClass")){
        div2.classList.add("activeClass");
        div1.classList.remove("activeClass");
        div3.classList.remove("activeClass");
    }

})

a3.addEventListener("click" , () => {
    if (!div3.classList.contains("activeClass")){
        div3.classList.add("activeClass");
        div2.classList.remove("activeClass");
        div1.classList.remove("activeClass");
    }
})




function showdiv(number){
    console.log(number);
}



allWorks.addEventListener("click", function(e) {

    for (var index=0; index < allWorks.children.length ; index++){
        var targetedButton = allWorks.children[index].querySelector("button")
        if(e.target.getAttribute("id") == targetedButton.getAttribute("id")){
            targetedButton.classList.add("active");
            
            for(var div=0; div<worksContainerInside.length ;div++){
                if(!worksContainerInside[div].classList.contains(targetedButton.getAttribute("id"))){
                    worksContainerInside[div].classList.add("d-none" )
                }
                else{
                    worksContainerInside[div].classList.remove("d-none");
                }
            }
        }
        else{
            targetedButton.classList.remove("active");
        }
    }

})