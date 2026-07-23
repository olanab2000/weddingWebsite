const form = document.getElementById('rsvpForm');
const status = document.getElementById('rsvpStatus');

if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      status.textContent = 'Please fill in both fields with a valid email.';
      return;
    }

    const button = form.querySelector('button[type="submit"]');
    button.disabled = true;
    status.textContent = 'Sending…';

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(new FormData(form)).toString()
      });

      if (!response.ok) throw new Error(response.status);

      form.reset();
      status.textContent = 'Thank you! We\'ll be in touch with the formal invitation.';
      button.disabled = false;
    } catch (err) {
      status.textContent = 'Something went wrong. Please email us instead.';
      button.disabled = false;
    }
  });
}