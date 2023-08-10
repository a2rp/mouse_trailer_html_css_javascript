window.onload = () => {
    const trailer = document.querySelector(".trailer");

    const animateTrailer = event => {
        const pointX = event.clientX - trailer.offsetWidth / 2;
        const pointY = event.clientY - trailer.offsetHeight / 2;
        const keyframes = {
            transform: `translate(${pointX}px, ${pointY}px)`
        };
        trailer.animate(keyframes, {
            duration: 800,
            fill: "forwards"
        });
    };

    window.onmousemove = event => {
        animateTrailer(event);
    };

    document.querySelector(".img1").onmouseover = event => {
        document.querySelector(".icon1").style.display = "block";
        trailer.style.cssText = `width: 50px; height: 50px;`;
    };
    document.querySelector(".img1").onmouseout = event => {
        document.querySelector(".icon1").style.display = "none";
        trailer.style.cssText = `width: 20px; height: 20px;`;
    };

    document.querySelector(".img2").onmouseover = event => {
        document.querySelector(".icon2").style.display = "block";
        trailer.style.cssText = `width: 50px; height: 50px;`;
    };
    document.querySelector(".img2").onmouseout = event => {
        document.querySelector(".icon2").style.display = "none";
        trailer.style.cssText = `width: 20px; height: 20px;`;
    };
};

