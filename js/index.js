function getJSON(url) {
   const xhr = new XMLHttpRequest();
   xhr.open('GET', url);
   xhr.onload = () => {
      if(xhr.status === 200) {
         let data = JSON.parse(xhr.response);
         // Header
         document.querySelector("#projects > div > div.row.align-items-center.no-gutters.mb-4.mb-lg-5 > div.col-xl-4.col-lg-5 > div > h4").innerHTML = `${data.location.name}, ${data.location.region} <img src="${data.current.condition.icon}" alt=""${data.current.condition.text} />`;
         document.querySelector("#projects > div > div.row.align-items-center.no-gutters.mb-4.mb-lg-5 > div.col-xl-4.col-lg-5 > div > div > a.list-group-item.list-group-item-action.active > div > h5").innerHTML = `Now: ${data.current.temp_f}&deg;<sup>f</sup>`;
         document.querySelector("#projects > div > div.row.align-items-center.no-gutters.mb-4.mb-lg-5 > div.col-xl-4.col-lg-5 > div > div > a.list-group-item.list-group-item-action.active > div > small").innerHTML = `Updated: ${data.current.last_updated.substring(data.current.last_updated.length - 5, data.current.last_updated.length)}`;
         document.querySelector("#projects > div > div.row.align-items-center.no-gutters.mb-4.mb-lg-5 > div.col-xl-4.col-lg-5 > div > div > a:nth-child(2) > div > small").innerHTML = `Updated: ${data.current.last_updated.substring(data.current.last_updated.length - 5, data.current.last_updated.length)}`;
         // Card Info
         document.querySelector("#projects > div > div.row.align-items-center.no-gutters.mb-4.mb-lg-5 > div.col-xl-4.col-lg-5 > div > div > a.list-group-item.list-group-item-action.active > p").innerHTML = `Feels Like: ${data.current.feelslike_f}&deg;<sup>f</sup><br />Cloud Percentage: ${data.current.cloud}%<br />UV index: ${data.current.uv}`;
         document.querySelector("#projects > div > div.row.align-items-center.no-gutters.mb-4.mb-lg-5 > div.col-xl-4.col-lg-5 > div > div > a.list-group-item.list-group-item-action.active > small").innerHTML = `It is ${data.current.condition.text} oustide`;
         // Tonight Card Info
         document.querySelector("#projects > div > div.row.align-items-center.no-gutters.mb-4.mb-lg-5 > div.col-xl-4.col-lg-5 > div > div > a:nth-child(2) > div > h5").innerHTML = `Tonight: Coming soon!`;
         return data;
      }
   };
   xhr.send();
}
function getJSON2(url) {
   const xhr1 = new XMLHttpRequest();
   xhr1.open('GET', url);
   xhr1.onload = () => {
      if(xhr1.status === 200) {
         let data = JSON.parse(xhr1.response);
         // Header
         document.querySelector("#projects > div > div.container > div > div.col-xl-4.col-lg-5 > div > h4").innerHTML = `${data.location.name}, ${data.location.region} <img src="${data.current.condition.icon}" alt=""${data.current.condition.text} />`;
         document.querySelector("#projects > div > div.container > div > div.col-xl-4.col-lg-5 > div > div > a.list-group-item.list-group-item-action.active > div > h5").innerHTML = `Now: ${data.current.temp_f}&deg;<sup>f</sup>`;
         document.querySelector("#projects > div > div.container > div > div.col-xl-4.col-lg-5 > div > div > a.list-group-item.list-group-item-action.active > div > small").innerHTML = `Updated: ${data.current.last_updated.substring(data.current.last_updated.length - 5, data.current.last_updated.length)}`;
         document.querySelector("#projects > div > div.container > div > div.col-xl-4.col-lg-5 > div > div > a:nth-child(2) > div > small").innerHTML = `Updated: ${data.current.last_updated.substring(data.current.last_updated.length - 5, data.current.last_updated.length)}`;
         // Card Info
         document.querySelector("#projects > div > div.container > div > div.col-xl-4.col-lg-5 > div > div > a.list-group-item.list-group-item-action.active > p").innerHTML = `Feels Like: ${data.current.feelslike_f}&deg;<sup>f</sup><br />Cloud Percentage: ${data.current.cloud}%<br />UV index: ${data.current.uv}`;
         document.querySelector("#projects > div > div.container > div > div.col-xl-4.col-lg-5 > div > div > a.list-group-item.list-group-item-action.active > small").innerHTML = `It is ${data.current.condition.text} outside`;
         return data;
      }
   };
   xhr1.send();
}

window.onload =  (event) => {
   getJSON(`http://api.weatherapi.com/v1/current.json?key=0ae0f3837e6247aaa94201900202010&q=85305`);
   getJSON2(`http://api.weatherapi.com/v1/current.json?key=0ae0f3837e6247aaa94201900202010&q=86001`);
};
