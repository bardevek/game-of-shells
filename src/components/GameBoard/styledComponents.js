import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 500px;
  height: 300px;
  background-color: #d3d3d3;
  margin-bottom: 30px;
  padding: 30px;

  display: flex;
  align-items: center;
`;

export const Circle = styled.div`
  position: absolute;
  top: calc(50% + 35px);
  left: ${props => props.offset};
  height: 20px;
  width: 20px;
  background-color: red;
  border-radius: 50%;
  margin-left: 15px;
  display: ${props => props.display};
`;

export const ShellsRow = styled.div`
  position: relative;
  width: 100%;
  height: 140px;

  display: flex;
`;
