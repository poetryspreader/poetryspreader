const colors = ["#FFA07A", "#3CB371", "#008B8B", "#6A5ACD", "#c786d3"],
      logoBox = document.querySelector(".logo__box"),
      logoText = document.querySelectorAll('.logo__barcode');

var i = 0;

// logo color changing 
function colorChange() {
    logoBox.style.backgroundColor = colors[i];
    i++;
    if (i >= colors.length) i = 0;
    setTimeout(colorChange, 2000);
}
colorChange();

// change randomly and directly rgb numbers
// function test() {
//     let color = [255,255,255],
//         randomColor = Math.floor(Math.random() * 3),
//         randomDirection = Math.floor(Math.random() * 2),
//         step = 0;
//         if (true) {
//             for(step=0;step < 5; step++) {

//             }

        // } else {
            // downStreak();
            // function downStreak() {
            //     randomRgb[randomColor] -=2;
            //     logoBox.style.backgroundColor = `rgb(${randomRgb[0]},${randomRgb[1]},${randomRgb[2]})`;
            //     console.log(step);
            //     step++;
            //     if (step > 5) {step = 0; return};
            //     setTimeout(downStreak,2000);
            // }
        // }
//         setTimeout(test, 2000);
//         }
//     }
// test();

// logo box animation
function logoBoxAnimation() {
    setTimeout(function() {
        logoBox.classList.add('logo__box-heightDown');
        logoText.forEach((item) => {
            item.classList.add('logo__barcode-colorSwipe');
        });
    },0);
    setTimeout(function() {
        logoBox.classList.remove('logo__box-heightDown');
        logoText.forEach((item) => {
            item.classList.remove('logo__barcode-colorSwipe');
        });
    },5000);
    setTimeout(logoBoxAnimation,10000);
}
logoBoxAnimation();


// logo width hover
function widthHover() {
    logoBox.classList.remove('logo__barcode-widthHover');
    logoBox.addEventListener('mouseover', function(){
        logoText.forEach((large) => {
            large.classList.add('logo__barcode-widthHover');
        });
    });
    logoBox.addEventListener('mouseout', function(){
        logoText.forEach((small) => {
            small.classList.remove('logo__barcode-widthHover');
        });
    });
};
widthHover();

//