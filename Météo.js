async function getWeather() {
  const city = document.getElementById("cityInput").value;
  const apiKey = "5cc75744536ba5613660758e2e5d7da0"; 
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=fr`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Ville non trouvée");
    const data = await response.json();

    const resultDiv = document.getElementById("weatherResult");
    resultDiv.innerHTML = `
      <h2>${data.name}, ${data.sys.country}</h2>
      <p>${data.weather[0].description}</p>
      <p>🌡 Température : ${data.main.temp}°C</p>
      <p>💧 Humidité : ${data.main.humidity}%</p>
      <p>💨 Vent : ${data.wind.speed} km/h</p>
    `;
  } catch (error) {
    document.getElementById("weatherResult").innerHTML = `<p>❌ ${error.message}</p>`;
  }
}
