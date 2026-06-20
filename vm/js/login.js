document.addEventListener('DOMContentLoaded', () => {
  const loginForm = document.getElementById('loginForm');
  const registerForm = document.getElementById('registerForm');

  // LOGIN
  if (loginForm) {
    loginForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const email = document.getElementById('email').value;

      const user = {
        name: email.split('@')[0],
        email: email,
        role: 'customer'
      };

      localStorage.setItem('user', JSON.stringify(user));

      alert('Login successful!');

      // redirect based on role
      window.location.href = user.role === 'farmer'
        ? 'farmer-dashboard.html'
        : 'dashboard.html';
    });
  }

  // REGISTER
  if (registerForm) {
    registerForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('name').value;
      const email = document.getElementById('email').value;
      const pass = document.getElementById('password').value;
      const confirmPass = document.getElementById('confirmPassword').value;
      const role = document.getElementById('userType').value;

      if (pass !== confirmPass) {
        alert("Passwords do not match!");
        return;
      }

      const user = {
        name,
        email,
        role
      };

      localStorage.setItem('user', JSON.stringify(user));

      alert('Registration successful!');

      window.location.href = role === 'farmer'
        ? 'farmer-dashboard.html'
        : 'dashboard.html';
    });
  }
});