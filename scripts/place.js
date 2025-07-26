document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.getElementById("year");
  const lastModifiedSpan = document.getElementById("lastModified");
  const chillSpan = document.getElementById("chill");

  // Footer Info
  yearSpan.textContent = new Date().getFullYear();
  lastModifiedSpan.textContent = document.lastModified;

  // Static Weather Values (°C and km/h)
  const temp = 28;
  const wind = 10;

  function calculateWindChill(tempC, windKmh) {
    return (
      13.12 +
      0.6215 * tempC -
      11.37 * Math.pow(windKmh, 0.16) +
      0.3965 * tempC * Math.pow(windKmh, 0.16)
    ).toFixed(2);
  }

  if (temp <= 10 && wind > 4.8) {
    chillSpan.textContent = `${calculateWindChill(temp, wind)} °C`;
  } else {
    chillSpan.textContent = "N/A";
  }
});
