var textwrapper = document.querySelector(".skill-names .letters");
textwrapper.innerHTML = textwrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");
anime.timeline({ loop: true })
    .add({
        targets: '.skill-names .letter',
        rotateY: [-90, 0],
        duration: 1300,
        delay: (el, i) => 45 * i
    }).add({
        targets: '.skill-names',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 1000
    });