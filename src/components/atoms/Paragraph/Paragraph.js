import styled from 'styled-components';

const Paragraph = styled.p`
  margin: 0;
  padding: 0;
  color: ${({ theme }) => theme.light};
  font-size: ${({ theme, fontSize }) => theme.fonts[fontSize]};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'lowercase')};
`;

export default Paragraph;
