const greeting = document.querySelector('#loginForm');
function paintGreeting(){
   greeting.innerHTML = `<div id="greeting" class='fade-in'>hello, ${localStorage.getItem("name")}.</div>`
};
if (localStorage.getItem("name") !=null) {
   paintGreeting();
}
else{
const userDoInput = greeting.querySelector("input");
const loginbtn = greeting.querySelector("button");

function sumitLogin(e){
   e.preventDefault();
   const userList = userDoInput.value;
   if(userList===''){
      return;
   }
   localStorage.setItem('name', userList);
   paintGreeting();
};

loginbtn.addEventListener('click', sumitLogin);}