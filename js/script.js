// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

//  Automatically open the modal when the page loads
window.onload = function() {
    var myModal = new bootstrap.Modal(document.getElementById('updatesModal'));
    myModal.show();
};

/* COUNTER FOR THE WEBPAGE */
// Get the button and the span element
const button = document.getElementById('clickButton');
const counterSpan = document.getElementById('counter');

// Initialize the counter variable
let count = 0;

// Add an event listener to the button
button.addEventListener('click', () => {
  // Increment the count
  count++;
  // Update the text in the span element
  counterSpan.textContent = count;
});