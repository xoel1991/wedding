// import { useEffect, useState } from 'react';
import { useEffect } from 'react';
import styled from '@emotion/styled';
import data from 'data.json';
// import { increment, onValue, ref, update } from 'firebase/database';
// import { realtimeDb } from 'firebase.ts';
import JSConfetti from 'js-confetti';
import Copy from '@/assets/icons/copy.svg?react';
import Heart from '@/assets/icons/heart_plus.svg?react';
import Share from '@/assets/icons/share.svg?react';
import Upward from '@/assets/icons/upward.svg?react';
import Button from '@/components/Button.tsx';
import { MainTextColor } from '@/components/Text.tsx';

interface KakaoSDK {
  init: (key: string) => void;
  isInitialized: () => boolean;
  Share: {
    sendDefault: (options: any) => void;
  };
  Link: {
    sendCustom: (options: any) => void;
  };
}

declare global {
  interface Window {
    Kakao: KakaoSDK;
  }
}

const FloatingBar = ({ isVisible }: { isVisible: boolean }) => {
  const { emojis } = data;

  // TODO: count 기능 사용 원할시 firebase realtime db 연결!
  // const [count, setCount] = useState(0);

  // useEffect(() => {
  // TODO: realtime db 에 likes 객체 추가.
  //   const dbRef = ref(realtimeDb, 'likes');
  //   onValue(dbRef, (snapshot) => {
  //     setCount(Number(snapshot.val()));
  //   });
  // }, []);

  useEffect(() => {
    if (window.Kakao && !window.Kakao.isInitialized()) {
      window.Kakao.init('585295ad1f3ada21c4afd0afa10e8e4e');
      // window.Kakao.isInitialized();
    }
  }, []);

  const shareToKakao = () => {
    // window.Kakao.Link.sendCustom({
    //   templateId: 121829,
    // });
    // window.Kakao.Share.sendDefault({
    //   objectType: 'feed',
    //   content: {
    //     title: '강태희 🖤 김지원 결혼합니다!',
    //     description: '2025년 11월 16일 (일요일) 11:00 \n더컨벤션 송파문정 13층 아모르홀',
    //     imageUrl: `https://wedding-iota-nine.vercel.app/thumbnail.jpg?time=${Date.now()}`,
    //     link: {
    //       webUrl: 'https://wedding-iota-nine.vercel.app',
    //       mobileWebUrl: 'https://wedding-iota-nine.vercel.app',
    //     },
    //   },
    //   buttons: [
    //     {
    //       title: '청첩장 보기',
    //       link: {
    //         webUrl: 'https://wedding-iota-nine.vercel.app',
    //         mobileWebUrl: 'https://wedding-iota-nine.vercel.app',
    //       },
    //     },
    //     {
    //       title: '위치 보기',
    //       link: {
    //         webUrl: 'https://map.naver.com/p/entry/place/1958047921?c=17.00,0,0,0,dh',
    //         mobileWebUrl: 'https://map.naver.com/p/entry/place/1958047921?c=17.00,0,0,0,dh',
    //       },
    //     },
    //   ],
    // });
    window.Kakao.Share.sendDefault({
      objectType: 'location',
      address: '더컨벤션 송파문정점 ',
      addressTitle: '더컨벤션 송파문정 13층 아모르홀',
      content: {
        title: '강태희 ♥ 김지원 결혼합니다!',
        description: '2025년 11월 16일 (일요일) 11:00 \n더컨벤션 송파문정 13층 아모르홀',
        imageUrl: `https://wedding-iota-nine.vercel.app/thumbnail.jpg?time=${Date.now()}`,
        link: {
          webUrl: 'https://wedding-iota-nine.vercel.app',
          mobileWebUrl: 'https://wedding-iota-nine.vercel.app',
        },
      },
      buttonTitle: '청첩장 보기',
    });
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href).then(
      () => {
        alert('주소가 복사되었습니다.😉😉');
      },
      () => {
        alert('주소 복사에 실패했습니다.🥲🥲');
      },
    );
  };

  const handleCount = () => {
    void jsConfetti.addConfetti({ emojis });

    // 버튼 클릭시 likes 수 증가
    // const dbRef = ref(realtimeDb);
    // void update(dbRef, {
    //   likes: increment(1),
    // });
  };

  const jsConfetti = new JSConfetti();
  const handleScroll = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Nav isVisible={isVisible}>
      <Button onClick={handleCount}>
        <Heart fill={MainTextColor} />
        {/*{count || ''}*/}
      </Button>
      <Button onClick={shareToKakao}>
        <Share fill={MainTextColor} />
      </Button>
      <Button onClick={handleCopy}>
        <Copy fill={MainTextColor} />
      </Button>
      <Button onClick={handleScroll}>
        <Upward fill={MainTextColor} />
      </Button>
    </Nav>
  );
};

export default FloatingBar;

const Nav = styled.nav<{ isVisible: boolean }>`
  min-width: 280px;
  position: fixed;
  bottom: 30px;
  left: 0;
  right: 0;
  align-items: center;
  justify-content: center;
  gap: 5px;
  display: ${(props) => (props.isVisible ? 'flex' : 'none')};
`;
