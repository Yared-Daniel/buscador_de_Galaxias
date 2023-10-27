   const form = document.getElementById('registro-form');

    form.addEventListener('submit', (event) => {
    event.preventDefault();

const url = 'https://jsonplaceholder.typicode.com/users';

const data = {
    nombre: form.elements['nombre'].value,
    apellido: form.elements['apellido'].value,
    fechaNacimiento: form.elements['fecha-nacimiento'].value
      };
      
const options = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      };
      fetch(url, options)
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error(error));
    });
