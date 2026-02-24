var colors = ["#c81501", "#112613", "#c06471", "#142714", "#acb0b3"];
var i = 0;

function changeColor() {
    document.body.style.backgroundColor = colors[i];
    i = i + 1;

    if (i == colors.length) {
        i = 0;
    }
}
setInterval(changeColor, 1000);

