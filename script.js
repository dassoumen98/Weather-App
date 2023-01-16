const cityName = document.querySelector("#city-name");
const form = document.querySelector("form");
const innerData = document.querySelector(".data");

const loader =document.getElementById("loader")


// img part

const clearSky =document.getElementById("clear-sky");
const clearSkyNight = document.querySelector('#clear_sky_night')
const fewCloudsDay = document.querySelector('#few_clouds_day')
const fewCloudsNight = document.querySelector('#few_clouds_night')
const scatteredCloudsDay = document.querySelector('#scattered_clouds_day')
const scatteredCloudsNight = document.querySelector('#scattered_clouds_night')
const brokenCloudsDay = document.querySelector('#broken_clouds_day')
const brokenCloudsNight = document.querySelector('#broken_clouds_day')
const showerRainDay = document.querySelector('#shower_rain_day')
const showerRainNight = document.querySelector('#shower_rain_night')
const heavyRainDay = document.querySelector('#heavy_rain_day')
const heavyRainNight = document.querySelector('#heavy_rain_night')
const thunderstorm = document.querySelector('#thunderstorm')
const daySnow = document.querySelector('#day_snow')
const nightSnow = document.querySelector('#night_snow')
const mistDay = document.querySelector('#mist_day')
const mistNight = document.querySelector('#mist_night')

function resetOpacity() {
    clearSky.style.opacity = '0'
    clearSkyNight.style.opacity = '0'
    fewCloudsDay.style.opacity = '0'
    fewCloudsNight.style.opacity = '0'
    scatteredCloudsDay.style.opacity = '0'
    scatteredCloudsNight.style.opacity = '0'
    brokenCloudsDay.style.opacity = '0'
    brokenCloudsNight.style.opacity = '0'
    showerRainDay.style.opacity = '0'
    showerRainNight.style.opacity = '0'
    heavyRainDay.style.opacity = '0'
    heavyRainNight.style.opacity = '0'
    thunderstorm.style.opacity = '0'
    daySnow.style.opacity = '0'
    nightSnow.style.opacity = '0'
    mistDay.style.opacity = '0'
    mistNight.style.opacity = '0'
}


// api part
const apiKey = '16dc7f8aecd1998a4995f07c23b65524'


form.addEventListener('submit',(event)=>{
    event.preventDefault()
   

   
    innerData.innerHTML="";


    // console.log(cityName.value);
    

   
        
   
    const fetchWeather = async function(){
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName.value}&appid=${apiKey}`)
        const responseJson = await response.json()
        return responseJson

    }

    const weatherData = fetchWeather()
    weatherData.then((data)=>{
    
        
    let html = ` <div class="city-container">
                <div class="city-name">${data.name},${data.sys.country}</div>
                <div class="weather-condaition">${data.weather[0].main}</div>
            </div>
    
            <div class="temp-container">
                <div class="wather-icon">
                    <img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="sdd" />
                </div>
                    <div class="temp">${(data.main.temp - 273.15).toFixed(2)}°C</div>
                    <div class="minmax">
                        <div class="min">${(data.main.temp_min - 273.15).toFixed(2)}°C</div>
                        <div class="max">${(data.main.temp_max - 273.15).toFixed(2)}°C</div>
                    </div>
                
            </div>`
    
    
                // adding html data to api data
                // data fullfil when data loaded
             innerData.innerHTML = html
            //  after write then blank this input feild
             
             loader.style.display="none"
            
    
             
             switch (data.weather[0].icon) {
                case '01n':
                    resetOpacity()
                    clearSkyNight.style.opacity = '1'
                    break;
                case '01d':
                    resetOpacity()
                    clearSky.style.opacity = '1'
                    break;
                case '03d':
                    resetOpacity()
                    scatteredCloudsDay.style.opacity = '1'
                    break;
                case '03n':
                    resetOpacity()
                    scatteredCloudsNight.style.opacity = '1'
                    break;
                case '02d':
                    resetOpacity()
                    fewCloudsDay.style.opacity = '1'
                    break;
                case '02n':
                    resetOpacity()
                    fewCloudsNight.style.opacity = '1'
                    break;
                case '04d':
                    resetOpacity()
                    brokenCloudsDay.style.opacity = '1'
                    break;
                case '04n':
                    resetOpacity()
                    brokenCloudsNight.style.opacity = '1'
                    break;
                case '09d':
                    resetOpacity()
                    showerRainDay.style.opacity = '1'
                    break;
                case '09n':
                    resetOpacity()
                    showerRainNight.style.opacity = '1'
                    break;
                case '10d':
                    resetOpacity()
                    heavyRainDay.style.opacity = '1'
                    break;
                case '10n':
                    resetOpacity()
                    heavyRainNight.style.opacity = '1'
                    break;
                case '11d':
                    resetOpacity()
                    thunderstorm.style.opacity = '1'
                    break;
                case '11n':
                    resetOpacity()
                    thunderstorm.style.opacity = '1'
                    break;
                case '13d':
                    resetOpacity()
                    daySnow.style.opacity = '1'
                    break;
                case '13n':
                    resetOpacity()
                    nightSnow.style.opacity = '1'
                    break;
                case '50d':
                    resetOpacity()
                    mistDay.style.opacity = '1'
                    break;
                case '50n':
                    resetOpacity()
                    mistNight.style.opacity = '1'
                    break;
                default:
                    break;
            }
        
    }).catch((e)=>{
       
            alert("Error: Some Error Occured! Check your input ")
            
        
    })


    loader.style.display="block"
    cityName.value=""
  


})


   


 


 

   
 
        
        


