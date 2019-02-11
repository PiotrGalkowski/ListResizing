const btn = document.querySelector('button');
const liList = document.querySelectorAll('li');
let counter = 1;
let startSize = 10;

btn.addEventListener('click', function () {

    if (counter == 1) {
        for (let i = 0; i < liList.length; i++) {
            liList[i].style.fontSize = startSize + 'px';
            liList[i].style.display = 'block';
        }
    } else {
        startSize++;
        for (let i = 0; i < liList.length; i++) {
            liList[i].style.fontSize = startSize + 'px';
        }
    }
    counter++;
    console.log(counter);
})