
    // const numOne = document.getElementById('num-one');
    // const numTwo = document.getElementById('num-two');
    // const numThree = document.getElementById('num-three');

    // const paraOne = document.getElementById('para-one');
    // const paraTwo = document.getElementById('para-two');
    // const paraThree = document.getElementById('para-three');

    // const nextButton = document.getElementById('next');

    // let currentIndex = 0;

    // const clearStyles = (element) => {
    //     element.style.backgroundColor = '';
    //     element.style.color = '';
    // };

    // const applyStyles = (element) => {
    //     element.style.backgroundColor = 'black';
    //     element.style.color = 'white';
    // };

    // nextButton.addEventListener('click', () => {
    //     switch (currentIndex) {
    //         case 0:
    //             applyStyles(numOne);
    //             applyStyles(paraOne);
    //             clearStyles(numTwo);
    //             clearStyles(paraTwo);
    //             currentIndex++;
    //             break;
    //         case 1:
    //             clearStyles(numOne)
    //             clearStyles(paraOne)

    //         applyStyles(numTwo);
    //         applyStyles(paraTwo);
    //             clearStyles(numThree);
    //             clearStyles(paraThree);
    //             currentIndex++;
    //             break;
    //         case 2:
    //             applyStyles(numThree);
    //             applyStyles(paraThree);
    //             clearStyles(numOne);
    //             clearStyles(paraOne);
    //             clearStyles(numTwo);
    //             clearStyles(paraTwo);
    //             nextButton.style.display="disabled"
    //             break;
    //     }
    // });












// // 2nd way
// document.addEventListener('DOMContentLoaded', () => {
//     const numbers = document.getElementsByClassName("number")
//     const paragraphs = document.getElementsByClassName("para")
//     const nextButton = document.getElementById('next');

//     let currentIndex = 0;

//     const clearStyles = (index) => {
//         numbers[index].classList.add("removing");
//         numbers[index].classList.add("removing");
//         paragraphs[index].classList.add("removing");
//         paragraphs[index].classList.add("removing");
//     };

//     const applyStyles = (index) => {
//         numbers[index].classList.add("adding");
//         numbers[index].classList.add("adding");
//         paragraphs[index].classList.add("adding");
//         paragraphs[index].classList.add("adding");
//     };

//     const handleClick = () => {
//         clearStyles(currentIndex);
//         currentIndex = (currentIndex + 1) % numbers.length;
//         applyStyles(currentIndex);
//     };

//     nextButton.addEventListener('click', handleClick);

//     // Initial application of styles
//     applyStyles(currentIndex);
// });

const numbers = document.querySelectorAll('.number');
const paragraph = document.querySelector('.para');
var next =  document.getElementById('next');
var prev = document.getElementById('prev');
var reset = document.getElementById('reset');
let currentIndex = 0;

const updateDisplay = () => {
    // Remove 'active' class from all numbers
    document.querySelector('.number.active')?.classList.remove('active');
    // Add 'active' class to current index number
    numbers[currentIndex].classList.add('active');

    // Update paragraph content based on the current active number
    switch (numbers[currentIndex].id) {
        case 'num-1': paragraph.textContent = 'Step 1:  Learn React';
            break;
        case 'num-2': paragraph.textContent = 'Step 2: Learn Html';
            break;
        case 'num-3': paragraph.textContent = 'Step 3: Learn JavaScript';
            break;
        default: console.error(`Error: Invalid ID ${numbers[currentIndex].id}`);
    } 

    // Enable or disable buttons based on the current index
    prev.classList.toggle('disabled', currentIndex === 0);
    next.classList.toggle('disabled', currentIndex === numbers.length - 1);
}
const nextButtonClickHandler = () => {
    if (currentIndex < numbers.length -1 ) {
        currentIndex++;
        updateDisplay();
    }
};


const prevButtonClickHandler = () => {
    if (currentIndex >  0) {
        currentIndex--;
        updateDisplay();
    }
    
};
const resetButtonClickHandler = () => {
    currentIndex = 0;
    updateDisplay();
};
// Add event listeners to buttons
next.addEventListener('click', nextButtonClickHandler);
prev.addEventListener('click', prevButtonClickHandler);
reset.addEventListener('click', resetButtonClickHandler);
// Initial display setup
updateDisplay();