const popup = document.getElementById('popup');
const openBtn = document.getElementById('btn1');
const closeBtn = document.getElementById('closeBtn');

// Open the pop-up when clicking the open button
btn1.addEventListener('click', () => {
  popup.showModal();
});

// Close the pop-up when clicking the close button
closeBtn.addEventListener('click', () => {
  popup.close();
});
