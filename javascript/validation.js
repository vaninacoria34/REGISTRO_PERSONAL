document.addEventListener('DOMContentLoaded', () => {
  const formulario = document.querySelector('#formulario_contacto');

  formulario.addEventListener('submit', (event) => {
    if (!formulario.checkValidity()) {
      event.preventDefault();
      event.stopPropagation();
      formulario.classList.add('was-validated');
    } else {
      const confirmar = confirm("¿Son correctos sus datos?");
      if (!confirmar) {
        event.preventDefault();
      } else {
        alert("Tus datos fueron enviados correctamente. Pronto recibirás una respuesta.");
        formulario.reset();
        formulario.classList.remove('was-validated');
      }
    }
  });

  const enlaceGeronimo = document.querySelector('#linkGeronimo');
  const enlaceVanina = document.querySelector('#linkVanina');
  const enlaceCilsa = document.querySelector('#linkCilsa');

  const manejarClick = (mensaje, event) => {
    const resultado = confirm(mensaje);
    if (!resultado) {
      event.preventDefault();
    }
  };

  enlaceGeronimo.addEventListener('click', (event) => {
    manejarClick('¿Deseas visitar el perfil de Geronimo A. Franco?', event);
  });

  enlaceVanina.addEventListener('click', (event) => {
    manejarClick('¿Deseas visitar el perfil de Vanina Coria?', event);
  });

  enlaceCilsa.addEventListener('click', (event) => {
    manejarClick('¿Deseas visitar el sitio web de CILSA ONG?', event);
  });
});
