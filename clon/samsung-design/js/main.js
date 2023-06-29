li_opens();
nress();


function nress() {
    let idx = '';
    $("#mrs div").click(function () {
        let id = $(this).attr('id');
        if (id == "os") { idx = 1; } else if (id == "nw") { idx = 4; }
        $("header nav li").removeClass('underline');
        $("header nav li:nth-of-type(" + idx + ")").addClass('underline');
        $("#main").load("./sub-content/sub_page.html");
        let renewURL = window.location.pathname;
        renewURL += '?c-id=' + id;
        history.pushState(null, null, renewURL);
    });
}

function li_opens() {
    const li_opend = document.querySelectorAll(".sort > div > ul > li ")
    li_opend.forEach(function(v,k){
        v.onclick=function(){
            if($('.sd').eq(k).css("display") == "none"){
                $('.sd').slideUp().eq(k).slideDown()
            } else {
                $('.sd').eq(k).slideUp()
            }
        }
    })
}
