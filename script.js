/**
 * SeniorCare Prototype UI Controller
 */

// Handle switching between UI screens via the new navigation tabs
function switchView(screenId) {
  // Hide all screens
  document.querySelectorAll('.screen').forEach(el => {
    el.classList.remove('active');
  });

  // Activate target screen
  const target = document.getElementById(screenId);
  if (target) {
    target.classList.add('active');
  }

  // Highlight the active navigation link
  document.querySelectorAll('.nav-link').forEach(btn => {
    if (btn.getAttribute('onclick').includes(screenId)) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Accessibility Feature: Toggle Large Text View
function toggleLargeView() {
  document.body.classList.toggle('large-view');
  
  const btn = document.querySelector('.btn-toggle-view');
  if (document.body.classList.contains('large-view')) {
    btn.innerHTML = '🔍 Standard Text';
  } else {
    btn.innerHTML = '🔍 Large Text';
  }
}

// Form and action mock functions
function navigateFromSelect() {
  const selectedRoleScreen = document.getElementById('login-role').value;
  switchView(selectedRoleScreen);
}

function triggerSosAlert() {
  alert('🚨 SOS alert dispatched to Barangay Quick Response and Nearest BHW!');
}

function submitAssistanceRequest() {
  alert('Request submitted to Barangay Staff for verification.');
  switchView('screen-senior');
}

function approveTask(requestId) {
  alert(`Request #${requestId} Approved and Dispatched to BHW.`);
}

function saveFieldReport() {
  alert('Status updated in real-time. Beneficiary notified via SMS/Portal.');
}

function exportReport() {
  alert('Exporting CSV Summary for OSCA LGU Archive.');
}