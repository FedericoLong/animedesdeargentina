const imagenes = document.querySelectorAll('.imagen');

for (let i = 0; i < imagenes.length; i++) {
  imagenes[i].addEventListener('click', function() {
    const titulo = this.getAttribute('data-titulo');
    window.location.href = `novela.html?titulo=${titulo}`;
  });
}
