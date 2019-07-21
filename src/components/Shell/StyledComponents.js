import styled, {css, keyframes} from "styled-components";

const showTheBall = keyframes`
  0%{
  top: 50%;
  }

  50%{
    top: 10%;
  }
  
  65%{
  top: 10%;
  }
  
  100%{
  top: 50%;
  }
`;

const onStartAnimation = css`
  animation-name: ${showTheBall};
  animation-duration: 2s;
  animation-timing-function: linear;
  animation-iteration-count: 1;
  animation-direction: initial;
`;

export const ShellItem = styled.div`
  ${props => (props.shouldAnimate ? onStartAnimation : "")};

  position: absolute;
  z-index: ${props => props.zIndex};

  transition-property: transform, top;
  transition-duration: 0.5s;
  transition-timing-function: ease-in-out;
  transform: translateX(${props => props.offset});
  top: 50%;

  height: 0;
  width: 30px;
  border-bottom: 55px solid dodgerblue;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  cursor: pointer;
`;