        document.addEventListener('DOMContentLoaded', function() {
            const loginForm = document.getElementById('login-form');
            
            loginForm.addEventListener('submit', function(e) {
                e.preventDefault();
                
                // Collect form data
                const loginData = {
                    username: document.getElementById('username').value,
                    password: document.getElementById('password').value
                };
                
                // In a real application, you would send this data to a server
                console.log('Login Data:', loginData);
                alert('Login successful! Welcome back to The Caravan Chronicle!');
                
                // Reset form
                loginForm.reset();
            });
        });