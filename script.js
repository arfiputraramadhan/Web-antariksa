document.addEventListener("DOMContentLoaded", () => {
  const nasaApodDiv = document.getElementById("nasa-apod");

  async function fetchApod() {
    const apiKey = "ejnCHW1qcB8ZmUVR92rpRoIyUF8X5cakOrJzoZmN";
    const url = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}`;
    try {
      const response = await fetch(url);
      const data = await response.json();
      nasaApodDiv.innerHTML = `
        <h3 class="text-2xl font-semibold mb-2 gradient-text">${data.title}</h3>
        <img src="${data.url}" alt="NASA APOD" class="w-full rounded mb-4"/>
        <p class="text-sm text-gray-300">${data.date}</p>
        <p class="mt-2 text-base">${data.explanation}</p>
      `;
    } catch {
      nasaApodDiv.innerHTML = `<p class="text-red-500">Gagal memuat gambar NASA.</p>`;
    }
  }

  fetchApod();

  setInterval(() => {
    const star = document.createElement("div");
    star.classList.add("shooting-star");
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 50}%`;
    document.body.appendChild(star);
    setTimeout(() => star.remove(), 2000);
  }, 3000);

  const text = "🌌 Semesta Tak Bertepi";
  let index = 0;
  const target = document.querySelector("header h1");
  target.textContent = "";
  function type() {
    if (index < text.length) {
      target.textContent += text.charAt(index);
      index++;
      setTimeout(type, 80);
    }
  }
  type();

  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute("href"));
      if (target) {
        target.scrollIntoView({ behavior: "smooth" });
      }
    });
  });
});
