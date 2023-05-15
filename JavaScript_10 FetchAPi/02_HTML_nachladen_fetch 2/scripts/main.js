'use strict';
function init() {
  console.log("Daten mit Fetch API laden");
  let login = document.getElementById('login');
  let register = document.getElementById('register');
  login.addEventListener('click', (e) => {
    /* Kommentar ergänzen: Was macht preventDefault? */
    e.preventDefault();
    loadContent('login');
  });
  register.addEventListener('click', (e) => {
    e.preventDefault();
    loadContent('register');
  });
}

function loadContent(name) {
/* Kommentar ergänzen: Was sind async und await?  */
  async function fetchContent() {
    let response = await fetch(name + '.html');
    console.log(response.status); // 200
    console.log(response.statusText); // OK
    if (response.status === 200) {
      let htmlSnippet = await response.text();
      /*console.log(htmlSnippet);*/
      document.getElementById('main-content').innerHTML = htmlSnippet;

    } else {
      /* Füge eine Warnmeldung hinzu */
      alert("Resource konnte nicht geladen werden");
    }
  }
  fetchContent();
}


document.addEventListener('DOMContentLoaded', init);
