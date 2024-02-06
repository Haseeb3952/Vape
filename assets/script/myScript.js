function verifyAge() {
  // Check if the user is 18 or older (you can implement your age verification logic here)
  var isOver18 = true; // Replace this with your actual age verification logic

  if (isOver18) {
    // If the user is 18 or older, hide the age verification pop-up
    document.querySelector('.age-verification').style.display = 'none';
  } else {
    // If the user is under 18, close the website
    closeWebsite();
  }
}

function closeWebsite() {
  // Close the website
  window.close();
}


// Counter Button 

let currentValue = 0;

function updateValue(amount) {
  currentValue += amount;
  document.getElementById('display').innerText = currentValue;
}
