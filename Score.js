function Score()
{
    this.score = 0;

    this.draw = function()
    {
        textSize(20);
        fill(255);
        text(("Score: " + this.score), width/2, 50);
    }
}