# 🌤 날씨 조회 웹사이트

**원하는 지역의 날씨 정보를 실시간으로 확인할 수 있는 웹 애플리케이션입니다.**  
지도에서 좌표를 직접 클릭하거나, 검색창에 지역명을 입력해 해당 위치의 날씨를 확인할 수 있습니다.

---

## 🚀 주요 기능

### ✅ 초기 메인 화면 (서울시청 기준)

![서울 시청 메인](https://github.com/user-attachments/assets/65c85330-4e27-46ca-bedb-fe4db2184287)

---

### ✅ 네비게이션 바가 열려 있을 때

![네비게이션 열림](https://github.com/user-attachments/assets/34750399-e034-4021-8f25-2bcf423f04bf)

- 장소명을 입력하고 검색하면 날씨 정보를 바로 확인할 수 있습니다.

---

### ✅ 지도 클릭으로 좌표 설정

사용자가 지도 위에서 직접 위치를 클릭하면, 해당 위치의 날씨 정보를 불러옵니다.

![좌표 클릭 1](https://github.com/user-attachments/assets/ae13ea12-f9b6-4ade-93eb-060dbd961e0c)
![좌표 클릭 2](https://github.com/user-attachments/assets/5c1138c3-e5a8-4858-bc78-e348943d9053)

---

### ✅ 네비게이션 바에서 위치 검색

검색창에 지역명을 입력해 날씨 정보를 조회할 수 있습니다.

![입력창 사용](https://github.com/user-attachments/assets/391d07a7-be99-4fac-8731-243bc61705a1)

---

### ✅ 네비게이션 바가 닫힌 상태에서도 날씨 표시

현재 날씨에 따라 해당 아이콘이 강조되어 표시됩니다.

![닫힌 상태](https://github.com/user-attachments/assets/98e1ad7b-27c7-45fd-b254-df22963766f5)

---

## 🛠 기술 스택

- **Frontend**: React, React-Kakao-Maps-SDK, Ant Design
- **지도 API**: Kakao Maps
- **날씨 API**: OpenWeatherMap API
- **기타**: Axios, CSS Modules

---

## 📦 백엔드 레포지토리

이 프로젝트의 백엔드는 NestJS 기반으로 구축되어 있으며,  
**실시간 날씨 데이터 요청 및 DB 저장 기능**을 포함하고 있습니다.

👉 **백엔드 레포지토리**: [weather-server-nest](https://github.com/본인ID/weather-server-nest)

---

## ✨ 기타

📌 이 프로젝트는 **개인 사이드 프로젝트**로 진행되었으며,  
React와 Kakao Maps API를 활용한 **위치 기반 서비스 구현 연습**을 목적으로 하고 있습니다.

