import styled from "styled-components";
import { medium, veryDarkBlue } from "../../GlobalStyles/variables";

const Logo = styled.h1`
  font-size: 28px;
  text-align: center;
  margin-bottom: 0px;
  background-color: ${({ theme }) => theme.mainColor};
`;

const Menu = styled.ul`
  margin: 45px 0px 45px 0px;
  border-radius: 50px;
  background-color: ${veryDarkBlue};
  display: flex;
  justify-content: space-between;
`;

const MenuItem = styled.li`
  padding: 15px 20px 15px 20px;
  font-size: 12px;
  font-weight: ${medium};
  text-transform: capitalize;
  letter-spacing: 1px;
  cursor: pointer;
  background-color: ${({ isActive, theme }) => isActive && theme.mainColor};
  color: ${(prop) => prop.isActive && veryDarkBlue};
  border-radius: ${(prop) => prop.isActive && "50px"};
`;

const SettingIcon = styled.img`
  display: block;
  margin: 0px auto 0px auto;
  cursor: pointer;
  height: 32px;
`;

export { Logo, Menu, MenuItem, SettingIcon };
