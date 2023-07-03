$(document).ready(function () {
    $("#search").click(function () {
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
    });

    $("#mains").click(function () {
        $("#main").load("./sub-content/main.html");
        let renewURL = window.location.pathname;
        history.pushState(null, null, renewURL);
        $("header nav li").removeClass('underline')
    });

    $("header nav li").click(function () {
        let id = $(this).attr('id');
        let idx = $(this).index() + 1;
        $("header nav li").removeClass('underline')
        $("header nav li:nth-of-type(" + idx + ")").addClass('underline')
        $("#main").load("./sub-content/sub_page.html");
        let renewURL = window.location.pathname;
        renewURL += '?c-id=' + id;
        history.pushState(null, null, renewURL);
    });





});

function function1(key) {
    $("#main").load(key);
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