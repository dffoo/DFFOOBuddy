function changeText() {
    var num = Math.floor((Math.random() * 100)) + 1;
    if(num >= 96){
        document.getElementById('p1').innerHTML = "GOLD";
    } else if(num >= 50) {
        document.getElementById('p1').innerHTML = "SILVER";
    } else {
        document.getElementById('p1').innerHTML = "BRONZE";
    }
    // alert("test");
}

function selectBanner(value) {
    var filename = `img/banner/${value}.jpg`;
    document.getElementById('img-banner').src = filename;
    document.getElementById('img-banner').classList.remove("animation");
    void document.getElementById('img-banner').offsetWidth;
    document.getElementById('img-banner').classList.add("animation");
    document.getElementById('select-banner').blur();
}

function loadBanners() {
    alert("LOL");
    var section = document.getElementById('secBanners');
    var tbl = document.createElement('table');
    tbl.style.width  = '100px';
    tbl.style.border = '1px solid black';

    var tr = tbl.insertRow();
    var td = tr.insertCell();
    td.appendChild(document.createTextNode('Cell'));
    td.style.border = '1px solid black';

    body.appendChild(tbl);
}

function drawSingle() {
    // document.getElementById('div-pull-multi').hidden = true;
    // document.getElementById('div-pull-multi').hide();
}

function pullMulti() {
    document.getElementById("div-pull-multi").style.display = "flex";
    var banner = document.getElementById("select-banner").value;
    if(getComputedStyle(document.getElementById("div-pull-multi"), null).opacity == 1) {
        $("#div-pull-multi").animate({opacity: 0}, 250);
    }
    setTimeout(() => { drawMulti(banner); }, 250);
}

function drawMulti(banner) {
    $(".btn-gacha").prop('disabled', true);
    $(".pull-img").css("opacity", 0);

    var i;
    var arrPull = generateMultiPull();
    for (i=0;i<arrPull.length;i++){
        if(arrPull[i] == "bronze"){
            document.getElementById("pull"+i).src = "img/eq/bronze.png";
        } else if(arrPull[i] == "silver"){
            document.getElementById("pull"+i).src = "img/eq/silver.png";
        } else if(arrPull[i] == "gold"){
            document.getElementById("pull"+i).src = "img/eq/gold.png";
        } else {
            document.getElementById("pull"+i).src = "img/"+banner+"/"+arrPull[i]+".png";
        }
        // console.log(arrPull[i]);
    }

    $("#div-pull-multi").animate({opacity: 1});
    var delay = 0;
    $(".pull-img").each(function(i) {
        $(this).delay(delay).animate({opacity: 1}, 500, function() {
            if(i==10) {
                $(".btn-gacha").prop('disabled', false);
            }
        });
        delay += 250;
    });
}


function generateMultiPull() {
    const sortBy = {
        'bronze' : 0,
        'silver' : 1,
        'gold' : 2,
        'burst' : 3
    }

    var arrPull = [];
    var i;
    for (i=0; i<10; i++){
        arrPull.push(getWeapon((Math.floor(Math.random() * 1000) + 1))); // 1-1000
    }
    // arrPull.sort();
    // arrPull.sort(function(a, b) {
    //     return a - b;
    // });

    // sort array by weapon rarity
    const result = arrPull.sort(
        (a, b) => sortBy[a] - sortBy[b]
    )
    
    // loop through array and randomize gold weapons
    for (i=0;i<result.length;i++) {
        if(result[i] == "gold") {
            var gold = (Math.floor(Math.random() * 1001) + 1); // 1-1001
            if(gold < 143) {
                result[i] = "15a";
            } else if(gold < 285) {
                result[i] = "15b";
            } else if(gold < 427) {
                result[i] = "15c";
            } else if(gold < 527) {
                result[i] = "35a";
            } else if(gold < 627) {
                result[i] = "35b";
            } else if(gold < 727) {
                result[i] = "35c";
            } else if(gold < 802) {
                result[i] = "exa";
            } else if(gold < 877) {
                result[i] = "exb";
            } else if(gold < 952) {
                result[i] = "exc";
            } else {
                result[i] = "ld";
            }
        }
    }

    // +1 bonus weapon
    arrPull.push(getBonusWeapon((Math.floor(Math.random() * 100) + 1))); // 1-100
    if(result[10] == "gold") {
        var gold = (Math.floor(Math.random() * 1001) + 1); // 1-1001
        if(gold < 143) {
            result[10] = "15a";
        } else if(gold < 285) {
            result[10] = "15b";
        } else if(gold < 427) {
            result[10] = "15c";
        } else if(gold < 527) {
            result[10] = "35a";
        } else if(gold < 627) {
            result[10] = "35b";
        } else if(gold < 727) {
            result[10] = "35c";
        } else if(gold < 802) {
            result[10] = "exa";
        } else if(gold < 877) {
            result[10] = "exb";
        } else if(gold < 952) {
            result[10] = "exc";
        } else {
            result[10] = "ld";
        }
    }

    return arrPull;
}

function getWeapon(i) {
    if(i < 600) {
        return "bronze";
    } else if(i < 900) {
        return "silver";
    } else if(i < 1000) {
        return "gold";
    } else {
        return "burst";
    }
}

function getBonusWeapon(i) {
    if(i < 98) {
        return "gold";
    } else {
        return "burst";
    }
}

// $("#b1").click(drawMulti());

// $("#b1").click(function(){
//     var delay = 0;
//     $(".pull-img").each(function(i) {
//         $(this).delay(delay).animate({opacity: 0}, 500, function() {
//             if(i==10) {
//                 $("#div-pull-multi").hide();    
//             }
//         });
//         delay += 250;
//     });
// });

$("#btn-single").click(function(){
    // $("#div-pull-multi").animate({top: "+=100px"});
    // $("#div-pull-multi").show();
    // generateMultiPull();
    // var arr = generateMultiPull();
    // console.log(arr);
    var i;
    for(i=0;i<10;i++){
        console.log(document.getElementById("pull"+i).src);
    }
});