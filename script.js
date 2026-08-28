const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('.site-nav');

menuButton?.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') === 'true';
  menuButton.setAttribute('aria-expanded', String(!open));
  navigation.classList.toggle('open', !open);
});

navigation?.addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menuButton?.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('open');
  }
});

const frames = [...document.querySelectorAll('.reel-frame')];
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let frameIndex = 0;
let reelTimer;

function showNextFrame() {
  frames[frameIndex]?.classList.remove('active');
  frameIndex = (frameIndex + 1) % frames.length;
  frames[frameIndex]?.classList.add('active');
}

function startReel() {
  clearInterval(reelTimer);
  if (!reducedMotion.matches && !document.hidden && frames.length > 1) {
    reelTimer = setInterval(showNextFrame, 5000);
  }
}

document.addEventListener('visibilitychange', startReel);
reducedMotion.addEventListener?.('change', startReel);
startReel();

const form = document.querySelector('#project-form');
const statusMessage = document.querySelector('.form-status');
const submitButton = form?.querySelector('button[type="submit"]');
const successMessage = document.querySelector('.success-message');

function showFieldError(field, message) {
  const error = document.querySelector(`#${field.id}-error`);
  field.setAttribute('aria-invalid', 'true');
  if (error) {
    error.textContent = message;
    field.setAttribute('aria-describedby', error.id);
  }
}

function clearErrors() {
  form?.querySelectorAll('[aria-invalid="true"]').forEach((field) => field.removeAttribute('aria-invalid'));
  form?.querySelectorAll('.error').forEach((error) => { error.textContent = ''; });
  statusMessage.textContent = '';
}

function validateForm() {
  clearErrors();
  let valid = true;
  const requiredFields = [...form.querySelectorAll('[required]')];
  requiredFields.forEach((field) => {
    if (!field.value.trim()) {
      showFieldError(field, 'Please complete this field.');
      valid = false;
    } else if (field.type === 'email' && !field.validity.valid) {
      showFieldError(field, 'Please enter a valid email address.');
      valid = false;
    }
  });
  if (!valid) form.querySelector('[aria-invalid="true"]')?.focus();
  return valid;
}

form?.addEventListener('submit', async (event) => {
  event.preventDefault();
  if (!validateForm()) return;

  submitButton.disabled = true;
  submitButton.querySelector('span').textContent = 'Sending…';
  statusMessage.textContent = 'Sending your inquiry…';

  try {
    const response = await fetch(form.action, {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' }
    });
    if (!response.ok) throw new Error('Submission failed');
    form.hidden = true;
    successMessage.hidden = false;
    successMessage.focus();
  } catch (error) {
    statusMessage.textContent = 'Your inquiry could not be sent. Please try again, or email hello@onyxcreatrix.com.';
    submitButton.disabled = false;
    submitButton.querySelector('span').textContent = 'Send Inquiry';
  }
});
