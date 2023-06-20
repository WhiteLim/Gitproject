$(document).ready(function(){
    // header & footer 고정 호출
    $("#header").load("./head.html");
    $("#main").load("./sub-content/main.html");
    var renewURL = window.location.pathname;
    history.pushState(null, null, renewURL);
    $("#footer").load("./footer.html");


    


});