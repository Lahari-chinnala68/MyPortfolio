// Resume buttons
function viewresume() {
    window.open("lahari resume.pdf", "_blank");
}

function downloadCV() {
    const link = document.createElement("a");
    link.href = "lahari resume.pdf";
    link.download = "Lahari_Resume.pdf";
    link.click();
}

// Scroll animation FIXED
const sections = document.querySelectorAll("section");

window.addEventListener("scroll", () => {
    const trigger = window.innerHeight * 0.8;

    sections.forEach(sec => {
        const top = sec.getBoundingClientRect().top;

        if (top < trigger) {
            sec.classList.add("show");
        }
    });
});

// Typing effect
const text = "Full Stack Developer | Java | React";
let i = 0;

function typing() {
    if (i < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, 50);
    }
}

typing();