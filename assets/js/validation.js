document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    const feedback = document.getElementById('formFeedback');
    if (!name || !email || !message) {
        feedback.innerHTML = '<p style="color:red;">Please fill all required fields.</p>';
        return;
    }
    if (!email.includes('@')) {
        feedback.innerHTML = '<p style="color:red;">Please enter a valid email.</p>';
        return;
    }
    feedback.innerHTML = '<p style="color:green;">Your message has been sent! We will get back to you soon.</p>';
    this.reset();
});
