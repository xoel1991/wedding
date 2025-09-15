import styled from '@emotion/styled';
import data from 'data.json';
import Notice from './Notice.tsx';
import Address from './Address.tsx';
import Map from './Map.tsx';
import MapButtons from './MapButtons.tsx';
import { Caption, HeadTitle } from '@/components/Text.tsx';

const Location = () => {
  const { mapInfo } = data;
  return (
    <LocationWrapper>
      <HeadTitle>{mapInfo.address1}</HeadTitle>
      <Caption textAlign={'center'}>{mapInfo.address2}</Caption>
      <Map />
      <MapButtons />
      <Notice />
      <Address />
    </LocationWrapper>
  );
};

export default Location;

const LocationWrapper = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  margin: 30px 0px;
`;
