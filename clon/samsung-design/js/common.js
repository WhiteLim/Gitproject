$(document).ready(function(){
    // header & footer 고정 호출
    $("#header").load("./head.html");
    $("#main").load("./sub-content/main.html");
    $("header nav li").removeClass('underline')
    let renewURL = window.location.pathname;
    history.pushState(null, null, renewURL);
    $("#footer").load("./footer.html");

    if (window.history && history.pushState) {
        addEventListener('load', function () {
            addEventListener('popstate', function () {
                let prs = document.location.href.split("?");
                let result1 = prs[1].slice(-2, 8);

                const li_lenght = document.querySelectorAll("header nav ul li");

                li_lenght.forEach(function(v,k){
                    let name = v.id;
                    if(result1 == name){
                        let id = name, idx=k+1;
                        $("header nav li").removeClass('underline')
                        $("header nav li:nth-of-type("+ idx +")").addClass('underline')
                        $("#main").load("./sub-content/sub_page.html");
                        let renewURL = window.location.pathname;
                        renewURL += '?c-id='+id;
                        history.pushState(null, null, renewURL);
                    }
                })

            })
        })
    }

   
});

function email_pops() {
    $("#popsd").css("display","block")
    $("#popsd").load("./sub-content/email.html");
    $("body").css("overflow-y","hidden")
}

function pro_pops() {
    $("#popsd").css("display","block")
    $("#popsd").load("./sub-content/pro.html");
    $("body").css("overflow-y","hidden")
}