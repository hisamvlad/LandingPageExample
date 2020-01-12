

  
   
 

 
//*****Stripe******/

 // Replace with your own public key: https://dashboard.stripe.com/test/apikeys
 var PUBLIC_KEY = "pk_live_VWLcSg6dXsOYtYfJZW2YtOzd00kc6bIwMU";
 // Replace with the domain you want your users to be redirected back to after payment


 // var DOMAIN = window.location.hostname;
 var DOMAIN = "https://nofat.me/" ;

 // Replace with a SKU for your own product (created either in the Stripe Dashboard or with the API)

 

 var stripe = Stripe(PUBLIC_KEY);
//  var orderButton = document.querySelector("#order-button");

 
 // Handle any errors from Checkout
 var handleResult = function(result) {
   if (result.error) {
     var displayError = document.getElementById("error-message");
     displayError.textContent = result.error.message;
   } 

 };

 const buttons = document.querySelectorAll('#order-button')
 buttons.forEach(function(currentBtn){
   currentBtn.addEventListener('click',  function() {
    
    stripe.redirectToCheckout({
   items: [{ sku: 'sku_GQ1Kid3HTwt0jl', quantity: 1 }],
   successUrl:
     DOMAIN + "/Success.html?session_id={CHECKOUT_SESSION_ID}",
    
   cancelUrl: DOMAIN 
 })
 .then(handleResult);

}

);
 })




 //This method selects only one button
 //****************** */
//        orderButton.addEventListener("click", function() {
    
//         stripe.redirectToCheckout({
//        items: [{ sku: 'sku_GQ1Kid3HTwt0jl', quantity: 1 }],
//        successUrl:
//          DOMAIN + "/Success.html?session_id={CHECKOUT_SESSION_ID}",
        
//        cancelUrl: DOMAIN 
//      })
//      .then(handleResult);
    
//     }
  
//  );


// Register address with firstore
var confirmAddress = document.getElementById('confirmAddress');
const form = document.querySelector('#addressForm')

// var name = document.getElementById('reg-name').value;
// var surname = document.getElementById('reg-surname').value;
// var email = document.getElementById('reg-email').value;
// var houseNo = document.getElementById('houseNo').value;
// var street = document.getElementById('street').value;
// var city = document.getElementById('city').value;
// var country = document.getElementById('country').value;
// var postalIndex = document.getElementById('post-index').value;



if(form) {
form.addEventListener('submit', (e) => {
e.preventDefault();

var name = addressForm['reg-name'].value;
var surname = addressForm['reg-surname'].value;
var email = addressForm['reg-email'].value;
var houseNo = addressForm['houseNo'].value;
var street = addressForm['street'].value;
var city = addressForm['city'].value;
var country = addressForm['country'].value;
var postalIndex = addressForm['post-index'].value;
// TODO NEST: submit the user to database with current date

     db.collection('User').doc(`${email}`).set({
      name: `${name}`,
      surname: `${surname}`,
      houseNo: `${houseNo}`,
      street: `${street}`,
      city: `${city}`,
      country: `${country}`,
      postalIndex: `${postalIndex}`,

}).then(() => {
  alert('');
  form.reset();
});
});
}