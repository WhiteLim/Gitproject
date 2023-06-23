let count = 6, last_scroll = 0;
$(".pop_box div").scroll(function () {
    var tmp = $(this).scrollTop();

    if (tmp > last_scroll)
    {
        ++ count;
        $("#reload").css("transform","scale(0." + count + ")");
    } else {
        -- count;
        $("#reload").css("transform","scale(0." + count + ")");
    }
    last_scrollTop = tmp;
    count = last_scrollTop;

})