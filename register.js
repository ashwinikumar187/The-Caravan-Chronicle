        document.addEventListener('DOMContentLoaded', function() {
            const registerForm = document.getElementById('register-form');
            
            registerForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Collect form data
                const formData = {
                    name: document.getElementById('name').value,
                    email: document.getElementById('email').value,
                    role: document.getElementById('role').value,
                    phone: document.getElementById('phone').value,
                    address: document.getElementById('address').value,
                    username: document.getElementById('username').value,
                    password: document.getElementById('password').value
                };
                
                // In a real application, you would send this data to a server
                console.log('Registration Data:', formData);
                alert('Registration submitted successfully! Welcome to The Caravan Chronicle!');
                
                // Reset form
                registerForm.reset();
            });
        });