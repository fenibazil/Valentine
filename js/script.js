if (document.body.clientWidth > 768) {
    snowFall.snow(document.body, {
        flakeCount: 75,
        image : "img/50px-Heart_corazón.png", 
        minSize: 10, 
        maxSize: 32,
        minSpeed: 1,
        maxSpeed: 0.5,
    });
}
else {
    snowFall.snow(document.body, {
        flakeCount: 36,
        image : "img/50px-Heart_corazón.png", 
        minSize: 5, 
        maxSize: 15,
        minSpeed: 0.7,
        maxSpeed: 0.5,
    });
}

const hash = window.location.hash.substring(1);
if (hash == "smily") {
    document.querySelectorAll(".js_sweet-massage").forEach( mess => {
        mess.classList.toggle("active");
    });
}

document.body.addEventListener("click", function () {
    document.querySelector(".js_audio").play();
})