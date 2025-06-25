// import data from 'data.json';
// import { Container as MapDiv, Marker, NaverMap, useNavermaps } from 'react-naver-maps';

// const Map = () => {
//   const { lat, lon } = data.mapInfo;
//   const navermaps = useNavermaps();

//   return (
//     <MapDiv
//       style={{
//         width: '100%',
//         height: '300px',
//       }}>
//       <NaverMap
//         defaultCenter={new navermaps.LatLng(lat, lon)}
//         defaultZoom={17}
//         draggable={true}
//         pinchZoom={true}
//         scrollWheel={true}
//         keyboardShortcuts={false}>
//         <Marker defaultPosition={new navermaps.LatLng(lat, lon)} />
//       </NaverMap>
//     </MapDiv>
//   );
// };

// export default Map;

import { useEffect, useRef, useState } from 'react';
import data from 'data.json';

const Map = () => {
  const { lat, lon } = data.mapInfo;
  const mapRef = useRef<HTMLDivElement>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  // 네이버 지도 스크립트 로딩
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://oapi.map.naver.com/openapi/v3/maps.js?ncpKeyId=df1gwjutb8`;
    script.async = true;
    script.onload = () => setIsLoaded(true);
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script); // 컴포넌트 unmount 시 정리
    };
  }, []);

  // 지도 렌더링
  useEffect(() => {
    if (!isLoaded || !window.naver || !mapRef.current) return;
    const map = new window.naver.maps.Map(mapRef.current, {
      center: new window.naver.maps.LatLng(lat, lon),
      zoom: 18,
    });

    // 마커
    new window.naver.maps.Marker({
      position: new window.naver.maps.LatLng(lat, lon),
      map,
    });
  }, [isLoaded]);

  return <div ref={mapRef} style={{ width: '100%', height: '300px' }} />;
};

export default Map;
