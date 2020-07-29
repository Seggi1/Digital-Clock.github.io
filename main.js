function showTime()
{
    let date = new Date();
    let  h = date.getHours(); 
    let m = date.getMinutes(); 
    let s = date.getSeconds(); 
    
    let time = h + ":" + m + ":" + s ;
    document.getElementById("time").innerText = time;
    setTimeout(showTime, 1000);
}
showTime();