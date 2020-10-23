const cards = document.querySelectorAll('.javascript');
const today_date = document.querySelector("#page-top > div.d-flex.flex-nowrap.justify-content-around > h1 > span")

function getJSON(url) {
   const xhr = new XMLHttpRequest();
   xhr.open('GET', url);
   xhr.onload = () => {
      if(xhr.status === 200) {
         let data = JSON.parse(xhr.response);
         var weekdays = data.forecast.forecastday;
         console.log(weekdays);
         today_date.innerHTML = `${weekdays[0].date} through ${weekdays[weekdays.length - 1].date}`;
         for (let x = 0; x < data.forecast.forecastday.length; x++) {
            cards[x].children[0].innerHTML = `${weekdays[x].date} <img src="${weekdays[x].day.condition.icon}">`;  // The date
            cards[x].children[1].innerHTML = `<h5 class="card-title">High: <i class="text-right">${weekdays[x].day.maxtemp_f}&deg;<sup>f</sup></i></h5>`; // High
            cards[x].children[1].innerHTML += `<h5 class="card-title">Low: <i class="text-right">${weekdays[x].day.mintemp_f}&deg;<sup>f</sup></i></h5>`; // Low
            if (weekdays[x].day.daily_will_it_rain != 0) {weekdays[x].day.daily_will_it_rain = 'Yes' }else { weekdays[x].day.daily_will_it_rain = 'No'}
            cards[x].children[1].innerHTML += `<h5 class="card-title">Will it rain: <i class="text-right">${weekdays[x].day.daily_will_it_rain}</i></h5>`; // Precipitation
            cards[x].children[1].innerHTML += `<h5 class="card-title">Average Visibility: <i class="text-right">${weekdays[x].day.avgvis_miles}mi</i></h5>`; // Average visibility
            cards[x].children[1].innerHTML += `<h5 class="card-title">Humidity: <i class="text-right">${weekdays[x].day.avghumidity}%</i></h5>`; // Humidity
         }
         return data;
      }
   };
   xhr.send();
}
window.onload =  (event) => {
   getJSON(`http://api.weatherapi.com/v1/forecast.json?key=0ae0f3837e6247aaa94201900202010&q=85305&days=7`)
};
