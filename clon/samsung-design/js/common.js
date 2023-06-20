$(document).ready(function(){
    // header & footer 고정 호출
    $("#header").load("./head.html");
    $("#main").load("./sub-content/main.html");
    $("header nav li").removeClass('underline')
    let renewURL = window.location.pathname;
    history.pushState(null, null, renewURL);
    $("#footer").load("./footer.html");
});