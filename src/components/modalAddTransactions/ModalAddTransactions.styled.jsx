import styled from 'styled-components';

export const Backdrop = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(5px);
  overflow: scroll;
  z-index: 10;
  padding: 20px;
`;

export const ModalWindow = styled.div`
  position: absolute;
  overflow: auto;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-height: 95%;

  width: 540px;
  height: 508px;
  background-color: ${p => p.theme.colors.white};
  border-radius: ${p => p.theme.radii.small};
`;
