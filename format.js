function addClick(x) {
    if (x.matches) {
        let dropButton = document.querySelector('.dropButton');
        let dropTwo = document.querySelector('.dropdown .dropdownContent');
        let dropThree = document.querySelector('.dropdown .dropButton');
        let dropButtonAbout = document.querySelector('.dropButton-about');
        let dropTwoAbout = document.querySelector('.dropdown-about .dropdownContent-about');
        let dropThreeAbout = document.querySelector('.dropdown-about .dropButton-about');
        dropButton.onclick = function() {
            dropTwo.style.display = 'block';
            dropThree.style.backgroundColor = '#008CCC';
        }
        dropButtonAbout.onclick = function() {
            dropTwoAbout.style.display = 'block';
            dropThreeAbout.style.display = '#008CCC'
        }
    }
}

function offClick(x) {
    if (x.matches) {
        let dropTwo = document.querySelector('.dropdown .dropdownContent');
        let dropThree = document.querySelector('.dropdown .dropButton');
        document.onclick = function(e) {
            offClick.stopPropogation(e);
            dropTwo.style.display = 'inline-block';
            dropThree.style.backgroundColor = 'none';
        }
    }
}

const x = window.matchMedia('(max-device-width: 1024px)');
addClick(x);
offClick(x);
x.addListener(addClick);
x.addEventListener(offClick);