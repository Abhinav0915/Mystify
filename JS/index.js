function redirectToHomepage() {
    // Get the form element
    var form = document.getElementById('login-form');
    
    // Prevent the form from submitting and redirect manually
    form.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Redirect to the homepage
        window.location.href = '/HTML/homepage.html';
    });
}