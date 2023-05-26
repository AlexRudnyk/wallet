import styled from 'styled-components';

export const Text = styled.p`
  margin-top: 100px;
  margin-bottom: 100px;
  font-family: ${p => p.theme.fonts.textBold};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: ${p => p.theme.lineHeights.text};
`;
