export function loginpage(){
    // Create blurred overlay with animation
    const overlay = document.createElement("div");
    overlay.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background:  rgba(0, 0, 0, 0.6);
        backdrop-filter: blur(12px);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 9999;
        opacity: 0;
        transition: opacity 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    `;

     // Create modern modal window
    const modal = document.createElement("div");
    modal.style.cssText = `
        width: 1000px;
        max-width: 90%;
        max-height: calc(100vh - 80px);
        padding: 0;
        border-radius: 24px 24px 8px 24px;
        box-shadow: 0 25px 50px rgba(0, 0, 0, 0.6), 
                    0 0 0 1px rgba(255, 255, 255, 0.08);
        color: #ffffff;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Inter', sans-serif;
        position: relative;
        transform: scale(0.85) translateY(40px);
        transition: transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
        overflow: hidden;
        border: 1px solid rgba(255, 255, 255, 0.08);
    `;

    // Header with enhanced gradient
    const header = document.createElement("div");
    header.style.cssText = `
        background: linear-gradient(135deg, #af4c0f 0%, #ff6600 50%, #f55e00ff 100%);
        padding: 28px 32px;
        position: relative;
        overflow: hidden;
    `;

    // Add subtle pattern overlay to header
    const patternOverlay = document.createElement("div");
    patternOverlay.style.cssText = `
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: url('data:image/svg+xml,<svg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"><g fill="none" fill-rule="evenodd"><g fill="%23ffffff" fill-opacity="0.03"><circle cx="7" cy="7" r="1"/><circle cx="27" cy="7" r="1"/><circle cx="47" cy="7" r="1"/><circle cx="7" cy="27" r="1"/><circle cx="27" cy="27" r="1"/><circle cx="47" cy="27" r="1"/><circle cx="7" cy="47" r="1"/><circle cx="27" cy="47" r="1"/><circle cx="47" cy="47" r="1"/></g></g></svg>');
        pointer-events: none;
    `;
    header.appendChild(patternOverlay);

    // Enhanced title with icon
    const titleContainer = document.createElement("div");
    titleContainer.style.cssText = `
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        position: relative;
        z-index: 1;
    `;

    const titleIcon = document.createElement("div");
    titleIcon.innerHTML = `
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
            <path d="m8,12c-3.309,0-6-2.691-6-6S4.691,0,8,0s6,2.691,6,6-2.691,6-6,6Zm11.309-1.991c-2.089-.127-3.932,1.166-4.845,3.049-.643,1.327-.537,2.507-.171,3.565,0,0-.293.376-.293.876,0,1-.022,1.5-.022,1.5h-1c-.552,0-1,.448-1,1v1h-.978c-.552,0-1,.448-1,1v1c0,.552.448,1,1,1h.776c.53,0,1.039-.211,1.414-.586l3.827-3.827c.948.411,2.044.544,3.193.267,1.885-.454,3.373-2.035,3.71-3.945.538-3.055-1.7-5.723-4.611-5.9Zm.691,5.491c-.828,0-1.5-.672-1.5-1.5s.672-1.5,1.5-1.5,1.5.672,1.5,1.5-.672,1.5-1.5,1.5Zm-12,7.5v-1c0-1.343.887-2.482,2.105-2.863.279-.929.998-1.669,1.912-1.979.027-.259.082-.496.15-.707-.102-.457-.14-.908-.146-1.356-1.183-.692-2.554-1.095-4.021-1.095C3.589,14,0,17.589,0,22v1c0,.553.448,1,1,1h7.184c-.112-.314-.184-.648-.184-1Z"/>
        </svg>
    `;
    titleIcon.style.cssText = `
        color: rgba(255, 255, 255, 0.9);
    `;

    const title = document.createElement("h2");
    title.textContent = "Login";
    title.style.cssText = `
        margin: 0;
        font-size: 22px;
        font-weight: 700;
        color: #ffffff;
        text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
        letter-spacing: -0.5px;
    `;

    titleContainer.appendChild(titleIcon);
    titleContainer.appendChild(title);

    // Enhanced close button
    const closeButton = document.createElement("button");
    closeButton.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round">
            <path d="m18 6-12 12M6 6l12 12"/>
        </svg>
    `;
    closeButton.style.cssText = `
        position: absolute;
        top: 50%;
        right: 24px;
        transform: translateY(-50%);
        background: rgba(255, 255, 255, 0.1);
        border: none;
        width: 40px;
        height: 40px;
        border-radius: 12px;
        color: #ffffff;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: all 0.3s ease;
        backdrop-filter: blur(20px);
        z-index: 2;
    `;

    closeButton.addEventListener('mouseenter', () => {
        closeButton.style.background = 'rgba(255, 255, 255, 0.2)';
        closeButton.style.transform = 'translateY(-50%) scale(1.1) rotate(90deg)';
    });

    closeButton.addEventListener('mouseleave', () => {
        closeButton.style.background = 'rgba(255, 255, 255, 0.1)';
        closeButton.style.transform = 'translateY(-50%) scale(1) rotate(0deg)';
    });

    header.appendChild(titleContainer);
    header.appendChild(closeButton);
    modal.appendChild(header);

     // Modal body with enhanced styling
    const body = document.createElement("div");
    body.style.cssText = `
        padding: 32px;
        display: flex;
        flex-direction: column;
        gap: 28px;
        background: linear-gradient(180deg, #fafafa 0%, #f5f5f5 100%);
        overflow-y: auto;
        max-height: calc(100vh - 200px);
    `;

    // Welcome message
    const welcomeMessage = document.createElement("div");
    welcomeMessage.style.cssText = `
        text-align: center;
        color: #4a5568;
        margin-bottom: 8px;
    `;

    const welcomeTitle = document.createElement("h3");
    welcomeTitle.textContent = "Welcome";
    welcomeTitle.style.cssText = `
        margin: 0 0 8px 0;
        font-size: 24px;
        font-weight: 600;
        color: #2d3748;
    `;

    const welcomeSubtitle = document.createElement("p");
    welcomeSubtitle.textContent = "Sign in to your account";
    welcomeSubtitle.style.cssText = `
        margin: 0;
        font-size: 16px;
        color: #718096;
        font-weight: 400;
    `;

    welcomeMessage.appendChild(welcomeTitle);
    welcomeMessage.appendChild(welcomeSubtitle);

    // Create form
    const form = document.createElement("form");
    form.id = "loginForm";
    form.style.cssText = `
        display: flex;
        flex-direction: column;
        gap: 24px;
    `;

    // Username field
    const usernameGroup = document.createElement("div");
    usernameGroup.style.cssText = `
        position: relative;
    `;

    const usernameLabel = document.createElement("label");
    usernameLabel.textContent = "Username";
    usernameLabel.style.cssText = `
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        color: #2d3748;
        font-size: 14px;
        letter-spacing: 0.2px;
    `;

    const usernameInput = document.createElement("input");
    usernameInput.type = "text";
    usernameInput.name = "username";
    usernameInput.id = "username";
    usernameInput.required = true;
    usernameInput.placeholder = "Entre your username";
    usernameInput.style.cssText = `
        width: 100%;
        padding: 16px 20px 16px 50px;
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        font-size: 16px;
        background: #ffffff;
        color: #2d3748;
        transition: all 0.3s ease;
        box-sizing: border-box;
        font-family: inherit;
    `;

    const usernameIcon = document.createElement("div");
    usernameIcon.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
            <circle cx="12" cy="7" r="4"/>
        </svg>
    `;
    usernameIcon.style.cssText = `
        position: absolute;
        left: 16px;
        top: 50%;
        color: #a0aec0;
        pointer-events: none;
        transition: color 0.3s ease;
    `;

    usernameGroup.appendChild(usernameLabel);
    usernameGroup.appendChild(usernameInput);
    usernameGroup.appendChild(usernameIcon);

    // Password field
    const passwordGroup = document.createElement("div");
    passwordGroup.style.cssText = `
        position: relative;
    `;

    const passwordLabel = document.createElement("label");
    passwordLabel.textContent = "password";
    passwordLabel.style.cssText = `
        display: block;
        margin-bottom: 8px;
        font-weight: 500;
        color: #2d3748;
        font-size: 14px;
        letter-spacing: 0.2px;
    `;

    const passwordInput = document.createElement("input");
    passwordInput.type = "password";
    passwordInput.name = "password";
    passwordInput.id = "password";
    passwordInput.required = true;
    passwordInput.placeholder = "Enter your password ";
    passwordInput.style.cssText = `
        width: 100%;
        padding: 16px 50px 16px 50px;
        border: 2px solid #e2e8f0;
        border-radius: 12px;
        font-size: 16px;
        background: #ffffff;
        color: #2d3748;
        transition: all 0.3s ease;
        box-sizing: border-box;
        font-family: inherit;
    `;

    const passwordIcon = document.createElement("div");
    passwordIcon.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <circle cx="12" cy="16" r="1"/>
            <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
    `;
    passwordIcon.style.cssText = `
        position: absolute;
        left: 16px;
        top: 50%;
        color: #a0aec0;
        pointer-events: none;
        transition: color 0.3s ease;
    `;

    // Toggle password visibility button
    const togglePassword = document.createElement("button");
    togglePassword.type = "button";
    togglePassword.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
            <path d="M1 1l22 22"/>
        </svg>
    `;
    togglePassword.style.cssText = `
        position: absolute;
        right: 16px;
        top: 50%;
        background: none;
        border: none;
        color: #a0aec0;
        cursor: pointer;
        transition: color 0.3s ease;
        padding: 4px;
        border-radius: 4px;
    `;

    togglePassword.addEventListener('click', () => {
        const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
        passwordInput.setAttribute('type', type);
        
        if (type === 'text') {
            togglePassword.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                    <circle cx="12" cy="12" r="3"/>
                </svg>
            `;
        } else {
            togglePassword.innerHTML = `
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24"/>
                    <path d="M1 1l22 22"/>
                </svg>
            `;
        }
    });

    passwordGroup.appendChild(passwordLabel);
    passwordGroup.appendChild(passwordInput);
    passwordGroup.appendChild(passwordIcon);
    passwordGroup.appendChild(togglePassword);

    // Remember me and forgot password
    const optionsRow = document.createElement("div");
    optionsRow.style.cssText = `
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        gap: 16px;
    `;

    const rememberContainer = document.createElement("label");
    rememberContainer.style.cssText = `
        display: flex;
        align-items: center;
        gap: 8px;
        cursor: pointer;
        font-size: 14px;
        color: #4a5568;
        user-select: none;
    `;

    const rememberCheckbox = document.createElement("input");
    rememberCheckbox.type = "checkbox";
    rememberCheckbox.name = "remember";
    rememberCheckbox.style.cssText = `
        width: 16px;
        height: 16px;
        accent-color: #ff6600;
        cursor: pointer;
    `;

    const rememberText = document.createElement("span");
    rememberText.textContent = "Remembre me";

    rememberContainer.appendChild(rememberCheckbox);
    rememberContainer.appendChild(rememberText);

    const forgotLink = document.createElement("a");
    forgotLink.href = "#";
    forgotLink.textContent = "Forget password?";
    forgotLink.style.cssText = `
        color: #ff6600;
        text-decoration: none;
        font-size: 14px;
        font-weight: 500;
        transition: color 0.3s ease;
    `;

    forgotLink.addEventListener('mouseenter', () => {
        forgotLink.style.color = '#e55d00';
    });

    forgotLink.addEventListener('mouseleave', () => {
        forgotLink.style.color = '#ff6600';
    });

    optionsRow.appendChild(rememberContainer);
    optionsRow.appendChild(forgotLink);

    // Submit button
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Sign in ";
    submitButton.style.cssText = `
        width: 100%;
        padding: 16px 24px;
        background: linear-gradient(135deg, #ff6600 0%, #e55d00 100%);
        color: #ffffff;
        border: none;
        border-radius: 12px;
        font-size: 16px;
        font-weight: 600;
        cursor: pointer;
        transition: all 0.3s ease;
        position: relative;
        overflow: hidden;
        text-transform: uppercase;
        letter-spacing: 0.5px;
        box-shadow: 0 4px 15px rgba(255, 102, 0, 0.3);
    `;

    submitButton.addEventListener('mouseenter', () => {
        submitButton.style.transform = 'translateY(-2px)';
        submitButton.style.boxShadow = '0 8px 25px rgba(255, 102, 0, 0.4)';
    });

    submitButton.addEventListener('mouseleave', () => {
        submitButton.style.transform = 'translateY(0)';
        submitButton.style.boxShadow = '0 4px 15px rgba(255, 102, 0, 0.3)';
    });

    // Error message container
    const errorMessage = document.createElement("div");
    errorMessage.id = "errorMessage";
    errorMessage.style.cssText = `
        background: linear-gradient(135deg, #fed7d7 0%, #feb2b2 100%);
        color: #c53030;
        padding: 12px 16px;
        border-radius: 8px;
        font-size: 14px;
        font-weight: 500;
        border: 1px solid #fca5a5;
        display: none;
        align-items: center;
        gap: 8px;
    `;

    const errorIcon = document.createElement("div");
    errorIcon.innerHTML = `
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"/>
            <line x1="15" y1="9" x2="9" y2="15"/>
            <line x1="9" y1="9" x2="15" y2="15"/>
        </svg>
    `;

    errorMessage.appendChild(errorIcon);

    // Loading spinner
    const loadingSpinner = document.createElement("div");
    loadingSpinner.id = "loadingSpinner";
    loadingSpinner.innerHTML = `
        <div style="width: 20px; height: 20px; border: 2px solid #ffffff; border-top: 2px solid transparent; border-radius: 50%; animation: spin 1s linear infinite;"></div>
    `;
    loadingSpinner.style.cssText = `
        display: none;
        justify-content: center;
        align-items: center;
        padding: 16px;
    `;

    // Add CSS animation for spinner
    const style = document.createElement("style");
    style.textContent = `
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    `;
    document.head.appendChild(style);

    // Input focus effects
    [usernameInput, passwordInput].forEach(input => {
        input.addEventListener('focus', (e) => {
            const target = e.target ;
            if (target) {
                target.style.borderColor = '#ff6600';
                target.style.boxShadow = '0 0 0 3px rgba(255, 102, 0, 0.1)';
                const parentNode = target.parentNode ;
                if (parentNode) {
                    const icon = parentNode.querySelector('div') ;
                    if (icon) icon.style.color = '#ff6600';
                }
            }
        });

        input.addEventListener('blur', (e) => {
            const target = e.target ;
            if (target) {
                target.style.borderColor = '#e2e8f0';
                target.style.boxShadow = 'none';
                const parentNode = target.parentNode ;
                if (parentNode) {
                    const icon = parentNode.querySelector('div') ;
                    if (icon) icon.style.color = '#a0aec0';
                }
            }
        });
    });

    // Form submission handler
    form.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();
        
        if (!username || !password) {
            showError('Veuillez remplir tous les champs');
            return;
        }

        // Show loading state
        submitButton.disabled = true;
        submitButton.innerHTML = '';
        const spinner = loadingSpinner.cloneNode(true) ;
        submitButton.appendChild(spinner);
        spinner.style.display = 'flex';
        errorMessage.style.display = 'none';

        try {
            const formData = new FormData();
            formData.append('username', username);
            formData.append('password', password);
            formData.append('remember', rememberCheckbox.checked ? '1' : '0');

            const response = await fetch('login.php', {
                method: 'POST',
                body: formData
            });

            const result = await response.json();

            if (result.success) {
                // Success - redirect to dashboard or specified page
                submitButton.style.background = 'linear-gradient(135deg, #38a169 0%, #2f855a 100%)';
                submitButton.innerHTML = `
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        <polyline points="20,6 9,17 4,12"/>
                    </svg>
                    Connexion réussie
                `;
                
                setTimeout(() => {
                    window.location.href = result.redirect || 'dashboard.php';
                }, 1000);
            } else {
                showError(result.message || 'Nom d\'utilisateur ou mot de passe incorrect');
            }
        } catch (error) {
            showError('Erreur de connexion. Veuillez réessayer.');
        } finally {
            const successCheck = document.querySelector('.success');
            if (!successCheck) {
                const spinnerInButton = submitButton.querySelector('#loadingSpinner') ;
                if (spinnerInButton) {
                    spinnerInButton.style.display = 'none';
                }
                submitButton.disabled = false;
                submitButton.innerHTML = 'Se connecter';
            }
        }
    });

    function showError(message) {
        const errorText = document.createElement('span');
        errorText.textContent = message;
        errorMessage.innerHTML = '';
        errorMessage.appendChild(errorIcon.cloneNode(true));
        errorMessage.appendChild(errorText);
        errorMessage.style.display = 'flex';
        
        // Shake animation for error
        errorMessage.style.animation = 'shake 0.5s ease-in-out';
        setTimeout(() => {
            errorMessage.style.animation = '';
        }, 500);
    }

    // Add shake animation CSS
    const shakeStyle = document.createElement("style");
    shakeStyle.textContent = `
        @keyframes shake {
            0%, 20%, 40%, 60%, 80% { transform: translateX(-5px); }
            10%, 30%, 50%, 70%, 90% { transform: translateX(5px); }
            100% { transform: translateX(0); }
        }
    `;
    document.head.appendChild(shakeStyle);

    // Assemble the form
    form.appendChild(usernameGroup);
    form.appendChild(passwordGroup);
    form.appendChild(optionsRow);
    form.appendChild(errorMessage);
    form.appendChild(submitButton);

    // Assemble the body
    body.appendChild(welcomeMessage);
    body.appendChild(form);

    modal.appendChild(body);
    overlay.appendChild(modal);

    // Close functionality
    function closeModal() {
        overlay.style.opacity = '0';
        modal.style.transform = 'scale(0.85) translateY(40px)';
        setTimeout(() => {
            document.body.removeChild(overlay);
        }, 400);
    }

    closeButton.addEventListener('click', closeModal);
    
    overlay.addEventListener('click', (e) => {
        const target = e.target ;
        if (target === overlay) {
            closeModal();
        }
    });

    // ESC key to close
    const escHandler = (e) => {
        if (e.key === 'Escape') {
            closeModal();
            document.removeEventListener('keydown', escHandler);
        }
    };
    
    document.addEventListener('keydown', escHandler);

    // Add to DOM and animate in
    document.body.appendChild(overlay);
    
    // Trigger animations
    requestAnimationFrame(() => {
        overlay.style.opacity = '1';
        modal.style.transform = 'scale(1) translateY(0)';
    });

    // Focus first input
    setTimeout(() => {
        usernameInput.focus();
    }, 500);
}