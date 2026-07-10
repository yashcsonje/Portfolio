(function () {
  "use strict";

  let forms = document.querySelectorAll('.feedback-form');

  forms.forEach( function(e) {
    e.addEventListener('submit', function(event) {
      event.preventDefault();

      let thisForm = this;

      let action = thisForm.getAttribute('action');
      
      if( ! action ) {
        displayError(thisForm, 'The form action property is not set!');
        return;
      }
      thisForm.querySelector('.loading').classList.add('d-block');
      thisForm.querySelector('.error-message').classList.remove('d-block');
      thisForm.querySelector('.sent-message').classList.remove('d-block');

      let formData = new FormData( thisForm );
      sendmail(thisForm)
    });
  });

  function sendmail(thisForm){
    const replyTo = thisForm.querySelector('[name="reply_to"]');
    if (replyTo) {
      replyTo.value = thisForm.elements.email.value;
    }

    if (typeof emailjs !== 'undefined') {
      emailjs.init({
        publicKey: "r1YGwEd2slTAXLqKT",
      });
    } else {
      displayError(thisForm, 'The email service is unavailable. Please try again later.');
      return;
    }
    
    emailjs.sendForm('service_bx9gn4k', 'template_a4j9ojd', '#feedbackform')
    .then(
      (response) => {
        console.log('SUCCESS!', response.status, response.text);
        thisForm.querySelector('.loading').classList.remove('d-block');
        thisForm.querySelector('.sent-message').classList.add('d-block');
        thisForm.reset(); 
        return response.text;
      },
      (error) => {
        console.log('FAILED...', error);
        throw error; 
      },
    )
    .catch((error) => {
      displayError(thisForm, error);
    });
  }

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    let message = error.text || error.message || error || 'Form submission failed';
    thisForm.querySelector('.error-message').innerHTML = message;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
