import { Box, IconButton, styled as muiStyled } from "@mui/material";
import styled from "styled-components";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";

export const StyledIconButton = muiStyled(IconButton)`
  width: 10%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledMenuIcon = muiStyled(MenuIcon)`
  width: 100%;
  font-size: 2em
`;

export const Header = styled.header`
  width: 100%;
  height: 15vh;
  background-color: #a7c7e7;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.div`
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const CurrentlySpan = styled.span`
  font-size: 1.2em;
  font-weight: 700;
`;

export const StyledLink = styled(Link)`
  margin: 20px;
  color: white;
  font-size: 2em;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    transform: scale(1.2);
  }
`;

export const StyledDrawer = muiStyled(Box)`
  background-color: #345678;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const H1 = styled.h1`
  color: white;
  background-color: #294460;
  padding: 20px;
`;
