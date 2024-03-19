function toggleButton(btnId) {
    var button = document.getElementById(btnId);
    if (button.classList.contains('on')) {
        button.textContent = 'オフ';
        button.classList.remove('on');
        button.classList.add('off');
    } else {
        button.textContent = 'オン';
        button.classList.remove('off');
        button.classList.add('on');
    }
}

document.getElementById('btn1').addEventListener('click', function() {
    toggleButton('btn1');
});

document.getElementById('btn2').addEventListener('click', function() {
    toggleButton('btn2');
});
document.getElementById('btn3').addEventListener('click', function() {
    toggleButton('btn3');
});
document.getElementById('btn4').addEventListener('click', function() {
    toggleButton('btn4');
});