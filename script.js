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

function drawMulti() {
    document.getElementById('div-pull-multi').hidden = false;
}

$("#b1").click(function(){
    // $("#div-pull-multi").slideUp(250, 0.0);
    
    var count = 11;
    var delay = 0;
    $(".pull-img").each(function(i) {
        $(this).delay(delay).animate({opacity: 0}, 500, function() {
            if(i==10) {
                $("#div-pull-multi").hide();    
            }
        });
        delay += 250;
    });

    // $(".pull-img").each(function() {
    //     $(this).animate({opacity: 0}, 500, function() {
    //         $("#div-pull-multi").hide();
    //     });
    // });

    // $("#div-pull-multi").closest(".pull-img").animate({opacity: 0}, 500, function() {
    //     $("#div-pull-multi").hide();
    // })
    // $("#div-pull-multi").closest(".pull-img").animate({
    //     opacity: 0
    // }, 500, function() {
    //     $("#div-pull-multi").hide();
    // });
});

$("#b2").click(function(){
    // $("#div-pull-multi").animate({top: "+=100px"});
    $("#div-pull-multi").show(250, 0.0);
});