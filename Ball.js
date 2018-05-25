function Ball(x, y, radius)
{
    this.x = x;
    this.y = y;
    this.radius = radius;

    this.draw = function ()
    {
        fill(255);
        ellipse(this.x, this.y, this.radius);
    }
}