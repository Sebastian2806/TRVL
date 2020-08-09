import styled from 'styled-components';

const Title = styled.h2`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.light};
  font-weight: ${({ theme }) => theme.weight.bold};
  font-size: ${({ theme, fontSize }) => theme.fonts[fontSize] || theme.fonts.l};
`;

export default Title;
