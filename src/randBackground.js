const BackgroundImage = document.querySelector("#background");
const image = `img/${Math.floor(Math.random()*13)}.jpg`;
BackgroundImage.innerHTML = `
       <style>
       #background{
        position : fixed;
        top : 0;
        right : 0;
        left : 0;
        bottom : 0;
        background-image: url(${image}); 
        background-size : 100% 100%;
       };
        </style>`