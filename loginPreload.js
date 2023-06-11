let time = document.getElementById('time');
let d = new Date();

let currentTime = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

time.innerHTML = currentTime;

function updatetime (){
    let d = new Date();
    let currentTime = d.toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

time.innerHTML = currentTime;
}

setInterval(updatetime,1000)
function redirect(){location.href="./Signup.html"}
