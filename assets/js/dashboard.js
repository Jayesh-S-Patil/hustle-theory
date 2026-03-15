let user = localStorage.getItem("loggedInUser");

if (user) {
  document.getElementById("welcomeUser").innerText = "Welcome, " + user + " 👋";
}
function logout() {
  localStorage.removeItem("loggedInUser");
  window.location.href = "auth.html";
}

let completedModules = localStorage.getItem("modulesCompleted");

if (!completedModules) {
  completedModules = 0;
} else {
  completedModules = parseInt(completedModules);
}
let progress = completedModules * 20;
document.querySelector(".progress-fill").style.width = progress + "%";
document.getElementById("progressText").innerText =
  "Progress: " + progress + "% Completed";
for (let i = 2; i <= 5; i++) {
  if (i <= completedModules + 1) {
    document.getElementById("status" + i).innerText = "Unlocked ✅";
  }
}
function startModule(moduleNumber) {
  if (moduleNumber <= completedModules + 1) {
    window.location.href = "module" + moduleNumber + ".html";
  } else {
    alert("Complete previous module first!");
  }
}
let badgeContainer = document.getElementById("badgeContainer");
if (completedModules >= 1) {
  badgeContainer.innerHTML +=
    '<div class="dashboard-badge">🏆 Budget Boss</div>';
}

if (completedModules >= 3) {
  badgeContainer.innerHTML +=
    '<div class="dashboard-badge">💰 Smart Investor</div>';
}

if (completedModules == 5) {
  badgeContainer.innerHTML +=
    '<div class="dashboard-badge">🛡 Scam Shield</div>';
}

/* Finance Tracker */

function openTracker() {
  window.location.href = "tracker.html";
}
