var requestOptions = {
  method: 'GET',
  redirect: 'follow'
};

const res = await fetch("http://apiadvisor.climatempo.com.br/api/v1/weather/locale/7717/current?token=4a0989d2bf87baf1fd585625dec4fab7", requestOptions, {mode:'no-cors'});

const resJson = await res.json();

console.log(resJson)

async function renderWeather(){

  const main = document.querySelector("main");

  main.insertAdjacentHTML('afterbegin', `
    <section>
    <h1>Tempo agora em ${resJson.name}, ${resJson.state}</h1>    
    
    <div>
    <img src="https://www.climatempo.com.br/dist/images/v2/svg/${resJson.data.icon}.svg" alt="iconeTempo">
    <h2>${resJson.data.temperature}°</h2>
    </div>

    <ul>
        <li>${resJson.data.condition}</li>
        <li>Sensação - ${resJson.data.sensation}°</li>
    </ul>
  </section>`)
}

renderWeather();
          

