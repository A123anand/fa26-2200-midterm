// Open: any button with a data-dialog attribute
document.querySelectorAll('[data-dialog]').forEach((button) => {
  button.addEventListener('click', () => {
    document.getElementById(button.dataset.dialog).showModal();
  });
});

// Close: any button with class close-btn closes its own dialog
document.querySelectorAll('.close-btn').forEach((button) => {
  button.addEventListener('click', () => {
    button.closest('dialog').close();
  });
});

// Bonus: clicking the dark backdrop also closes the dialog
document.querySelectorAll('dialog').forEach((dialog) => {
  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });
});