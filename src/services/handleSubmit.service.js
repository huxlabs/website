const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/';
const EMAIL_STRING = '89e3ae8b5fd621573d8159600f104a09';
const URL = `${FORMSUBMIT_URL}${EMAIL_STRING}`;
const SUCCESS_MESSAGE = 'Thank you for submitting the form!';

export default async function handleSubmit(event) {
  // Prevent page reload
  event.preventDefault();
  // Add button loading state
  toggleButtonLoading(true);
  // Get form
  const form = document.getElementById('contact-form');

  try {
    // Send message
    await sendMessage(form);
    // Clear text in form inputs
    clearForm(form);
    // Display success message below form
    displaySuccessMessage(form);
  } catch (error) {
    // Log any errors to the console
    console.log(error);
  } finally {
    // Remove button loading state
    toggleButtonLoading(false);
  }
}

async function sendMessage(form) {
  const name = form.querySelector('#name').value;
  const email = form.querySelector('#email').value;
  const message = form.querySelector('#message').value;

  return await fetch(URL, {
    method: "POST",
    headers: { 
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    })
  });
}

function toggleButtonLoading(isLoading) {
  const button = document.querySelector('button[type="submit"]');
  if (isLoading) {
    button.classList.add('is-loading');
    button.disabled = true;
  } else {
    button.classList.remove('is-loading');
    button.disabled = false;
  }
}

function clearForm(form) {
  form.reset();
}

function displaySuccessMessage(form) {
  const message = document.createElement('p');
  message.textContent = SUCCESS_MESSAGE;

  form.appendChild(message);
}
