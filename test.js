const getBtn = document.getElementById('get-btn');

function getJSON(url) {
   const xhr = new XMLHttpRequest();

   xhr.open('GET', url);
   xhr.onload = () => {
      if(xhr.status === 200) {
         let data = JSON.parse(xhr.response);
         console.log(data)
         return data;
      }
   };
   xhr.send();
}

getBtn.addEventListener('click', (event) => {
   getJSON(`http://api.weatherapi.com/v1/current.json?key=0ae0f3837e6247aaa94201900202010&q=85303`)
})