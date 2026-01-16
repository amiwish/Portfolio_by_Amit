particlesJS("particles-js", {
    "particles": {
        "number": {
            "value": 100, 
            "density": { "enable": true, "value_area": 800 }
        },
        "color": { "value": "#00d2ff" }, 
        "shape": { "type": "circle" },
        "opacity": { "value": 0.5 },
        "size": { "value": 3, "random": true },
        "line_linked": {
            "enable": true, 
            "distance": 150,
            "color": "#00d2ff",
            "opacity": 0.2,
            "width": 1
        },
        "move": {
            "enable": true,
            "speed": 2,
            "direction": "none",
            "random": false,
            "straight": false,
            "out_mode": "out",
            "bounce": false
        }
    },
    "interactivity": {
        "detect_on": "canvas",
        "events": {
            "onhover": { "enable": true, "mode": "grab" },
            "onclick": { "enable": true, "mode": "push" }
        }
    },
    "retina_detect": true
});

var typed = new Typed('#typing-text', {
    strings: ['Full Stack Developer', 'MERN Stack Developer', 'Software Engineer'],
    typeSpeed: 60,
    backSpeed: 40,
    loop: true
});