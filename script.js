//your code here
const form = document.getElementById('registrationForm');

form.addEventListener('submit', (e) => {
  e.preventDefault();

  // Retrieve form values
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const gender = document.querySelector('input[name="gender"]:checked').value;
  const carBrand = document.getElementById('cars').value;
  const carAge = document.getElementById('carage').value;
  const dateOfPurchase = document.getElementById('dop').value;
  const password = document.getElementById('password').value;

  // Perform further validation or processing
  // ...
});
