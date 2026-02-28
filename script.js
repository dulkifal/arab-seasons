const printBtn = document.getElementById('printBtn');
const resetBtn = document.getElementById('resetBtn');

const avatarInput = document.getElementById('avatarInput');
const avatarImage = document.getElementById('avatarImage');
const avatarPlaceholder = document.getElementById('avatarPlaceholder');

// Print functionality
printBtn.addEventListener('click', () => {
  window.print();
});

// Clear form functionality
resetBtn.addEventListener('click', () => {
  if (confirm('Are you sure you want to clear the form?')) {
    document.querySelectorAll('input[type="text"], input[type="date"], input[type="email"], textarea').forEach(input => {
      input.value = '';
    });
    // Reset avatar
    avatarImage.src = '';
    avatarImage.style.display = 'none';
    avatarPlaceholder.style.display = 'block';
    avatarInput.value = '';
  }
});

// Avatar upload handling
avatarInput.addEventListener('change', (e) => {
  const file = e.target.files[0];
  if (file && file.type.startsWith('image/')) {
    const reader = new FileReader();
    reader.onload = (event) => {
      avatarImage.src = event.target.result;
      avatarImage.style.display = 'block';
      avatarPlaceholder.style.display = 'none';
    };
    reader.readAsDataURL(file);
  }
});
