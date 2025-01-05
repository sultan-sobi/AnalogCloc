const hourE=document.querySelector(".hour");
const minuteE=document.querySelector(".minute");
const secondE=document.querySelector(".second");

function updateTime(){
    const date= new Date();
    const hour= date.getHours();
    const minute= date.getMinutes();
    const second= date.getSeconds();

    const hourDeg=hour*360/12;
    const minuteDeg=minute*360/60;
    const secondDeg=second*360/60;

    hourE.style.transform=`rotate(${hourDeg}deg)`
    minuteE.style.transform=`rotate(${minuteDeg}deg)`
    secondE.style.transform=`rotate(${secondDeg}deg)`
   setTimeout(updateTime,1000)
}

updateTime();