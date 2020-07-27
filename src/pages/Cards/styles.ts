import styled from 'styled-components';

export const Card = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 5px;
`;

export const RedCard = styled(Card)`
  background-color: red;
`;

export const BlueCard = styled(Card)`
  background-color: blue;
`;