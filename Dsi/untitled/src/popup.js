

document.addEventListener("DOMContentLoaded", function() {
    var modal = document.getElementById("myModal");
    var butt = document.getElementById("mybutt");
    var span = document.getElementsByClassName("close")[0];

    butt.onclick = function(){
        modal.style.display = "block";
    };

    span.onclick = function (){
        modal.style.display = "none";
    };

    window.onclick = function (event){
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
});
