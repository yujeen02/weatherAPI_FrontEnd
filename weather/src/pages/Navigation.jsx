import { Button, Input } from "antd";
import { useState } from "react";

import "../css/Navigation.css";

import cloud from "../img/cloud.png";
import light from "../img/light.png";
import rainy from "../img/rainy.png";
import snow from "../img/snow.png";
import sun from "../img/sun.png";
import sunCloud from "../img/sunCloud.png";
import sunclouldrain from "../img/suncloudrain.png";
import wind from "../img/wind.png";

// 네비게이션 열렸을 때 날씨에 맞는 이미지
const weatherIconMap = {
  Clear: sun,
  Clouds: sunCloud,
  Drizzle: sunclouldrain,
  Rain: rainy,
  Snow: snow,
  Mist: cloud,
  Smoke: cloud,
  Haze: cloud,
  Dust: cloud,
  Fog: cloud,
  Sand: cloud,
  Ash: cloud,
  Thunderstorm: light,
  Squall: wind,
  Tornado: wind,
};

const Navigation = (props) => {
  // 네비게이션 바의 열림 닫힘 상태
  const [isOpen, setIsOpen] = useState(false);

  const {
    setSearchAddress,
    setAddressTrigger,
    weatherData,
    inputAddress,
    setInputAddress,
  } = props;

  return (
    <div className="wrapper">
      {!isOpen && weatherData && (
        <div className="smallIcon">
          <span>{weatherData.temperature}°C</span>

          <img
            src={sun}
            alt="sun"
            className={
              weatherData.weather_main === "Clear" ? "highlighted" : ""
            }
          />
          <img
            src={sunCloud}
            alt="cloud"
            className={
              weatherData.weather_main === "Clouds" ? "highlighted" : ""
            }
          />
          <img
            src={sunclouldrain}
            alt="cloud"
            className={
              weatherData.weather_main === "Drizzle" ? "highlighted" : ""
            }
          />
          <img
            src={rainy}
            alt="cloud"
            className={weatherData.weather_main === "Rain" ? "highlighted" : ""}
          />
          <img
            src={snow}
            alt="cloud"
            className={weatherData.weather_main === "Snow" ? "highlighted" : ""}
          />
          <img
            src={cloud}
            alt="cloud"
            className={
              ["Mist", "Smoke", "Haze", "Dust", "Fog", "Sand", "Ash"].includes(
                weatherData.weather_main
              )
                ? "highlighted"
                : ""
            }
          />
          <img
            src={light}
            alt="cloud"
            className={
              weatherData.weather_main === "Thunderstorm" ? "highlighted" : ""
            }
          />
          <img
            src={wind}
            alt="cloud"
            className={
              ["Squall", "Tornado"].includes(weatherData.weather_main)
                ? "highlighted"
                : ""
            }
          />
        </div>
      )}

      <div className={`nav-bar ${isOpen ? "open" : "closed"}`}>
        <div className={`nav-content`}>
          {isOpen && (
            <>
              <Input.Search
                className="input-box"
                placeholder="장소 입력"
                value={inputAddress}
                onChange={(e) => setInputAddress(e.target.value)}
                onSearch={() => {
                  setSearchAddress(inputAddress);
                  setAddressTrigger((prev) => !prev);
                }}
                enterButton="검색"
              />
              {weatherData && (
                <div className="weather-box">
                  <h4>🌤 현재 날씨 정보</h4>
                  <div className="weather-icon">
                    <img
                      src={weatherIconMap[weatherData.weather_main]}
                      alt={weatherData.weather_main}
                    />
                  </div>
                  <div className="weather-main">
                    {weatherData.weather_main} ({weatherData.weather_desc})
                  </div>
                  <div className="weather-temp">
                    {weatherData.temperature}°C
                  </div>
                  <div className="weather-sub">
                    <span>💧 습도: {weatherData.humidity}%</span>
                    <span>🌬 풍속: {weatherData.wind_speed} m/s</span>
                  </div>
                </div>
              )}
            </>
          )}
        </div>

        <Button className="btn" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? "◀" : "▶"}
        </Button>
      </div>
    </div>
  );
};

export default Navigation;
