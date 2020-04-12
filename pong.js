var abdelpong = document.getElementById('abdelpong');
var pong = abdelpong.getContext('2d');
var xAxe = 0;
var yAxe = 70;
var vx = 2.5;
var vy = 2.5;
var radius = 10;
var paddleX = (abdelpong.width-75)/2;
const body = document.querySelector('body');
var barre1Y = 0;
var barre2Y = 0;
var barreSpeed =30;
var patate;
var score = 0;
function theScore() {
    score_display.innerHTML = score;
    };
function addScore() {
    if (xAxe > 0)
    {
        score += 1;
        theScore();
    }
}
setInterval(addScore, 500);



var score_display= document.getElementById('score_display');
body.onkeydown = function(e) {

    patate = e.keyCode;
    document.getElementById('keyNumber').innerHTML = patate;
}

function ball()
{
    pong.beginPath();
    pong.arc(xAxe, yAxe, radius, 0, Math.PI*2);
    pong.fillStyle = "orange";
    pong.fill();
    pong.closePath();
}
function barre1()
{
    pong.beginPath();
    pong.rect(30, barre1Y, 10, 75)
    pong.fillStyle = "black";
    pong.fill();
    pong.closePath();
    if (patate == 83)
    {
        barre1Y += barreSpeed;
        patate = 0;
    }
    if (patate == 90)
    {
        barre1Y -= barreSpeed;
        patate = 0;
    }
}
function barre2()
{
    barre2Y = (yAxe - 30);
    pong.beginPath();
    pong.rect(920, barre2Y, 10, 75)
    pong.fillStyle = "black";
    pong.fill();
    pong.closePath();
    if (patate == 40)
    {
        barre2Y += barreSpeed;
        patate = 0;

    }
    if (patate == 38)
    {
        barre2Y -= barreSpeed;
        patate = 0;

    }
}
function moveBall()
{
    pong.clearRect(0, 0, abdelpong.width, abdelpong.height);
    ball();
    if ((yAxe + vy) > abdelpong.height )
    {
       vy = -vy;
    }
    if ((yAxe + vy) < 0 )
    {
       vy = -vy;
    }
    if((xAxe + vx)< 40 && yAxe > barre1Y && yAxe < (barre1Y + 75))
    {
        vx = -vx;
    }
    if((xAxe + vx) > 920 && yAxe > barre2Y && yAxe < (barre2Y + 75))
    {
        vx = -vx;
    }
    if(xAxe == 950 )
    {
        xAxe = 0;
    }
    if(xAxe <  -10 )
    {
        abdelpong.style.display = "none";
        document.getElementById('game_over').style.display = "block";
        document.getElementById('your_score').style.display = "block";
        document.getElementById('your_score').innerHTML = score;
    }
   
        xAxe += vx ;
        yAxe += vy ;
        barre1();
        barre2();

};


setInterval(moveBall, 10);

//function addSpeed()
//{
  //  vy++;
   // vx++;
//}
//setInterval(addSpeed, 1000);

