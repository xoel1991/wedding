import styled from '@emotion/styled';
import data from 'data.json';
import { NoticeText } from '@/components/Text.tsx';

const Address = () => {
  const { noticeInfo } = data;
  return (
    <WayWrapper>
      <NoticeText>{noticeInfo.info1}</NoticeText>
      <NoticeText>{noticeInfo.info2}</NoticeText>
    </WayWrapper>
  );
};

export default Address;

const WayWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 30px 0px;
`;
