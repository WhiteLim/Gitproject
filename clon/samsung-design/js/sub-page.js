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
