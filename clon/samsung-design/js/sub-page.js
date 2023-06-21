let para = document.location.href.split("?");
let result1 = para[1].slice(-2, 8);

let title_arr = [ 
    ["os","Our Stories"],
    ["au","About Us"],
    ["cr","Career"],
    ["nw","News"]
];

for (let i=0; i<= title_arr.length; i++){
    if (title_arr[i][0] == result1){
        //console.log (result1)
        $(".sub-page h1").append(title_arr[i][1]);
        break;
    }
}


fetch("./js/data/data.json")
    .then((data) => data.json())
    .then((obj) => {
        data = obj.contents;
        console.log(data);
        let html = '';
        data.map(element => {
            if (element.code == result1) {
                html +='<li class="sub"><a href="#">'
                html +='<figure><p><img src="./tools/os/' + element.img_code + '" alt="' + element.img_code + '"></p>'
                html +='<figcaption>'
                html +='<p class="m-title">' + element.title + '</p>'
                html +='<p class="m-contents">' + element.sub_title + '</p>'
                html +='<sapn class="date">' + element.date + '</sapn>'
                html +='</figure> </a> </li>'

                console.log(element);
            }
        });
        $('.sub-page ul').html(html)
    });
    
    
    


