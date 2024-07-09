const images = document.querySelectorAll('.image');

images.forEach((image) => {
  image.addEventListener('click', () => {
    const imgSrc = image.querySelector('img').src;
    const modal = document.createElement('div');
    modal.classList.add('modal');
    modal.innerHTML = `
      <img src="${imgSrc}" alt="Image">
      <span class="close">&times;</span>
    `;
    document.body.appendChild(modal);
  });
});

document.addEventListener('click', (e) => {
  if (e.target.classList.contains('close')) {
    const modal = e.target.parentNode;
    modal.remove();
  }
});

