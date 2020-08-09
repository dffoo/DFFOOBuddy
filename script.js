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