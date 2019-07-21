import styled from "styled-components";

export const Instruction = styled.h4`
  font-weight: normal;
  margin-top: 0;
`;

export const Title = styled.h1`
  color: dodgerblue;
`;

export const SelectAndInputContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: space-evenly;
`;

export const HeaderContainer = styled.div`
  width: 50%;
  max-width: 800px;
  min-height: 210px;
  text-align: justify;
  margin-bottom: 15px;

  display: flex;
  align-items: center;
  flex-direction: column;

  @media (max-width: 970px) {
    width: 70%;
  }

  @media (max-width: 700px) {
    width: 100%;
    margin: 0 30px 15px 30px;
  }
`;

export const LabelMessage = styled.span`
  display: block;
  margin-bottom: 5px;
`;

export const StyledSelect = styled.select`
  cursor: pointer;
  padding: 5px;
  background-color: white;
  border-radius: 5px;
`;

export const Button = styled.button`
  height: 43px;
  background-color: #32cd32;
  border: solid 2px transparent;
  border-radius: 8px;
  color: white;
  padding: 10px 15px;
  text-align: center;
  text-decoration: none;
  font-size: 15px;
  font-weight: bold;
  cursor: pointer;
  letter-spacing: 2px;

  &:hover {
    border: solid 2px #228b22;
    color: #fffff0;
  }
`;
