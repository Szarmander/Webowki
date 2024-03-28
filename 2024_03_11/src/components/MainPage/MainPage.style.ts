import styled from "styled-components";
import { styled as muiStyled } from "@mui/material";
import DoubleArrow from "@mui/icons-material/DoubleArrow";

export const Label = styled.label`
  display: flex;
  margin: 10px;
`;

export const Form = styled.div`
  width: 20%;
  padding: 10px;
  height: 100%;
`;

export const MainContainer = styled.div`
  width: 100%;
  display: flex;
  height: 85vh;
`;

export const IconsContainer = styled.div`
  width: 20%;
  padding: 0px 24px 0px 24px;
  height: 100%;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  flex-direction: column;
`;

export const SendButton = muiStyled(DoubleArrow)`
  width: 100%;
  font-size: 10em;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    transform: scale(1.2);
  }
`;

export const TableContainer = styled.div`
  width: 60%;
  padding: 10px;
  height: 100%;
`;
