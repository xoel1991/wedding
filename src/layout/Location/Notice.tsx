import styled from '@emotion/styled';
import data from 'data.json';
import { PointTitle, Caption } from '@/components/Text.tsx';

const Address = () => {
  const { noticeInfo } = data;
  return (
    <WayWrapper>
      <PointTitle>{noticeInfo.title}</PointTitle>
      <Caption>{noticeInfo.info1}</Caption>
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
