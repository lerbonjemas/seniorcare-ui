/**
 * SeniorCare Prototype UI Controller
 */

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

  // Update navbar pill styling
  document.querySelectorAll('.role-pills button').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('onclick').includes(screenId));
  });

  // Update header text based on screen
  const titles = {
    'screen-login': 'Login Screen',
    'screen-senior': 'Senior Citizen / Caregiver Hub',
    'screen-request': 'Assistance Request Form',
    'screen-staff': 'Barangay Staff Dispatch Console',
    'screen-bhw': 'BHW Mobile Field Task',
    'screen-osca': 'OSCA Analytics Dashboard'
  };

  const statusEl = document.getElementById('user-status-text');
  if (statusEl) {
    statusEl.innerText = 'Viewing: ' + (titles[screenId] || '');
  }

  window.scrollTo(0, 0);
}

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