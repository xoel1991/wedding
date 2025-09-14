import styled from '@emotion/styled';
import data from 'data.json';
import mainImg from '@/assets/images/mainTitle.JPG';

const Main = () => {
  const { greeting } = data;
  return (
    <div>
      <MainImg src={mainImg} />
      <MainTitle>{greeting.title}</MainTitle>
      <SubTitle>{greeting.eventDetail}</SubTitle>
      <BlankWrapper />
    </div>
  );
};

export default Main;

const MainImg = styled.img`
  border-radius: 200px 200px 0 0;
  width: 90%;
  max-width: 530px;
  padding-top: 30px;
`;

const MainTitle = styled.p`
  font-family: HSSanTokki20-Regular, serif;
  font-size: 2rem;
  color: #2f2120;
  line-height: 120%;
  white-space: pre-line;
`;

const SubTitle = styled.p`
  font-size: 1.1rem;
  color: #2f2120;
  line-height: 140%;
  white-space: pre-line;
  // margin:40px;
`;

const BlankWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 15px 0px;
`;

