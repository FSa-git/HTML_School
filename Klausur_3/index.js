const form = document.querySelector('form');
const firstNameInput = document.querySelector('#first_name');
const lastNameInput = document.querySelector('#second_name');
const phoneInput = document.querySelector('#userNr');
const emailInput = document.querySelector('#userAddress');
const franceCheckbox = document.querySelector('input[name="france"]');
const italyCheckbox = document.querySelector('input[name="ita"]');
const austriaCheckbox = document.querySelector('#oesi');

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const firstName = firstNameInput.value;
  const lastName = lastNameInput.value;
  const phone = phoneInput.value;
  const email = emailInput.value;
  const destinations = [];

  if (franceCheckbox.checked) {
    destinations.push('Frankreich');
  }

  if (italyCheckbox.checked) {
    destinations.push('Italien');
  }

  if (austriaCheckbox.checked) {
    destinations.push('Österreich');
  }

  const message = `Vielen Dank, ${firstName} ${lastName}, für Ihre Anfrage! Wir haben Ihre Kontaktdaten ${phone} und ${email} gespeichert und werden uns bald bei Ihnen melden. Sie haben folgende Reiseziele ausgewählt: ${destinations.join(', ')}.`;

  alert(message);
});