const rightButton = document.querySelector('#right');
const leftButton = document.querySelector('#left');

rightButton.addEventListener('click', function() {
    carousel(-350);
});

leftButton.addEventListener('click', function() {
    carousel(350);
});

function carousel(leftValue) {
    const countOfItem = 4;
    const countOfInnerItems = 2;
    const slideContainer = document.querySelector('#slideContainer');
    let olderLeftValue = parseInt(slideContainer.style.left) || 0;

    let newLeftValue = olderLeftValue + leftValue;

    if (newLeftValue > 0 && leftValue == 350) {
        newLeftValue = -(countOfItem - countOfInnerItems) * 350;
    }
    if (newLeftValue < -(countOfItem - countOfInnerItems) * 350 && leftValue == -350) {
        newLeftValue = 0;
    }

    slideContainer.style.left = newLeftValue + 'px';
}