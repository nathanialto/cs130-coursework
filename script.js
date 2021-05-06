function homework(elem) {
    document.getElementById("homework").style.display = "block";
    document.getElementById("homework_title").style.display = "block";

    document.getElementById("inspo").style.display = "none";
    document.getElementById("inspo_title").style.display = "none";

    document.getElementById("tutorials").style.display = "none";
    document.getElementById("tutorials_title").style.display = "none";

}

function inspo(elem) {
    document.getElementById("homework").style.display = "none";
    document.getElementById("homework_title").style.display = "none";

    document.getElementById("inspo").style.display = "block";
    document.getElementById("inspo_title").style.display = "block";

    document.getElementById("tutorials").style.display = "none";
    document.getElementById("tutorials_title").style.display = "none";
}

function tutorials(elem) {
    document.getElementById("homework").style.display = "none";
    document.getElementById("homework_title").style.display = "none";

    document.getElementById("inspo").style.display = "none";
    document.getElementById("inspo_title").style.display = "none";

    document.getElementById("tutorials").style.display = "block";
    document.getElementById("tutorials_title").style.display = "block";
}
  
function myFunction1(elem) {
    var x = document.getElementById(elem);
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}