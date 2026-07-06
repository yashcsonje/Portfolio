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
        throw new Error(error); 
      },
    )
    .catch((error) => {
      displayError(thisForm, error);
    });
  }

  function displayError(thisForm, error) {
    thisForm.querySelector('.loading').classList.remove('d-block');
    thisForm.querySelector('.error-message').innerHTML = error.text;
    thisForm.querySelector('.error-message').classList.add('d-block');
  }

})();
