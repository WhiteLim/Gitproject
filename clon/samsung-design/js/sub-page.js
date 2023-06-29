set_list();
mores();
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
            let cnt = 0;
            contents.forEach(({ code, img_code, title, sub_title, date }) => {
                if (code == result1) {
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
            });
            $('.sub-page ul').append(html);
        });
}

function mores() {
    let cont = 9;
    $(".mor").click(function () {
        cont += 3;
        if (cont <= $(".sub-page ul li").length) {
            $(`.sub-page ul li:lt(${cont})`).css("display", "block");
            if (cont == $(".sub-page ul li").length) {
                $(".mor").css("display", "none");
            }
        }
    });
}

function pops() {
    $("#popsd").css("display","block")
    $("#popsd").load("./sub-content/pop.html");
    $("body").css("overflow-y","hidden")
}


