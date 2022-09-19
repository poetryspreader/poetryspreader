const logo = document.querySelectorAll('.logo_text'),
    btn = document.querySelector('.logo__box'),
    colors = ["#FFA07A", "#3CB371", "#008B8B", "#6A5ACD", "red"];

var i = 0,
    testColor = [255,255,255];



function colorChange() {
    testColor[Math.floor(Math.random() * 3) + 1]
    btn.style.backgroundColor = colors[i];
    i++;
    if (i >= colors.length) i = 0;
    setTimeout(colorChange, 2000);
    console.log(colors[i])
}
colorChange();

