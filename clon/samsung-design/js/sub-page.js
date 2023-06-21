set_list();



function set_list() {
    let prs = document.location.href.split("?");
    let result1 = prs[1].slice(-2, 8);

    let title_arr = [
        ["os", "Our Stories"],
        ["au", "About Us"],
        ["cr", "Career"],
        ["nw", "News"]
    ];

    for (let i = 0; i <= title_arr.length; i++) {
        if (title_arr[i][0] == result1) {
            //console.log (result1)
            $(".sub-page h1").append(title_arr[i][1]);
            break;
        }
    }

    fetch("./js/data/data.json")
        .then((data) => data.json())
        .then(({ contents }) => {
            let html = '';
            contents.forEach(({ code, img_code, title, sub_title, date }) => {
                if (code == result1) {
                    html += /* html */ `
                    <li class="sub"><a href="#">
                            <figure>
                                <p><img src="./tools/os/${img_code}" alt="${img_code}"></p>
                                <figcaption>
                                    <p class="m-title">${title}</p>
                                    <p class="m-contents">${sub_title}</p>
                                    <sapn class="date">${date}</sapn>
                            </figure>
                        </a>
                    </li>
                `;
                }
            });
            $('.sub-page ul').append(html);
        });
}
// fetch("./js/data/data.json")
//     .then((data) => data.json())
//     .then((obj) => {
//         data = obj.contents;
//         let html = '';
//         data.map(element => {
//             if (element.code == result1) {
//                 html +='<li class="sub"><a href="#">'
//                 html +='<figure><p><img src="./tools/os/' + element.img_code + '" alt="' + element.img_code + '"></p>'
//                 html +='<figcaption>'
//                 html +='<p class="m-title">' + element.title + '</p>'
//                 html +='<p class="m-contents">' + element.sub_title + '</p>'
//                 html +='<sapn class="date">' + element.date + '</sapn>'
//                 html +='</figure> </a> </li>'
//             }
//         });
//         $('.sub-page ul').html(html)
//     });
    
    
    


