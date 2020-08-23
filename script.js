var bannerFile;
var selectedBannerValues;

// load banner.csv on page load and store to global array banner
$(function() {
    var csvfile = new XMLHttpRequest();
    csvfile.open("GET", "banner.csv", true);
    csvfile.onreadystatechange = function() {
        if (csvfile.readyState === 4) {  // document is ready to parse.
            if (csvfile.status === 200) {  // file is found
                var allText = csvfile.responseText; 
                bannerFile = csvfile.responseText.split("\n");
            }
            loadDefaultBanner("342");
            console.log(selectedBannerValues);
        }
    };
    csvfile.send();
    // console.log(selectedBannerValues[1]);
});

function loadDefaultBanner(value) {
    document.getElementById('img-banner').src = "img/banner/"+value+".jpg";
    selectedBannerValues = getBannerValues(value);
    updateAutopullLabels();
}

function selectBanner(value) {
    var filename = `img/banner/${value}.jpg`;
    document.getElementById('img-banner').src = filename;
    document.getElementById('img-banner').classList.remove("animation");
    void document.getElementById('img-banner').offsetWidth;
    document.getElementById('img-banner').classList.add("animation");
    document.getElementById('select-banner').blur();

    // change global banner variables
    selectedBannerValues = getBannerValues(value);
    console.log(selectedBannerValues);

    updateAutopullLabels();
}

function getBannerValues(selectedBanner) {
    var i;
    for (i=0;i<bannerFile.length;i++){
        if(bannerFile[i].includes(selectedBanner)) {
            return bannerFile[i].split(",");
        }
    }
}

function updateAutopullLabels() {
    document.getElementById('label-burst').innerHTML = selectedBannerValues[5] + " Burst";
    document.getElementById('label-ld').innerHTML = selectedBannerValues[4] + " LD";
    document.getElementById('auto-label1').innerHTML = selectedBannerValues[1];
    document.getElementById('auto-label2').innerHTML = selectedBannerValues[2];
    document.getElementById('auto-label3').innerHTML = selectedBannerValues[3];
}

function toggleRates() {
    $("#container-rates").toggle(500);
}

function toggleAutopull() {
    $("#container-autopull").toggle(500);
}

function toggleWeaponLabels() {
    $(".label-pull-multi").toggle(250);
    $(".label-pull").toggle(250);    
}

//
// Variable counters and functions used for pull stats
//
var counter = {
    countSingle: 0,
    countSingleBronze: 0,
    countSingleSilver: 0,
    countSingle15: 0,
    countSingle35: 0,
    countSingleEx: 0,
    countSingleLd: 0,
    countSingleBurst: 0,
    countMulti: 0,
    countMultiBronze: 0,
    countMultiSilver: 0,
    countMulti15: 0,
    countMulti35: 0,
    countMultiEx: 0,
    countMultiLd: 0,
    countMultiBurst: 0,
    countBonus15: 0,
    countBonus35: 0,
    countBonusEx: 0,
    countBonusLd: 0,
    countBonusBurst: 0,
    autopull: 0,
    count15a: 0,
    count35a: 0,
    countExa: 0,
    count15b: 0,
    count35b: 0,
    countExb: 0,
    count15c: 0,
    count35c: 0,
    countExc: 0,
	countLd: 0,
	countBurst: 0
};

function addToCounter(i) {
    window["counter"][i]++;
}

function updateCounters(i) {
    document.getElementById("counter-single").innerHTML = "Single Draw: " + i['countSingle'];
	document.getElementById("counter-tickets").innerHTML = i['countSingle'] + " Draw Tickets consumed";
	document.getElementById("counter-single-bronze").innerHTML = i['countSingleBronze'];
	document.getElementById("counter-single-silver").innerHTML = i['countSingleSilver'];
	document.getElementById("counter-single-15cp").innerHTML = i['countSingle15'];
	document.getElementById("counter-single-35cp").innerHTML = i['countSingle35'];
	document.getElementById("counter-single-ex").innerHTML = i['countSingleEx'];
	document.getElementById("counter-single-ld").innerHTML = i['countSingleLd'];
	document.getElementById("counter-single-burst").innerHTML = i['countSingleBurst'];
	document.getElementById("counter-multi").innerHTML = "Multi Draw: " + i['countMulti'];
	document.getElementById("counter-gems").innerHTML = i['countMulti'] * 5000 + " Gems consumed";
	document.getElementById("counter-multi-bronze").innerHTML = i['countMultiBronze'];
	document.getElementById("counter-multi-silver").innerHTML = i['countMultiSilver'];
	document.getElementById("counter-multi-15cp").innerHTML = i['countMulti15'] + " (" + i['countBonus15'] + ")";
	document.getElementById("counter-multi-35cp").innerHTML = i['countMulti35'] + " (" + i['countBonus35'] + ")";
	document.getElementById("counter-multi-ex").innerHTML = i['countMultiEx'] + " (" + i['countBonusEx'] + ")";
	document.getElementById("counter-multi-ld").innerHTML = i['countMultiLd'] + " (" + i['countBonusLd'] + ")";
	document.getElementById("counter-multi-burst").innerHTML = i['countMultiBurst'] + " (" + i['countBonusBurst'] + ")";
}

//
// stats options
//

function resetStats() {
    counter = {
        countSingle: 0,
        countSingleBronze: 0,
        countSingleSilver: 0,
        countSingle15: 0,
        countSingle35: 0,
        countSingleEx: 0,
        countSingleLd: 0,
        countSingleBurst: 0,
        countMulti: 0,
        countMultiBronze: 0,
        countMultiSilver: 0,
        countMulti15: 0,
        countMulti35: 0,
        countMultiEx: 0,
        countMultiLd: 0,
        countMultiBurst: 0,
        countBonus15: 0,
        countBonus35: 0,
        countBonusEx: 0,
        countBonusLd: 0,
        countBonusBurst: 0,
        autopull: 0,
        count15a: 0,
        count35a: 0,
        countExa: 0,
        count15b: 0,
        count35b: 0,
        countExb: 0,
        count15c: 0,
        count35c: 0,
        countExc: 0,
        countLd: 0,
        countBurst: 0
    };
    updateCounters(counter);
}

function toggleSingleStats() {
    $("#single-pull-stats").toggle(500);
}

function toggleMultiStats() {
    $("#multi-pull-stats").toggle(500);
}

//
// Single Pull starts here
//
function pullSingle(isAutoPull) {
    if(isAutoPull) counter['autopull'] += 1;
    $(".label-pull").css("opacity", 0); // starting opacity of label = 0

    document.getElementById("div-pull-single").style.opacity = 0;
    // if(getComputedStyle(document.getElementById("div-pull-single"), null).opacity == 1) {
    //     $("#div-pull-single").animate({opacity: 0}, 250);
    // }
    // hide multi pull
    if(getComputedStyle(document.getElementById("div-pull-multi"), null).opacity == 1) {
        document.getElementById("div-pull-multi").style.opacity = 0;
        document.getElementById("div-pull-multi").style.display = "none"
        document.getElementById("div-pull-single").style.display = "flex";
        // $("#div-pull-multi").animate({opacity: 0}, 250, function() {
        //     document.getElementById("div-pull-multi").style.display = "none";
        //     document.getElementById("div-pull-single").style.display = "flex";
        // });
    }

    if(document.getElementById("div-pull-single").style.display != "flex") {
        setTimeout(() => { document.getElementById("div-pull-single").style.display = "flex"; }, 100);
    }

    // var luckyNumber = Math.floor(Math.random() * (10000 - 8990 + 1) + 8990); // 8990-10000 (always gold)
    var luckyNumber = Math.floor(Math.random() * 10000) + 1; // 1-10000
    var singlePull = getWeaponType(luckyNumber);

    if(singlePull == "bronze"){
        document.getElementById("pull-single").src = "img/eq/bronze.png";
        addToCounter('countSingleBronze');
        document.getElementById("label-pull-single").innerHTML = "";
    } else if(singlePull == "silver"){
        document.getElementById("pull-single").src = "img/eq/silver.png";
        addToCounter('countSingleSilver');
        document.getElementById("label-pull-single").innerHTML = "";
    } else {
        singlePull = generateGoldWeapon(luckyNumber, "pull-single", "label-pull-single", "countSingle");
    }

    addToCounter('countSingle'); // total single pull count
    updateCounters(counter);

    $(".btn-gacha-all").prop('disabled', true);
    $(".pull-img").css("opacity", 0);
    setTimeout(() => { drawSingle(isAutoPull); }, 250);  // animation purposes
}

function drawSingle(isAutoPull) {  // isAutoPull is used to enable buttons after non-auto pull
    var delay = 150;
    $("#div-pull-single").animate({opacity: 1});
    $(".label-pull").animate({opacity: 1});
    $("#pull-single").delay(delay).animate({opacity: 1}, 500, function() {
        // $(".label-pull").animate({opacity: 1}, 150); // show label
        if(isAutoPull == false) { $(".btn-gacha-all").prop('disabled', false); }
    });
}

//
// Multi Pull starts here
//
function pullMulti(isAutoPull) {
    if(isAutoPull) counter['autopull'] += 1;
    $(".label-pull-multi").css("opacity", 0); // starting opacity of label = 0
    document.getElementById("div-pull-multi").style.display = "flex";
    document.getElementById("div-pull-multi").style.opacity = 0;
    // if(getComputedStyle(document.getElementById("div-pull-multi"), null).opacity == 1) {
    //     $("#div-pull-multi").animate({opacity: 0}, 250);
    // }
    // hide single pull
    if(getComputedStyle(document.getElementById("div-pull-single"), null).opacity == 1) {
        document.getElementById("div-pull-single").style.opacity = 0;
        document.getElementById("div-pull-single").style.display = "none"
        // document.getElementById("div-pull-multi").style.display = "flex";
        // $("#div-pull-single").animate({opacity: 0}, 250, function() {
        //     document.getElementById("div-pull-single").style.display = "none";
        // });
    }
    
    generateMultiPull();
    
    addToCounter('countMulti'); // total multi pull count
    updateCounters(counter);

    $(".btn-gacha-all").prop('disabled', true);
    $(".pull-img").css("opacity", 0);
    setTimeout(() => { drawMulti(isAutoPull); }, 250);
}

function drawMulti(isAutoPull) {


    $("#div-pull-multi").animate({opacity: 1});
    var delay = 0;
    $(".pull-img").each(function(i) {
        $(this).delay(delay).animate({opacity: 1}, 500, function() {
            if(i==10) {
                $(".label-pull-multi").animate({opacity: 1}); // show labels
                if(isAutoPull == false) { $(".btn-gacha-all").prop('disabled', false); }
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
        var luckyNumber = Math.floor(Math.random() * 10000) + 1; // 1-10000
        arrPull.push(getWeaponType(luckyNumber));
    }

    // sort array by weapon rarity into new array
    const result = arrPull.sort(
        (a, b) => sortBy[a] - sortBy[b]
    )
    
    // roll gold weapons
    for (i=0; i<10; i++){
        if(result[i] == "bronze") {
            document.getElementById("pull"+i).src = "img/eq/bronze.png";
            document.getElementById("label-pull-multi"+i).innerHTML = "";
            addToCounter('countMultiBronze');
        }
        else if(result[i] == "silver") {
            document.getElementById("pull"+i).src = "img/eq/silver.png";
            document.getElementById("label-pull-multi"+i).innerHTML = "";
            addToCounter('countMultiSilver');
        }
        else if(result[i] == "gold") {
            var luckyNumber = Math.floor(Math.random() * (9990 - 8990 + 1) + 8990);  // 8990-9990 = 10% from gold
            generateGoldWeapon(luckyNumber, "pull"+i, "label-pull-multi"+i, "countMulti");
        }
        else {
            generateGoldWeapon(10000, "pull"+i, "label-pull-multi"+i, "countMulti"); // 10000 = burst
        }
    }

    // +1 bonus weapon
    var bonusWeapon;
    var luckyNumberBonus = Math.floor(Math.random() * 10000) + 1; // 1-10000
    if(luckyNumberBonus < 1317) {  // 1-1316 = 13.16%
        generateGoldWeapon(8990, "pull10", "label-pull-multi10", "countMulti");
        addToCounter('countBonus15');
    } else if(luckyNumberBonus < 2634) { // 1317-2633 = 13.17%
        generateGoldWeapon(9132, "pull10", "label-pull-multi10", "countMulti");
        addToCounter('countBonus15');
    } else if(luckyNumberBonus < 3951) { // 2634-3950 = 13.17%
        generateGoldWeapon(9274, "pull10", "label-pull-multi10", "countMulti");
        addToCounter('countBonus15');
    } else if(luckyNumberBonus < 4951) { // 3951-4950 = 10%
        generateGoldWeapon(9416, "pull10", "label-pull-multi10", "countMulti");
        addToCounter('countBonus35');
    } else if(luckyNumberBonus < 5951) { // 4951-5950 = 10%
        generateGoldWeapon(9516, "pull10", "label-pull-multi10", "countMulti");
        addToCounter('countBonus35');
    } else if(luckyNumberBonus < 6951) { // 5951-6950 = 10%
        generateGoldWeapon(9616, "pull10", "label-pull-multi10", "countMulti");
        addToCounter('countBonus35');
    } else if(luckyNumberBonus < 7701) { // 6951-7700 = 7.5%
        generateGoldWeapon(9716, "pull10", "label-pull-multi10", "countMulti");
        addToCounter('countBonusEx');
    } else if(luckyNumberBonus < 8451) { // 7701-8450 = 7.5%
        generateGoldWeapon(9791, "pull10", "label-pull-multi10", "countMulti");
        addToCounter('countBonusEx');
    } else if(luckyNumberBonus < 9201) { // 8451-9200 = 7.5%
        generateGoldWeapon(9866, "pull10", "label-pull-multi10", "countMulti");
        addToCounter('countBonusEx');
    } else if(luckyNumberBonus < 9701) { // 9201-9700 = 5%
        generateGoldWeapon(9941, "pull10", "label-pull-multi10", "countMulti");
        addToCounter('countBonusLd');
    } else {  // 9701-10000 = 3%
        generateGoldWeapon(10000, "pull10", "label-pull-multi10", "countMulti");
        addToCounter('countBonusBurst');
    }
}

function getWeaponType(i) {
    // 0.01% variance to accommodate rounding off of repeating decimals for 15CP
    if(i < 5990) {  // 1-5989 = 59.89%
        return "bronze";
    } else if(i < 8990) {  // 5990-8989 = 30%
        return "silver";
    } else if(i < 9991) {  // 8990-9990 = 10%
        return "gold";
    } else {  // 9991-10000 = 0.1%
        return "burst";
    } 
}

function getGoldWeapon(i) {
    if(i < 9132) {  // 8990-9131 = 1.42%
        return "15a";
    } else if(i < 9274) { // 9132-9273 = 1.42%
        return "15b";
    } else if(i < 9416) { // 9274-9415 = 1.42%
        return "15c";
    } else if(i < 9516) { // 9416-9515 = 1%
        return "35a";
    } else if(i < 9616) { // 9516-9615 = 1%
        return "35b";
    } else if(i < 9716) { // 9616-9715 = 1%
        return "35c";
    } else if(i < 9791) { // 9716-9790 = 0.75%
        return "exa";
    } else if(i < 9866) { // 9791-9865 = 0.75%
        return "exb";
    } else if(i < 9941) { // 9866-9940 = 0.75%
        return "exc";
    } else if(i < 9991) { // 9941-9990 = 0.5%
        return "ld";
    } else {
        return "burst";
    }
}

function generateGoldWeapon(i, weaponId, labelId, counter) {
    if(i < 9132) {  // 8990-9131 = 1.42%
        document.getElementById(weaponId).src = "img/eq/"+selectedBannerValues[1]+"/15.png";
        document.getElementById(labelId).innerHTML = selectedBannerValues[1]+" 15CP";
        addToCounter(counter+"15");
        addToCounter("count15a");
    } else if(i < 9274) { // 9132-9273 = 1.42%
        document.getElementById(weaponId).src = "img/eq/"+selectedBannerValues[2]+"/15.png";
        document.getElementById(labelId).innerHTML = selectedBannerValues[2]+" 15CP";
        addToCounter(counter+"15");
        addToCounter("count15b");
    } else if(i < 9416) { // 9274-9415 = 1.42%
        document.getElementById(weaponId).src = "img/eq/"+selectedBannerValues[3]+"/15.png";
        document.getElementById(labelId).innerHTML = selectedBannerValues[3]+" 15CP";
        addToCounter(counter+"15");
        addToCounter("count15c");
    } else if(i < 9516) { // 9416-9515 = 1%
        document.getElementById(weaponId).src = "img/eq/"+selectedBannerValues[1]+"/35.png";
        document.getElementById(labelId).innerHTML = selectedBannerValues[1]+" 35CP";
        addToCounter(counter+"35");
        addToCounter("count35a");
    } else if(i < 9616) { // 9516-9615 = 1%
        document.getElementById(weaponId).src = "img/eq/"+selectedBannerValues[2]+"/35.png";
        document.getElementById(labelId).innerHTML = selectedBannerValues[2]+" 35CP";
        addToCounter(counter+"35");
        addToCounter("count35b");
    } else if(i < 9716) { // 9616-9715 = 1%
        document.getElementById(weaponId).src = "img/eq/"+selectedBannerValues[3]+"/35.png";
        document.getElementById(labelId).innerHTML = selectedBannerValues[3]+" 35CP";
        addToCounter(counter+"35");
        addToCounter("count35c");
    } else if(i < 9791) { // 9716-9790 = 0.75%
        document.getElementById(weaponId).src = "img/eq/"+selectedBannerValues[1]+"/ex.png";
        document.getElementById(labelId).innerHTML = selectedBannerValues[1]+" EX";
        addToCounter(counter+"Ex");
        addToCounter("countExa");
    } else if(i < 9866) { // 9791-9865 = 0.75%
        document.getElementById(weaponId).src = "img/eq/"+selectedBannerValues[2]+"/ex.png";
        document.getElementById(labelId).innerHTML = selectedBannerValues[2]+" EX";
        addToCounter(counter+"Ex");
        addToCounter("countExb");
    } else if(i < 9941) { // 9866-9940 = 0.75%
        document.getElementById(weaponId).src = "img/eq/"+selectedBannerValues[3]+"/ex.png";
        document.getElementById(labelId).innerHTML = selectedBannerValues[3]+" EX";
        addToCounter(counter+"Ex");
        addToCounter("countExc");
    } else if(i < 9991) { // 9941-9990 = 0.5%
        document.getElementById(weaponId).src = "img/eq/"+selectedBannerValues[4]+"/ld.png";
        document.getElementById(labelId).innerHTML = selectedBannerValues[4]+" LD";
        addToCounter(counter+"Ld");
        addToCounter("countLd");
    } else {
        document.getElementById(weaponId).src = "img/eq/"+selectedBannerValues[5]+"/burst.png";
        document.getElementById(labelId).innerHTML = selectedBannerValues[5]+" Burst";
        addToCounter(counter+"Burst");
        addToCounter("countBurst");
    }
    // console.log(document.getElementById(labelId).innerHTML);
}

function getBonusWeaponType(i) {
    if(i < 98) {
        return "gold";
    } else {
        return "burst";
    }
}

var isDone = false;

function autoSinglePull() {
    if($(".cb:checked").length == 0) {
        document.getElementById("autopull-bottom-note").innerHTML = "Please mark one or more banner weapons to use Auto Pull, kupo!";
        return;
    }
    $(".cb").prop('disabled', true);

    if(isDone == false) {
        pullSingle(true);
        document.getElementById("autopull-bottom-note").innerHTML = "Auto Pull will stop once you have obtained at least one copy of each marked weapon, kupo!";

        setTimeout(() => {
            validateAutoPull();
            if(isDone == false) {
                autoSinglePull();
            }
            else {
                document.getElementById("autopull-bottom-note").innerHTML = "Success! Auto Pull stopped after "+counter['autopull']+" Single Draws, kupo!";
                resetAutoPull();
            }
            // console.log(document.getElementById("pull-single").src+" "+counter["count15a"]);
        }, 1250);
    }
}

function autoMultiPull() {
    if($(".cb:checked").length == 0) {
        document.getElementById("autopull-bottom-note").innerHTML = "Please mark one or more banner weapons to use Auto Pull, kupo!";
        return;
    }
    $(".cb").prop('disabled', true);

    if(isDone == false) {
        pullMulti(true);
        document.getElementById("autopull-bottom-note").innerHTML = "Auto Pull will stop once you have obtained at least one copy of each marked weapon, kupo!";

        setTimeout(() => {
            validateAutoPull();
            if(isDone == false) {
                autoMultiPull();
            }
            else {
                document.getElementById("autopull-bottom-note").innerHTML = "Success! Auto Pull stopped after "+counter['autopull']+" Multi Draws, kupo!";
                resetAutoPull();
            }
            // console.log(document.getElementById("pull-single").src+" "+counter["count15a"]);
        }, 4750);
    }
}

function validateAutoPull() {
    isDone = true;
    $(".cb").each(function(i) {
        if( (this.checked) && (counter[this.name] == 0) ) {
            isDone = false;
            return false;
        }
    });
    return isDone;
}

function resetAutoPull() {
    isDone = false;
    $(".cb").prop('disabled', false);
    $(".btn-gacha-all").prop('disabled', false);
    counter['autopull'] = 0;
    counter['count15a'] = 0,
    counter['count35a'] = 0,
    counter['countExa'] = 0,
    counter['count15b'] = 0,
    counter['count35b'] = 0,
    counter['countExb'] = 0,
    counter['count15c'] = 0,
    counter['count35c'] = 0,
    counter['countExc'] = 0,
    counter['countLd'] = 0,
    counter['countBurst'] = 0
}