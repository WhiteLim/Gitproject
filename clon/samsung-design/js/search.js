
function all_contents(){
    fetch("./js/data/data.json")
        .then((data) => data.json())
        .then(({ contents }) => {
            let html = '';
            let cnt = 0;
            contents.forEach(({ code, img_code, title, sub_title, date }) => {
                    if (cnt < 9) {
                        html += /* html */ `
                            <li class="sub" onclick="javascript:pops();">
                                    <figure>
                                        <p><img src="./tools/${code}/${img_code}" alt="${img_code}"></p>
                                        <figcaption>
                                            <p class="m-title">${title}</p>
                                            <p class="m-contents">${sub_title}</p>
                                            <sapn class="date">${date}</sapn>
                                    </figure>
                            </li>
                        `;
                    } else {
                        html += /* html */ `
                            <li class="sub" onclick="javascript:pops();" style="display:none;">
                                    <figure>
                                        <p><img src="./tools/${code}/${img_code}" alt="${img_code}"></p>
                                        <figcaption>
                                            <p class="m-title">${title}</p>
                                            <p class="m-contents">${sub_title}</p>
                                            <sapn class="date">${date}</sapn>
                                    </figure>
                            </li>
                        `;
                        $(".mor").css("display","block");

                    }
                cnt ++;
            });
            $('.search-page ul').append(html);
        });
        key='';
}

function key_contents(k){
    console.log(`${k}에 맞는 컨텐츠만 출력`)
    fetch("./js/data/data.json")
    .then((data) => data.json())
    .then(({ contents }) => {
        let html = '';
        let cnt = 0;
        contents.forEach(({ code, img_code, title, sub_title, date }) => {
            let mix = title + sub_title + date

            if (mix.toUpperCase().includes(k.toUpperCase()) == true){
                if (cnt < 9) {
                    html += /* html */ `
                        <li class="sub" onclick="javascript:pops();">
                                <figure>
                                    <p><img src="./tools/${code}/${img_code}" alt="${img_code}"></p>
                                    <figcaption>
                                        <p class="m-title">${title}</p>
                                        <p class="m-contents">${sub_title}</p>
                                        <sapn class="date">${date}</sapn>
                                </figure>
                        </li>
                    `;
                } else {
                    html += /* html */ `
                        <li class="sub" onclick="javascript:pops();" style="display:none;">
                                <figure>
                                    <p><img src="./tools/${code}/${img_code}" alt="${img_code}"></p>
                                    <figcaption>
                                        <p class="m-title">${title}</p>
                                        <p class="m-contents">${sub_title}</p>
                                        <sapn class="date">${date}</sapn>
                                </figure>
                        </li>
                    `;
                    $(".mor").css("display","block");

                }
            cnt ++;
            }
        })
        $('.search-page ul').append(html);
    })

}
mores();
function mores() {
    let cont = 9;
    $(".mor").click(function () {
        cont += 3;
        if (cont <= $(".search-page ul li").length) {
            $(`.search-page ul li:lt(${cont})`).css("display", "block");
            if (cont == $(".search-page ul li").length) {
                $(".mor").css("display", "none");
            }
        }
    });
}

sear()
function sear() {
    key = searchkey;
    if(key == ""){ all_contents() }else{key_contents(key)}
}



