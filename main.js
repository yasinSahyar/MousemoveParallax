//
document.addEventListener("mousemove", parallax);
function parallax(e) {
    this.querySelectorAll(".layer").forEach((layer) => {
        let speed = layer.getAttribute("data-speed");

        let x = (window.innerWidth - e.pageX * speed) / 250;
        let y = (window.innerWidth - e.pageX * speed) / 250;

        layer.style.transform = `translate(${-x}px) translateY(${y}px)`;
    });
}
