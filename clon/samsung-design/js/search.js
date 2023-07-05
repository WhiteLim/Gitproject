
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
    fetch("./js/data/data.json")
    .then((data) => data.json())
    .then(({ contents }) => {
        let html = '';
        let cnt = 0,count=0,q=0;
        contents.forEach(({ code, img_code, title, sub_title, date }) => {
            let dd = contents.length
            let mix = title + sub_title + date
            if(mix.toUpperCase().includes(k.toUpperCase()) == true){
                count --;
                q ++;
            } else {
                count ++
            }
            if (count != dd){
                if (mix.toUpperCase().includes(k.toUpperCase()) === true){
                    const elH = document.querySelector(".search-page h1")
                    elH.innerHTML=`Search Result for <span>${k}<b>${q}</b></span>`
    
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
                        $(".mor").css("display","block ");
    
                    }
                cnt ++;
                }
            } else {
                const elH = document.querySelector(".search-page h1")
                elH.innerHTML=`Search Result for <span>${k}<b>${q}</b></span><br><br>
                <span>죄송합니다. 검색 결과가 없습니다.</span>
                <p>검색하신 단어가 정확한지 확인해 주시거나 다른 검색어를 사용해 주시기 바랍니다.</p>`
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



