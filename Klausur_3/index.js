// Warten, bis das Dokument vollständig geladen ist
document.addEventListener('DOMContentLoaded', function() {

    // Formular abrufen
    const form = document.querySelector('form');
  
    // Ereignis-Listener für das Absenden des Formulars hinzufügen
    form.addEventListener('submit', function(event) {
      event.preventDefault(); // Verhindert das tatsächliche Absenden des Formulars
  
      // Eingabefelder abrufen
      const firstName = document.querySelector('#first_name').value;
      const lastName = document.querySelector('#second_name').value;
      const phoneNum = document.querySelector('#userNr').value;
      const email = document.querySelector('#userAddress').value;
      const france = document.querySelector('input[name="france"]').checked;
      const italy = document.querySelector('input[name="ita"]').checked;
      const austria = document.querySelector('#oesi').checked;
  
      // Erstelle Text für die Bestätigungsnachricht
      let message = `Vielen Dank für Ihre Anfrage, ${firstName} ${lastName}!`;
      message += `\nWir haben Ihnen eine Bestätigung an ${email} gesendet.`;
      message += `\n\nFolgende Reiseziele wurden ausgewählt:`;
      if (france) message += '\n- Frankreich';
      if (italy) message += '\n- Italien';
      if (austria) message += '\n- Österreich';
  
      // Erstelle ein neues Element für die Bestätigungsnachricht
      const confirmation = document.createElement('p');
      confirmation.textContent = message;
  
      // Füge das Element unterhalb des Formulars ein
      const parent = document.querySelector('#parent');
      parent.appendChild(confirmation);
    });
  });