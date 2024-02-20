
// carousel for section 7
let slideIndex = 0;
showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    const slides = document.getElementsByClassName("slide");

    if (n >= slides.length) {
        slideIndex = 0; // Wrap to the first slide
    }
    if (n < 0) {
        slideIndex = slides.length - 1; // Wrap to the last slide
    }
    
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    slides[slideIndex].style.display = "block";
}

// buttons for grid display
function handleButtonClick(btnarrow, content, hiddenText){

let isTextVisible = false;

btnarrow.addEventListener('click', () => {
  if (isTextVisible) {
    content.style.transform = 'translateY(0)';
    hiddenText.style.display = 'none';
	btnarrow.style.transform = 'scaleY(-1)';
  } else {
    content.style.transform = 'translateY(-50%)';
    hiddenText.style.display = 'block';
	btnarrow.style.transform = 'scaleY(1)';
  }
	
  isTextVisible = !isTextVisible;
});
}
{
const btnarrows = document.querySelectorAll('.btnarrow');
btnarrows.forEach(btnarrow => {
  const container = btnarrow.closest('.grid-item'); // Get the container for this button
  const content = container.querySelector('.grid-item-text');
  const hiddenText = container.querySelector('.hidden-text');

  handleButtonClick(btnarrow, content, hiddenText);
});
}
//button for drop down arrow
function handleButtonClick2(dwnbtnarrow, content, hiddenText) 

{
  let isTextVisible = false;

  dwnbtnarrow.addEventListener('click', () => {
    if (isTextVisible) {
      content.style.transform = 'translateY(0)';
	hiddenText.style.transform = 'scaleY(0%)';
      dwnbtnarrow.style.transform = 'scaleY(1)';
	hiddenText.style.padding = '0px 0px 0px 0px'
    } else {
      content.style.transform = 'translateY(50%)';
      hiddenText.style.display = 'block';
		hiddenText.style.transform = 'scaleY(100%)';
		hiddenText.style.padding = '40px 0px 40px 0px';
      dwnbtnarrow.style.transform = 'scaleY(-1)';
    }

    isTextVisible = !isTextVisible;
  });
}

const dwnbtnarrows = document.querySelectorAll('.downbtnarrow');
dwnbtnarrows.forEach(dwnbtnarrow => {
  const container = dwnbtnarrow.closest('.strip'); // Get the container for this button
  const content = container.querySelector('.dwnbuttoncontainer');
  const hiddenText = container.querySelector('.dwnbuttoncontainer');

  handleButtonClick2(dwnbtnarrow, content, hiddenText);
});