//Counting down to the new year, December, 2020/January 2021

let newYear = document.querySelector('.newYear h1'),
    theDays = document.querySelector('.days h1'),
    hours = document.querySelector('.hours h1'),
    minutes = document.querySelector('.mins h1'),
    seconds = document.querySelector('.secs h1'),
    y = 2020,
    m = 11,
    //Date to countdown to
    yearEnd = new Date(y, m, 31, 23, 59, 59).getTime();

let countDown = setInterval(function(){
    now = new Date().getTime();
    //Difference between the milliseconds from Jan, 1 1970 to each day used in JavaScript
    let difference = yearEnd - now;
    //For the number of days
    let days = Math.floor(difference/(1000 * 60 * 60 * 24));
    //For the of hours
    let hrs = Math.floor((difference%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    //For the of minutes
    let mins = Math.floor((difference%(1000 * 60 * 60))/(1000 * 60));
    //For the of seconds
    let secs = Math.floor((difference%(1000 * 60))/(1000))
    console.log(mins, secs)
    //DOM manipulation
    theDays.innerHTML = days;
    hours.innerHTML = hrs;
    minutes.innerHTML = mins;
    seconds.innerHTML = secs;
    
    //statement to ensure that at the expiration of the deadline, it loops to start over again and display a congratulatory message
    if( difference < 0)
    {
        for (let i = 0; i < 2038; i++)
        {
            yearEnd = new Date(y+1, m, 31, 23, 59, 59).getTime();
            if(yearEnd > new Date(y+1, 0, 1, 00, 00, 00).getTime() && yearEnd < new Date(y+1, 0, 31, 23, 59, 59).getTime() )
            {
                newYear.innerHTML = "Congratulation! Happy New Year!!";
                console.log(newYear.innerHTML);
            }else{
                newYear.innerHTML = "New Year Countdown";
            }
        }  
    }
}, 1000);
