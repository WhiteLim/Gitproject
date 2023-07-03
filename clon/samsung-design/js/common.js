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
                console.log[prs]
                if(prs[1] == undefined){
                    $("#main").load("./sub-content/main.html");
                    $("header nav li").removeClass('underline');
                } else {
                    let result1 = prs[1].slice(-2, 8);
                    const li_lenght = document.querySelectorAll("header nav ul li");
                    li_lenght.forEach(function(v,k){
                        let name = v.id;
                        if(result1 == name){
                            let idx=k;
                            $("header nav li").removeClass('underline').eq(idx).addClass('underline')
                            $("#main").load("./sub-content/sub_page.html");
                        }
                    })
                }

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