import { useEffect, useRef, useState } from 'react';
// import { NavermapsProvider } from 'react-naver-maps';
import styled from '@emotion/styled';
import { Heading1 } from '@/components/Text.tsx';
import Wrapper from '@/components/Wrapper.tsx';
import Account from '@/layout/Account/Account.tsx';
import Container from '@/layout/Container.tsx';
import FloatingBar from '@/layout/FloatingBar/FloatingBar.tsx';
import GalleryWrap from '@/layout/Gallery/GalleryWrap.tsx';
// import Guestbook from '@/layout/Guestbook/Guestbook.tsx';
import Invitation from '@/layout/Invitation/Invitation.tsx';
import Location from '@/layout/Location/Location.tsx';
import Main from '@/layout/Main/Main.tsx';

function App() {
  // const ncpClientId = import.meta.env.VITE_APP_NAVERMAPS_CLIENT_ID;
  // const ncpClientId: string = process.env.REACT_APP_API_KEY ? process.env.REACT_APP_API_KEY : '';
  // const ncpClientId = 'xlkmt8gilu';
  const [isVisible, setIsVisible] = useState(false);
  // const galleryRef = useRef(null);
  const locationRef = useRef(null);

  useEffect(() => {
    window.addEventListener('scroll', checkScrollPosition);
    return () => {
      window.removeEventListener('scroll', checkScrollPosition);
    };
  }, []);

  const checkScrollPosition = () => {
    // if (galleryRef.current) {
    //   const { offsetTop } = galleryRef.current;
    //   const scrollPosition = window.scrollY;

    //   if (scrollPosition >= offsetTop) {
    //     setIsVisible(true);
    //   } else {
    //     setIsVisible(false);
    //   }
    // }

    if (locationRef.current) {
      const { offsetTop } = locationRef.current;
      const scrollPosition = window.scrollY;

      if (scrollPosition >= offsetTop) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }
  };

  return (
    // <NavermapsProvider ncpClientId={ncpClientId}>
    <Container>
      <Wrapper>
        <Main />
      </Wrapper>
      <Wrapper>
        <Heading1>{'\uD83D\uDCDD'} 모시는 글</Heading1>
        <Invitation />
      </Wrapper>
      <Wrapper ref={locationRef}>
        <Heading1>{'\uD83D\uDCCD'} 오시는 길</Heading1>
        <Location />
      </Wrapper>
      {/* <Wrapper ref={galleryRef}>
        <Heading1>{'\uD83D\uDCF7'} Gallery</Heading1>
        <GalleryWrap />
      </Wrapper> */}
      <Wrapper>
        <Heading1>{'\uD83D\uDC8C'} 마음 전하실 곳</Heading1>
        <Account />
      </Wrapper>
      {/* <Wrapper>
        <Heading1>{'\uD83D\uDCCD'} 오시는 길</Heading1>
        <Location />
      </Wrapper> */}
      <Wrapper>
        <Heading1>{'\uD83D\uDCF7'} Gallery</Heading1>
        <GalleryWrap />
      </Wrapper>
      <BlankWrapper />
      <FloatingBar isVisible={isVisible} />
    </Container>
    // {/* </NavermapsProvider> */}
  );
}

export default App;

const BlankWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 40px 0px;
`;
