//your JS code here. If required.
const smallCups = document.querySelectorAll('.cup-small');
const liters = 2;
const totalCups = smallCups.length;
const remained = document.getElementById('remained');
const percentage = document.getElementById('percentage');

smallCups.forEach((cup, index) => {
    cup.addEventListener('click', () => highlightCups(index));
});

function highlightCups(index) {
    if (smallCups[index].classList.contains('full') && !smallCups[index].nextElementSibling?.classList.contains('full')) {
        index--;
    }

    smallCups.forEach((cup, idx) => {
        if (idx <= index) {
            cup.classList.add('full');
        } else {
            cup.classList.remove('full');
        }
    });

    updateBigCup();
}

function updateBigCup() {
    const fullCups = document.querySelectorAll('.cup-small.full').length;
    const percentageFilled = fullCups / totalCups;

    if (fullCups === 0) {
        percentage.style.height = 0;
        percentage.textContent = '';
    } else {
        percentage.style.height = `${percentageFilled * 100}%`;
        percentage.textContent = `${percentageFilled * 100}%`;
    }

    const remainedLiters = liters - (percentageFilled * liters);
    remained.textContent = `${remainedLiters.toFixed(2)} Litres Remaining`;
}
