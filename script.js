// ADMIN PASSWORD - CHANGE THIS TO YOUR OWN PASSWORD!
        const ADMIN_PASSWORD = "molka123";
        
        // Store certifications (in a real app, this would be a database)
         let certifications = [
            {
                name: "Explore AI for All",
                logo: "https://learn.microsoft.com/en-us/learn/achievements/generic-badge.svg",
                date: "11/1/2025",
                link: "https://learn.microsoft.com/api/achievements/share/en-us/MehdiSfaxi-3016/CYWL36Y9?sharingId=D0462676310CEDCF"
            },
            {
                name: "Describe cloud computing",
                logo: "https://learn.microsoft.com/training/achievements/describe-cloud-compute.svg",
                date: " 11/1/2025",
                link: "https://learn.microsoft.com/api/achievements/share/en-us/MehdiSfaxi-3016/WVA975TN?sharingId=D0462676310CEDCF"
            },
            {
                name: "Describe the benefits of using cloud services",
                logo: "https://learn.microsoft.com/training/achievements/describe-benefits-use-cloud-services.svg",
                date: "11/1/2025",
                link: "https://learn.microsoft.com/api/achievements/share/en-us/MehdiSfaxi-3016/NM7UNY9F?sharingId=D0462676310CEDCF"
            },
            {
                name: "Describe cloud service types",
                logo: "https://learn.microsoft.com/training/achievements/describe-cloud-service-types.svg",
                date: "11/1/2025",
                link: "https://learn.microsoft.com/api/achievements/share/en-us/MehdiSfaxi-3016/Q5D7Q64E?sharingId=D0462676310CEDCF"
            },
            {
                name: "Introduction to Cloud Infrastructure: Describe cloud concepts",
                logo: "https://learn.microsoft.com/training/achievements/microsoft-azure-fundamentals-describe-cloud-concepts.svg",
                date: "11/1/2025",
                link: "https://learn.microsoft.com/api/achievements/share/en-us/MehdiSfaxi-3016/NM7UNPRF?sharingId=D0462676310CEDCF"
            },
            {
                name: "Introduction to generative AI and agents",
                logo: "https://learn.microsoft.com/training/achievements/fundamentals-generative-ai.svg",
                date: "11/1/2025",
                link: "https://learn.microsoft.com/api/achievements/share/en-us/MehdiSfaxi-3016/FQZ82QDX?sharingId=D0462676310CEDCF"
            },
            {
                name: "membership certificate",
                logo: "image/certificat.jpeg",
                date: "2024/2025",
                link: "http://127.0.0.1:5500/image.html"
            },
            {
                name: "Plan and prepare to develop AI solutions on Azure",
                logo: "https://learn.microsoft.com/learn/achievements/generic-badge.svg",
                date: "11/11/2025",
                link: "https://learn.microsoft.com/api/achievements/share/en-us/MehdiSfaxi-3016/B96GGMZD?sharingId=D0462676310CEDCF"
            }
        ];
        
        // Show/hide pages
        function showPage(pageId) {
            document.querySelectorAll('.page').forEach(page => {
                page.classList.remove('active');
            });
            document.getElementById(pageId).classList.add('active');
            
            // Load certifications when showing cert page
            if (pageId === 'certPage') {
                loadCertifications();
            }
        }
        
        // Load and display certifications
        function loadCertifications() {
            const grid = document.getElementById('certificationsGrid');
            grid.innerHTML = '';
            
            certifications.forEach(cert => {
                const card = document.createElement('div');
                card.className = 'cert-card';
                card.innerHTML = `
                    <img src="${cert.logo}" alt="${cert.name}" class="cert-logo">
                    <h2 class="cert-name">${cert.name}</h2>
                    <p class="cert-date">Obtained: ${cert.date}</p>
                    <a href="${cert.link}" target="_blank" class="cert-link">View Certificate</a>
                `;
                grid.appendChild(card);
            });
        }
        
        // Handle Enter key in password field
        function handleKeyPress(event) {
            if (event.key === 'Enter') {
                login();
            }
        }
        
        // Admin login
        function login() {
            const password = document.getElementById('passwordInput').value;
            const errorMsg = document.getElementById('loginError');
            
            if (password === ADMIN_PASSWORD) {
                document.getElementById('loginBox').style.display = 'none';
                document.getElementById('adminPanel').style.display = 'block';
                errorMsg.textContent = '';
            } else {
                errorMsg.textContent = '❌ Incorrect password!';
            }
        }
        
        // Logout
        function logout() {
            document.getElementById('loginBox').style.display = 'block';
            document.getElementById('adminPanel').style.display = 'none';
            document.getElementById('passwordInput').value = '';
        }
        
        // Add new certification
        function addCertification() {
    const name = document.getElementById('certName').value.trim();
    const logo = document.getElementById('certLogo').value.trim();
    const date = document.getElementById('certDate').value.trim();
    const link = document.getElementById('certLink').value.trim();
    
    // Validation
    if (!name || !logo || !date || !link) {
        const messageDiv = document.getElementById('adminMessage');
        messageDiv.innerHTML = '<div class="message error">❌ Please fill in all fields!</div>';
        setTimeout(() => { messageDiv.innerHTML = ''; }, 3000);
        return;
    }
    
    const newCert = { name: name, logo: logo, date: date, link: link };
    
    certifications.push(newCert);
    saveToStorage();
    
    // Show success message
    const messageDiv = document.getElementById('adminMessage');
    messageDiv.innerHTML = '<div class="message success">✅ Certification added and saved successfully!</div>';
    
    // Clear form
    document.getElementById('certName').value = '';
    document.getElementById('certLogo').value = '';
    document.getElementById('certDate').value = '';
    document.getElementById('certLink').value = '';
    
    setTimeout(() => { messageDiv.innerHTML = ''; }, 3000);
}
// Save certifications to localStorage
    function saveToStorage() {
    localStorage.setItem('myCertifications', JSON.stringify(certifications));
    console.log('✅ Certifications saved! Total:', certifications.length);
}

        // Load certifications on page load
        loadCertifications();