    var payWithPaypal= document.getElementById('payWithPaypal'); 
    // var Paypal11= document.getElementsByClassName('paypal11')[0]; 
    // var Paypal15= document.getElementsByClassName('paypal15')[0];

     var Paypal11 = document.querySelector('#paypal11');
     var Paypal15 = document.querySelector('#paypal15');
    // var card = document.querySelector('#card');

    var payWithCard= document.getElementById('payWithCard'); 
     var card = document.getElementsByClassName('card')[0]; 
 
    var paperbackChecked = document.getElementById('paperback');
    var PDFbackChecked = document.getElementById('PDF');
    var EPUBbackChecked = document.getElementById('EPUB');

    
    

    // function paypalPaymentChecked() {
    //     if( payWithPaypal.checked) {
    //         Paypal.style.display = "block";
    //         card.style.display = "none";
    //             } else {
    //                 Paypal.style.display = "none";
    //                 card.style.display = "block";
    //             }
    //         }

    // function cardPaymentChecked() {
    //      if( payWithCard.checked) {
    //         card.style.display = "block";
    //         Paypal.style.display = "none"; 
    //     } else {
    //         card.style.display = "none";
    //         Paypal.style.display = "block";
    //     }
    // }

   
    
    
         
    
    function paperback() {
  if (document.getElementById('paperback').checked = true)
  {
   // do whatever you want with the checked radio
   alert("Вы выбрали бумажную книгу");
     SKU_ID = "sku_Fzl7pxWKFh6lnT";
     card.style.display="block";
     paypal15.style.display = "block";
     paypal11.style.display = "none";
   
  }
 };

 function PDFChecked() {
 if (document.getElementById('PDF').checked = true)
  {
   // do whatever you want with the checked radio
   alert("Вы выбрали PDF");
   SKU_ID = "sku_FzlAFbaQ6Jd0vH";
   card.style.display="block";
   paypal11.style.display = "block";
   paypal15.style.display = "none";
   
  }
 };

 function EPUBChecked() {
 if (document.getElementById('EPUB').checked = true)
  {
   // do whatever you want with the checked radio
   alert("Вы выбрали EPUB" );
   SKU_ID = "sku_FzlAHRZMkdumdL";
   card.style.display="block";
     paypal11.style.display = "block";
     paypal15.style.display = "none";
 
   
  }
 
 };
 
//*****Stripe******/

 // Replace with your own public key: https://dashboard.stripe.com/test/apikeys
 var PUBLIC_KEY = "pk_test_jpKjMFbEFnJJJKyJvHP24qw500ivhxcbac";
 // Replace with the domain you want your users to be redirected back to after payment


 // var DOMAIN = window.location.hostname;
 var DOMAIN = "https://playrichclub.com" ;



 // Replace with a SKU for your own product (created either in the Stripe Dashboard or with the API)

 //var SKU_ID = "sku_Fz7ayRVb0Vt0O5";
 

 var stripe = Stripe(PUBLIC_KEY);
 var orderButton = document.getElementById("order-button");

 
 // Handle any errors from Checkout
 var handleResult = function(result) {
   if (result.error) {
     var displayError = document.getElementById("error-message");
     displayError.textContent = result.error.message;
   } 

 };

 if(orderButton) {
 orderButton.addEventListener("click", function() {
    if (SKU_ID = "sku_Fzl7pxWKFh6lnT") {
        stripe
     .redirectToCheckout({
       items: [{ sku: SKU_ID, quantity: 1 }],
       successUrl:
         DOMAIN + "/Paperback.html?session_id={CHECKOUT_SESSION_ID}",
        
       cancelUrl: DOMAIN + "/canceled.html"
     })
     .then(handleResult);
    } else if (SKU_ID = "sku_FzlAFbaQ6Jd0vH") {
        stripe
        .redirectToCheckout({
          items: [{ sku: SKU_ID, quantity: 1 }],
          successUrl:
            DOMAIN + "/PDF.html?session_id={CHECKOUT_SESSION_ID}",
          cancelUrl: DOMAIN + "/canceled.html"
        })
        .then(handleResult);
    } else if (SKU_ID = "sku_FzlAHRZMkdumdL") {
        stripe
        .redirectToCheckout({
          items: [{ sku: SKU_ID, quantity: 1 }],
          successUrl:
            DOMAIN + "/EPUB.html?session_id={CHECKOUT_SESSION_ID}",
          cancelUrl: DOMAIN + "/canceled.html"
        })
        .then(handleResult);
    }
  
 });
}

// After payment 

var pathReferencePDF = storage.ref('PDF/European Blues. Vladimir Bern.pdf');
var pathReferenceEPUB = storage.ref('EPUB/European Blues by Vladimir Bern.epub');

// Download PDF
var PDFDownload = document.getElementById('EPUBDownload');

if(PDFDownload) {
PDFDownload.addEventListener('click', (e) => {
  pathReferencePDF.getDownloadURL().then(function(url) {
  
  }).catch(function(error) {
  
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break;
  
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
  
      case 'storage/canceled':
        // User canceled the upload
        break;
     
      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });
}).then(() => {
 PDFDownload.style.display ='none';
}); 
}
// Download EPUB
var EPUBDownload = document.getElementById('EPUBDownload');

if(EPUBDownload) {
EPUBDownload.addEventListener('click', (e) => {
  pathReferenceEPUB.getDownloadURL().then(function(url) {
  
  }).catch(function(error) {
  
    // A full list of error codes is available at
    // https://firebase.google.com/docs/storage/web/handle-errors
    switch (error.code) {
      case 'storage/object-not-found':
        // File doesn't exist
        break;
  
      case 'storage/unauthorized':
        // User doesn't have permission to access the object
        break;
  
      case 'storage/canceled':
        // User canceled the upload
        break;
     
      case 'storage/unknown':
        // Unknown error occurred, inspect the server response
        break;
    }
  });
}).then(() => {
 EPUBDownload.style.display ='none';
}); 
}

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
  alert('Благодарю за покупку. Книга уже в пути!');
  form.reset();
});
});
}