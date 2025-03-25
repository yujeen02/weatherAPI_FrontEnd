import { useState } from "react";
import KakaoMapPage from "./pages/KakaoMapPage";
import Navigation from "./pages/Navigation";

const App = () => {
  // 실시간 입력용
  const [inputAddress, setInputAddress] = useState("");

  // 검색에 사용될 주소
  const [searchAddress, setSearchAddress] = useState("");

  // 검색 버튼
  const [addressTrigger, setAddressTrigger] = useState(false);

  // 날씨 데이터
  const [weatherData, setWeatherData] = useState(null);

  return (
    <>
      <Navigation
        setSearchAddress={setSearchAddress}
        // 주소가 같으면 useEffect는 반응하지 않음.
        // 주소는 안 바뀌었더라도 검색 버튼을 눌렀다는 사실을 알려주기 위함
        setAddressTrigger={() => setAddressTrigger((prev) => !prev)}
        weatherData={weatherData}
        inputAddress={inputAddress}
        setInputAddress={setInputAddress}
      />

      <KakaoMapPage
        address={searchAddress}
        trigger={addressTrigger}
        setWeatherData={setWeatherData}
      />
    </>
  );
};

export default App;
