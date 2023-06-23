let count = 0.4, last_scrollTop = 0;
$(".pop_box div").scroll(function () {
    var tmp = $(this).scrollTop();
    console.log (last_scrollTop,tmp)
    if (tmp > last_scrollTop)
    {
        
        if (count >= 1) {
            count = 1
        } else {
            count += 0.01; 
        }
        
        $("#reload").css("transform","scale(" + count + ")");
    
    } else {
            count -= 0.01; 
        $("#reload").css("transform","scale(" + count + ")");
    }
    last_scrollTop = tmp;
})