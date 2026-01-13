const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    form.reset();
    const button = form.querySelector('button');
    if (button) {
      const original = button.textContent;
      button.textContent = 'Sent!';
      button.disabled = true;
      setTimeout(() => {
        button.textContent = original;
        button.disabled = false;
      }, 2000);
    }
  });
}
