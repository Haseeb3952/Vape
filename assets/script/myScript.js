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


// Product Images Gallery 

let product_img = document.querySelector('.product-img img');
let product_thumbnail = document.querySelectorAll('.product-thumbnail');

product_thumbnail.forEach((product) => {
  product.addEventListener('click', () => {
    product_thumbnail.forEach((product) => {
      product.classList.remove('active');
    });
    product.classList.add('active');

    let img = product.querySelector('img').getAttribute('src');
    let index = product.querySelector('img').getAttribute('data-index');

    product_img.setAttribute('src', img);
    product_img.setAttribute('data-index', index);

    product_img.classList.add('product-down-animation');
    setTimeout(() => {
      product_img.classList.remove('product-down-animation');
    }, 500);
  });
});


  // JavaScript to initialize the modal
  $(document).ready(function(){
    $('#myModal').modal({
      backdrop: 'static',  // Prevent clicking outside the modal to close it
      keyboard: false      // Prevent closing the modal with the keyboard
    });
  });