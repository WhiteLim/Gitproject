let count = 0.4, last_scrollTop = 0;
$(".pop_box div").scroll(function () {
    var tmp = $(this).scrollTop();
    if (tmp > last_scrollTop)
    {
        
        if (count >= 1) {
            count = 1
        } else {
            count += 0.02; 
        }
        
        $("#reload").css("transform","scale(" + count + ")");
    
    } else {
        if (count <= 0) {
            count = 0.4
        } else {
            count -= 0.02; 
        }
        $("#reload").css("transform","scale(" + count + ")");
    }
    
    console.log(count)

    if (count <= 0.5){
        last_scrollTop = 0;
    } else {
        last_scrollTop = tmp;
    }

})