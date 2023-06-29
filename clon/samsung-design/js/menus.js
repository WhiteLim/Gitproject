
        $("nav li").click(function(){
        let id = $(this).attr('id'); 
        let idx = $(this).index() +1;
        $("header nav li").removeClass('underline')
        $("header nav li:nth-of-type("+ idx +")").addClass('underline')
        $("#main").load("./sub-content/sub_page.html");
        let renewURL = window.location.pathname;
        renewURL += '?c-id='+id;
        history.pushState(null, null, renewURL);
    });