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

function generateMultiPull() {
    const sortBy = {
        'BRONZE' : 0,
        'SILVER' : 1,
        'GOLD' : 2,
        'BURST' : 3
    }

    var arrPull = [];
    var i;
    for (i=0; i<10; i++){
        // arrPull.push(Math.floor(Math.random() * 1001));
        arrPull.push(getWeapon((Math.floor(Math.random() * 1000) + 1)));
    }
    // arrPull.sort();
    // arrPull.sort(function(a, b) {
    //     return a - b;
    // });

    const result = arrPull.sort(
        (a, b) => sortBy[a] - sortBy[b]
    )
    // console.log(arrPull);
    return arrPull;
}

function getWeapon(i) {
    if(i < 600) {
        return "BRONZE";
    } else if(i < 900) {
        return "SILVER";
    } else if(i < 1000) {
        return "GOLD";
    } else {
        return "BURST";
    }
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
    if(getComputedStyle(document.getElementById("div-pull-multi"), null).opacity == 1) {
        $("#div-pull-multi").animate({opacity: 0}, 250);
    }
    setTimeout(() => { drawMulti(); }, 250);
}

function drawMulti() {
    $(".btn-gacha").prop('disabled', true);
    $(".pull-img").css("opacity", 0);

    var i;
    var arrPull = generateMultiPull();
    for (i=0;i<10;i++){
        if(arrPull[i] == "BRONZE"){
            document.getElementById("pull"+i).src = "img/eq/Bronze.png";
        } else if(arrPull[i] == "SILVER"){
            document.getElementById("pull"+i).src = "img/eq/Silver.png";
        } else {
            document.getElementById("pull"+i).src = "img/eq/Gold.png";
        }
        console.log(arrPull[i]);
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