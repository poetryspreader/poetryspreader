const logo = document.querySelectorAll('.logo_text'),
    btn = document.querySelector('.logo_box'),
    colors = ["#FFA07A", "#3CB371", "#008B8B", '#6A5ACD', "#2F4F4F"];

let i = 0;

btn.addEventListener('mouseenter',changeColor);
function changeColor () {
    btn.style.backgroundColor = colors[i];
    i++;
    if (i == colors.length){
      i = 0;
    }
  }

  import { Application } from '@splinetool/runtime';

  const canvas = document.getElementById('canvas3d');
  const app = new Application(canvas);
  app.load('https://prod.spline.design/y9Ktlm0mFFlnJM0D/scene.splinecode');
  