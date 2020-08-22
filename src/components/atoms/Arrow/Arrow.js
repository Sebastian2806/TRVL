import styled from 'styled-components';
import ArrowLeft from '../../../assets/icons/arrow-left.svg';
import ArrowRight from '../../../assets/icons/arrow-right.svg';

const Arrow = styled.button`
  width: 40px;
  height: 40px;
  border: 2px solid ${({ theme }) => theme.light};
  border-radius: 50%;
  cursor: pointer;
  background: url(${({ direction }) => (direction === 'prev' ? ArrowLeft : ArrowRight)}) no-repeat transparent center;
  background-size: 30%;
  margin-left: ${({ direction }) => (direction === 'prev' ? 0 : '20px')};
`;

export default Arrow;
