// Mock galaxy coordinates (later: database / API)
let coords = { x: 0, y: 0, z: 0 };

document.getElementById("optBtn").addEventListener("click", () => {
  coords.x += (Math.random() * 10 - 5).toFixed(2);
  coords.y += (Math.random() * 10 - 5).toFixed(2);
  coords.z += (Math.random() * 10 - 5).toFixed(2);

  document.querySelector(".absolute.bottom-3.right-4").innerHTML =
    `X: ${coords.x} LY<br>Y: ${coords.y} LY<br>Z: ${coords.z} LY`;
});
