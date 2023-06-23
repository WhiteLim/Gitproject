let count = 0.4, last_scrollTop = 0;
$(".pop_box div").scroll(function () {
    let sc = count.toFixed(2)
    let tmp = $(this).scrollTop();


    if (tmp > last_scrollTop){
        
        if (sc >= 1) {
            count = 1
        } else {
            count += 0.02; 
        }
        
        $("#reload").css("transform","scale(" + sc + ")");
    
    } else {
        if (sc <= 0.42) {
            count = 0.4
        } else {
            count -= 0.02; 
            $("#reload").css("transform","scale(" + sc + ")");
        }
    }

    if (count <= 0.4){
        last_scrollTop = 0;
    } else {
        last_scrollTop = tmp;
    }

})