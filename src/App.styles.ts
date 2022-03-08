import styled from "styled-components";
import IconButton from "@mui/material/IconButton";

export const Wrapper = styled.div`
  margin: 70px;
`;

export const StyledButton = styled(IconButton)`
  right: 20px;
  top: 10px;
  position: fixed;
  z-index: 1;
`;

export const Navbar = styled.div`
  width: 100%;
  position: sticky;
  top: 0;
  left: 0;
  right: 0;

  background: lightblue;
  height: 50px;
  position: fixed;
  z-index: -1;
`;
