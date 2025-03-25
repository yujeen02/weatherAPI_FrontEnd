import { Map, MapMarker, useKakaoLoader } from "react-kakao-maps-sdk";
import { useEffect, useState } from "react";
import axios from "axios";

const KakaoMapPage = (props) => {
  const { address, trigger, setWeatherData } = props;

  // 처음 좌표값
  const [markerPos, setMarkerPos] = useState({ lat: 37.5665, lon: 126.978 });

  // 좌표 클릭
  const [clickedPos, setClickedPos] = useState(null);

  const isLoaded = useKakaoLoader({
    appkey: process.env.REACT_APP_KAKAO_MAP_KEY,

    // 주소 검색 기능 라이브러리
    libraries: ["services"],
  });

  // 처음 좌표 날씨 데이터
  useEffect(() => {
    const fetchInitialWeather = async () => {
      try {
        const { lat, lon } = markerPos;

        // 좌표값에 대한 날씨 요청
        const res = await axios.get("http://localhost:5000/weather", {
          params: { lat, lon },
        });
        console.log("초기 위치 날씨 정보:", res.data);
        setWeatherData(res.data);
      } catch (err) {
        console.error("초기 날씨 API 오류:", err);
      }
    };

    fetchInitialWeather();
  }, []);

  // 주소 검색 시 날씨 데이터
  useEffect(() => {
    if (!address) return;

    let attempts = 0;
    const maxAttempts = 10;

    const waitForGeocoder = setInterval(() => {
      // 카카오맵 좌표 변환이 준비될때까지 확인
      attempts++;

      if (
        window.kakao &&
        window.kakao.maps &&
        window.kakao.maps.services &&
        window.kakao.maps.services.Places
      ) {
        clearInterval(waitForGeocoder);

        const places = new window.kakao.maps.services.Places();
        console.log(places);

        places.keywordSearch(address, function (result, status) {
          if (status === window.kakao.maps.services.Status.OK) {
            // 좌표 얻기
            const lat = parseFloat(result[0].y);
            const lon = parseFloat(result[0].x);

            setMarkerPos({ lat, lon });
            setClickedPos({ lat, lon });

            // 날씨 요청
            axios
              .get("http://localhost:5000/weather", { params: { lat, lon } })
              .then((res) => {
                console.log("KakaoMapPage 날씨:", res.data);
                alert("위치가 변경되었습니다");
                setWeatherData(res.data);
              })
              .catch((err) => console.error("날씨 API 오류:", err));
          }
        });
      } else if (attempts >= maxAttempts) {
        clearInterval(waitForGeocoder);
        console.error("Geocoder 로딩 실패");
      }
    }, 300);
  }, [trigger]);

  // 좌표 클릭시
  const handleClick = async (_, mouseEvent) => {
    const lat = mouseEvent.latLng.getLat();
    const lon = mouseEvent.latLng.getLng();

    setMarkerPos({ lat, lon });
    setClickedPos({ lat, lon });

    try {
      const res = await axios.get("http://localhost:5000/weather", {
        params: { lat, lon },
      });
      console.log("날씨 정보:", res.data);
      alert("위치가 변경되었습니다");
      setWeatherData(res.data);
    } catch (err) {
      console.error("날씨 API 오류:", err);
    }
  };

  if (!isLoaded) return <div>지도 불러오는 중</div>;

  return (
    <Map
      center={{ lat: markerPos.lat, lng: markerPos.lon }}
      style={{ width: "100vw", height: "100vh" }}
      level={3}
      onClick={handleClick}
    >
      <MapMarker position={{ lat: markerPos.lat, lng: markerPos.lon }} />
    </Map>
  );
};

export default KakaoMapPage;
