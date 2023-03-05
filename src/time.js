const time = document.querySelector('#clock');
function clocktime(){
    now = new Date();
    time.innerHTML = `
    ${String(now.getHours()).padStart(2,"0")}:${String(now.getMinutes()).padStart(2,"0")}`
    time.classList.add('fade-in')
};
    setInterval(clocktime, 1000);
