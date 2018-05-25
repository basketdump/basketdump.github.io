var x;
var y;
var ball;
var score;

function setup()
{
    createCanvas(1280, 720, 'WEBGL');
    ball = new Ball(width/2, height/2, 30);
    score = new Score();
}

function draw()
{
    background(100);
    if (score.score < 10)
    {
        ball.x += random(-5, 5);
        ball.y += random(-5, 5);
        ball.draw();
        score.draw();
        textSize(28);
        textAlign(CENTER);
        fill(255);
        text("Good Luck Kiddo", width/2, 30);
    }
    else
    {
        textSize(48);
        textAlign(CENTER);
        fill(255);
        text("YOU WIN", width/2, height/2);
    }
}

function keyTyped() {
    if (key === 'z'){
        if (distance(mouseX, mouseY, ball.x, ball.y) < ball.radius/2)
        {
            score.score += 1;
        }
        else
        {
            if (score.score > 0)
            {
                score.score -= 1;
            }
        }
    }
}

function distance(x1, y1, x2, y2)
{
    var n1 = x1 - x2;
    var n2 = y1 - y2;
    n1 = n1 * n1;
    n2 = n2 * n2;
    return sqrt(n1 + n2);
}