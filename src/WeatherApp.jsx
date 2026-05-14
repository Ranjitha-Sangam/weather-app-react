
// import SearchBox from "./SearchBox";
// import InfoBox from "./InfoBox";
// import { useState } from "react";

// export default function WeatherApp(){
//     const [weatherInfo,setWeatherInfo] = useState({
//         city:"Delhi",
//         feelslike:24.84,
//         temp:25.05,
//         tempMin:25.05,
//         tempMax:25.05,
//         humidity:47,
//         weather:"haze",
//     });

//     let updateInfo=(newInfo)=>{
//         setWeatherInfo(newInfo);
//     }

//     return (
//         <div style={{textAlign:"center"}}>
//             <h2>Weather app by Ranjitha</h2>
//             <SearchBox updateInfo={updateInfo}/>
//             <InfoBox info={weatherInfo}/>
//         </div>
//     )

// }

import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import { useState } from "react";
import "./App.css";

export default function WeatherApp() {
  const [weatherInfo, setWeatherInfo] = useState({
    city: "Delhi",
    feelsLike: 24.84,
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    humidity: 47,
    weather: "haze",
  });

  let updateInfo = (newInfo) => {
    setWeatherInfo(newInfo);
  };

  return (
    <div className="weather-container">
      <h1>🌤 Weather App</h1>
      <p className="subtitle">Created by Ranjitha</p>

      <SearchBox updateInfo={updateInfo} />

      <InfoBox info={weatherInfo} />
    </div>
  );
}