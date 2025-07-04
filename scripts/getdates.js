// Get the current year and insert into the span with id="currentyear"
const yearSpan = document.getElementById("currentyear");
yearSpan.textContent = new Date().getFullYear();

// Set the last modified date
document.getElementById("lastModified").textContent = "Last Modified: " + document.lastModified;
