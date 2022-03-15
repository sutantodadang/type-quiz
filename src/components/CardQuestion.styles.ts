import styled from 'styled-components';

export const Wrapper = styled.div`
  max-width: 1100px;
  background: turquoise;
  border-radius: 10px;
  border: 2px solid turquoise;
  padding: 20px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.5);
  text-align: center;

  p {
    font-size: 1.5rem;
  }
`;

interface ButtonWrapperProps {
  correct: boolean;
  userClicked: boolean;
}

export const ButtonWrapper = styled.div<ButtonWrapperProps>`
  transition: all 0.3s ease;

  :hover {
    opacity: 0.8;
  }

  button {
    cursor: pointer;
    user-select: none;
    font-size: 1rem;
    width: 100%;
    height: 40px;
    margin: 5px 0;
    background: ${({ correct, userClicked }) =>
      correct
        ? 'linear-gradient(90deg,lightgreen , green)'
        : !correct && userClicked
        ? 'linear-gradient(90deg, purple, red)'
        : 'linear-gradient(90deg, royalblue, blue)'};
    border: 3px solid white;
    box-shadow: 1px 2px 0 rgba(0, 0, 0, 0.1);
    border-radius: 10px;
    color: white;
    text-shadow: 0 1px 0 rgba(0, 0, 0, 0.25);
  }
`;
