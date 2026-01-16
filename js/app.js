/* =====================================
   EDMRN HUD CORE
   API READY (EDSM / SPANSH)
   ===================================== */

const AppState = {
  coordinates: { x: 0, y: 0, z: 0 },
  status: "IDLE"
};

const coordsEl = document.getElementById("hudCoords");
const optimizeBtn = document.getElementById("optBtn");

/* ACTION: Optimize Route (API later) */
function optimizeRoute() {
  AppState.status = "COMPUTING";

  // Placeholder until Spansh / EDSM is connected
  setTimeout(() => {
    AppState.coordinates.x += 120.45;
    AppState.coordinates.y -= 42.18;
    AppState.coordinates.z += 310.77;

    AppState.status = "READY";
    updateCoords();
  }, 700);
}

/* UPDATE HUD */
function updateCoords() {
  coordsEl.innerHTML = `
    X: ${AppState.coordinates.x.toFixed(2)} LY<br>
    Y: ${AppState.coordinates.y.toFixed(2)} LY<br>
    Z: ${AppState.coordinates.z.toFixed(2)} LY
  `;
}

/* EVENTS */
optimizeBtn.addEventListener("click", optimizeRoute);
