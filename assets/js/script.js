/* Animação Type Writer */

function typeWriter(elemento) {
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
      setInterval(setTimeout(() => elemento.innerHTML += letra, 75 * i), 1000);
    });
  }

  const type1 = document.querySelector('.type1');
  typeWriter(type1);

/* Fim Animação Type Writer */
