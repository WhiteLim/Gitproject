$(document).ready(function () {
    $(".search").click(function () {
        if ($(".bg").css("display") != "block") {
            $(".bg").css("display", "block");
            $(".search-box").slideDown();
            $(".search-box").css("display", "flex");
        } else {
            $(".bg").css("display", "none");
            $(".search-box").slideUp();
        }
    });


    $(".bg").click(function () {
        $(".search-box").slideUp();
        $(".bg").css("display", "none");
        const set = document.querySelector(".search-page"),
        sear_input = document.querySelector("#searchd")
        set.innerHTML= `<h1></h1><ul></ul><div class="mor">more</div>`
        sear_input.value=null
    });

    $("#mains").click(function () {
        $(".search-box").slideUp();
        $(".bg").css("display", "none");
        $("#main").load("./sub-content/main.html");
        let renewURL = window.location.pathname;
        history.pushState(null, null, renewURL);
        $("header nav li").removeClass('underline')
    });

    $("header nav li").click(function () {
        let id = $(this).attr('id');
        let idx = $(this).index() + 1;
        $(".search-box").slideUp();
        $(".bg").css("display", "none");
        $("header nav li").removeClass('underline')
        $("header nav li:nth-of-type(" + idx + ")").addClass('underline')
        $("#main").load("./sub-content/sub_page.html");
        let renewURL = window.location.pathname;
        renewURL += '?c-id=' + id;
        history.pushState(null, null, renewURL);
    });

    

    $(".mobile .nav li").click(function () {
        let id = $(this).attr('id');
        let idx = $(this).index() + 1;
        $(".search-box").slideUp();
        $(".bg").css("display", "none");
        $("header nav li").removeClass('underline')
        $("header nav li:nth-of-type(" + idx + ")").addClass('underline')
        $("#main").load("./sub-content/sub_page.html");
        let renewURL = window.location.pathname;
        renewURL += '?c-id=' + id;
        history.pushState(null, null, renewURL);
        m_nav.classList.toggle("open")
        m_close.classList.toggle("open")
    });





});

function function1(key,device) {
    if(device == 'm'){
        m_nav.classList.toggle("open")
        m_close.classList.toggle("open")

    }else {
        $("#main").load(key);
    }
}


function az_sarch(k) {    
    searchkey = k
    $.ajax({
        type: "GET",
        url: "./search/",
        success: function (v) {
            $("#search-end").css("display","block");
            $("#search-end").html(v)
        }
    })
}


$(".search-box label").click(function(){
    let deg = $("#searchd").val()
    az_sarch(deg)
})

const m_gnb = document.querySelector(".mobile ul li:nth-of-type(2)"),
m_nav = document.querySelector(".mobile .nav"),
m_close = document.querySelector(".mobile ul li:nth-of-type(2) span")

console.log(m_close)

m_gnb.onclick=()=>{
    m_nav.classList.toggle("open")
    m_close.classList.toggle("open")
    m_gnb.style
}