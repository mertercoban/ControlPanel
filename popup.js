
document.addEventListener("DOMContentLoaded", function() {
        
    for(var i=1;i<10;i++){
        var modal;
        var butt;
        var span;
    modal = document.getElementById("myModal"+i);
    butt = document.getElementById("mybutt"+i);
    span = document.getElementsByClassName("close")[0];
    
    (butt).onclick = function(){
        modal.style.display = "block";
    };
    (span).onclick = function (){
        modal.style.display = "none";
    };

    (window).onclick = function (event){
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}
});

const authRoutes = require('./router/authRoutes')

app.use('/',authRoutes)

