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
    if(getComputedStyle(document.getElementById("div-pull-multi"), null).opacity == 1) {
        $("#div-pull-multi").animate({opacity: 0}, 250);
    }
    setTimeout(() => { drawMulti(); }, 250);
}

function drawMulti() {
    $(".btn-gacha").prop('disabled', true);
    $(".pull-img").css("opacity", 0);
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

$("#b2").click(function(){
    // $("#div-pull-multi").animate({top: "+=100px"});
    $("#div-pull-multi").show();
});