function changeText() {
    document.getElementById('p1').innerHTML = "CHANGED!";
    // alert("test");
}

function selectBanner(value) {
    var filename = `img/banner/${value}.jpg`;
    document.getElementById('banner').src = filename;
    document.getElementById('banner').classList.remove("animation");
    void document.getElementById('banner').offsetWidth;
    document.getElementById('banner').classList.add("animation");
}