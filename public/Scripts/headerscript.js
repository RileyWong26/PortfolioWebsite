// Events for the Home card

var cards = document.getElementsByClassName("cardcontainer");
for (var i = 0; i < cards.length; i++){
    cards[i].addEventListener("mouseover", function(){
        this.classList.toggle("rotate-y-180");
    });
    cards[i].addEventListener("mouseout", function(){
        this.classList.toggle("rotate-y-180");
    });
};

var section = window.location.pathname.split("/")[1];
console.log(section);
if(section === ""){
    document.getElementById("HeaderHomeImg").classList.toggle("hidden");
    document.getElementById("HeaderHomeImg2").classList.toggle("hidden");
    document.getElementById("HeaderHome").classList.toggle("bg-background3");
}


