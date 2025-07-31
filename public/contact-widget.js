(function() {
  'use strict';

  // Widget Configuration
  const config = {
    position: 'bottom-right', // bottom-right, bottom-left, top-right, top-left
    primaryColor: '#7A35C1',
    secondaryColor: '#6B2F9C',
    companyName: 'Your Company',
    welcomeMessage: 'Get in touch with us for your project needs'
  };

  // Create widget styles
  const styles = `
    .contact-widget-button {
      position: fixed;
      z-index: 999999;
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: ${config.primaryColor};
      color: white;
      border: none;
      cursor: pointer;
      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      transition: all 0.3s ease;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
    
    .contact-widget-button:hover {
      transform: scale(1.1);
      background: ${config.secondaryColor};
    }
    
    .contact-widget-modal {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.5);
      display: flex;
      align-items: center;
      justify-content: center;
      z-index: 1000000;
      padding: 20px;
    }
    
    .contact-widget-form {
      background: white;
      border-radius: 16px;
      max-width: 400px;
      width: 100%;
      max-height: 90vh;
      overflow-y: auto;
      box-shadow: 0 20px 40px rgba(0,0,0,0.1);
    }
    
    .contact-widget-header {
      background: linear-gradient(135deg, ${config.primaryColor}, ${config.secondaryColor});
      color: white;
      padding: 24px;
      border-radius: 16px 16px 0 0;
    }
    
    .contact-widget-header h2 {
      margin: 0 0 8px 0;
      font-size: 24px;
      font-weight: bold;
    }
    
    .contact-widget-header p {
      margin: 0;
      opacity: 0.9;
      font-size: 14px;
    }
    
    .contact-widget-close {
      position: absolute;
      top: 20px;
      right: 20px;
      background: none;
      border: none;
      color: white;
      font-size: 24px;
      cursor: pointer;
      padding: 0;
      width: 30px;
      height: 30px;
      display: flex;
      align-items: center;
      justify-content: center;
    }
    
    .contact-widget-body {
      padding: 24px;
    }
    
    .contact-widget-field {
      margin-bottom: 16px;
    }
    
    .contact-widget-label {
      display: block;
      margin-bottom: 8px;
      font-weight: 500;
      color: #374151;
      font-size: 14px;
    }
    
    .contact-widget-input {
      width: 100%;
      padding: 12px;
      border: 1px solid #d1d5db;
      border-radius: 8px;
      font-size: 14px;
      transition: all 0.2s ease;
      box-sizing: border-box;
    }
    
    .contact-widget-input:focus {
      outline: none;
      border-color: ${config.primaryColor};
      box-shadow: 0 0 0 3px rgba(122, 53, 193, 0.1);
    }
    
    .contact-widget-input.error {
      border-color: #ef4444;
    }
    
    .contact-widget-error {
      color: #ef4444;
      font-size: 12px;
      margin-top: 4px;
    }
    
    .contact-widget-submit {
      width: 100%;
      background: ${config.primaryColor};
      color: white;
      border: none;
      padding: 12px 24px;
      border-radius: 8px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
      font-size: 14px;
    }
    
    .contact-widget-submit:hover {
      background: ${config.secondaryColor};
    }
    
    .contact-widget-submit:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
    
    .contact-widget-success {
      text-align: center;
      padding: 40px 24px;
    }
    
    .contact-widget-success-icon {
      width: 64px;
      height: 64px;
      background: #dcfce7;
      color: #16a34a;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 32px;
      margin: 0 auto 16px;
    }
    
    .contact-widget-success h3 {
      margin: 0 0 8px 0;
      color: #1f2937;
      font-size: 20px;
    }
    
    .contact-widget-success p {
      margin: 0;
      color: #6b7280;
      font-size: 14px;
    }
    
    .required {
      color: #ef4444;
    }
  `;

  // Add styles to document
  const styleSheet = document.createElement('style');
  styleSheet.textContent = styles;
  document.head.appendChild(styleSheet);

  // Position classes
  const positions = {
    'bottom-right': { bottom: '20px', right: '20px' },
    'bottom-left': { bottom: '20px', left: '20px' },
    'top-right': { top: '20px', right: '20px' },
    'top-left': { top: '20px', left: '20px' }
  };

  // Create floating button
  const button = document.createElement('button');
  button.className = 'contact-widget-button';
  button.innerHTML = '💬';
  button.style.cssText = Object.entries(positions[config.position])
    .map(([key, value]) => `${key}: ${value}`)
    .join(';');

  // Create modal
  const modal = document.createElement('div');
  modal.className = 'contact-widget-modal';
  modal.style.display = 'none';

  // Form validation
  function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function validatePhone(phone) {
    return /^[6-9]\d{9}$/.test(phone);
  }

  // Create form HTML
  function createFormHTML() {
    return `
      <div class="contact-widget-form">
        <div class="contact-widget-header">
          <button class="contact-widget-close" onclick="closeContactWidget()">×</button>
          <h2>Contact ${config.companyName}</h2>
          <p>${config.welcomeMessage}</p>
        </div>
        <div class="contact-widget-body">
          <form id="contactWidgetForm">
            <div class="contact-widget-field">
              <label class="contact-widget-label">
                Full Name <span class="required">*</span>
              </label>
              <input type="text" class="contact-widget-input" name="fullName" required>
              <div class="contact-widget-error" id="fullNameError"></div>
            </div>
            
            <div class="contact-widget-field">
              <label class="contact-widget-label">
                Email <span class="required">*</span>
              </label>
              <input type="email" class="contact-widget-input" name="email" required>
              <div class="contact-widget-error" id="emailError"></div>
            </div>
            
            <div class="contact-widget-field">
              <label class="contact-widget-label">
                Phone <span class="required">*</span>
              </label>
              <input type="tel" class="contact-widget-input" name="phone" required>
              <div class="contact-widget-error" id="phoneError"></div>
            </div>
            
            <div class="contact-widget-field">
              <label class="contact-widget-label">
                Message <span class="required">*</span>
              </label>
              <textarea class="contact-widget-input" name="message" rows="3" required></textarea>
              <div class="contact-widget-error" id="messageError"></div>
            </div>
            
            <button type="submit" class="contact-widget-submit" id="submitBtn">
              Send Message
            </button>
          </form>
        </div>
      </div>
    `;
  }

  // Create success HTML
  function createSuccessHTML() {
    return `
      <div class="contact-widget-form">
        <div class="contact-widget-success">
          <div class="contact-widget-success-icon">✓</div>
          <h3>Message Sent!</h3>
          <p>Thank you for contacting us. We'll get back to you soon!</p>
        </div>
      </div>
    `;
  }

  // Form validation
  function validateForm(formData) {
    const errors = {};
    
    if (!formData.fullName || formData.fullName.length < 3) {
      errors.fullName = 'Full name must be at least 3 characters';
    }
    
    if (!formData.email || !validateEmail(formData.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!formData.phone || !validatePhone(formData.phone)) {
      errors.phone = 'Phone number must be 10 digits starting with 6-9';
    }
    
    if (!formData.message || formData.message.length < 10) {
      errors.message = 'Message must be at least 10 characters';
    }
    
    return errors;
  }

  // Show errors
  function showErrors(errors) {
    Object.keys(errors).forEach(field => {
      const errorElement = document.getElementById(field + 'Error');
      const inputElement = document.querySelector(`[name="${field}"]`);
      
      if (errorElement) {
        errorElement.textContent = errors[field];
      }
      
      if (inputElement) {
        inputElement.classList.add('error');
      }
    });
  }

  // Clear errors
  function clearErrors() {
    document.querySelectorAll('.contact-widget-error').forEach(el => {
      el.textContent = '';
    });
    
    document.querySelectorAll('.contact-widget-input').forEach(el => {
      el.classList.remove('error');
    });
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault();
    
    clearErrors();
    
    const formData = {
      fullName: event.target.fullName.value.trim(),
      email: event.target.email.value.trim(),
      phone: event.target.phone.value.trim(),
      message: event.target.message.value.trim()
    };
    
    const errors = validateForm(formData);
    
    if (Object.keys(errors).length > 0) {
      showErrors(errors);
      return;
    }
    
    // Show loading state
    const submitBtn = document.getElementById('submitBtn');
    submitBtn.disabled = true;
    submitBtn.textContent = 'Sending...';
    
    // Simulate API call
    setTimeout(() => {
      // Here you would typically send the data to your server
      console.log('Form data:', formData);
      
      // Show success message
      modal.innerHTML = createSuccessHTML();
      
      // Reset form and close after 3 seconds
      setTimeout(() => {
        closeContactWidget();
        event.target.reset();
      }, 3000);
    }, 1000);
  }

  // Open widget
  function openContactWidget() {
    modal.innerHTML = createFormHTML();
    modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
    
    // Add form event listener
    setTimeout(() => {
      const form = document.getElementById('contactWidgetForm');
      if (form) {
        form.addEventListener('submit', handleSubmit);
      }
    }, 100);
  }

  // Close widget
  function closeContactWidget() {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }

  // Add event listeners
  button.addEventListener('click', openContactWidget);
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeContactWidget();
    }
  });

  // Add to global scope for close button
  window.closeContactWidget = closeContactWidget;

  // Add elements to page
  document.body.appendChild(button);
  document.body.appendChild(modal);

  // Add keyboard support
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.style.display === 'flex') {
      closeContactWidget();
    }
  });

})(); 