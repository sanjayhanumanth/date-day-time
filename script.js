
const tdate=document.querySelector('.date');
const tday=document.querySelector('.day');
const ttime=document.querySelector('.time');
const nodays=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
 
function todayDate()
{
        var date=new Date();
        var day=date.getDate();
        var month=date.getMonth() + 1;
        var year=date.getFullYear();
        tdate.innerHTML=day + "/" + month + "/" +year;
}
todayDate();

function printDay()
{
        var date=new Date();
        var day=date.getDay();
        tday.innerHTML=nodays[day];
}
printDay();

function printTime()
{
        var date=new Date();
        var hr=date.getHours();
        var min=date.getMinutes();
        var sec=date.getSeconds();
        var per="am";
        if (hr==0)
        {
                hr=12;
        }
        if(hr>12)
        {
                hr=hr-12;
                per="pm";
        }
        if(min<10)
        {
                min="0"+min;
        }
        if(sec<10)
        {
                sec="0"+sec;
        }
        
        ttime.innerHTML= hr +":"+min+":"+sec+" "+per;
        setTimeout(printTime,1000);
}
printTime();