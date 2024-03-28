import styled from "styled-components";
import { Link } from "react-router-dom";

export const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #345678;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  color: white;
`;

export const H1 = styled.h1`
  font-size: 5em;
`;

export const LinkContainers = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
`;

export const StyledLink = styled(Link)`
  color: white;
  font-size: 2em;
  text-decoration: none;
  cursor: pointer;
  transition: 0.2s all;

  &:hover {
    transform: scale(1.2);
  }
`;
