import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
    width: 100vw;
    border-color: #292a37;
`;

export const Nav = styled.nav`
    display: flex;
    justify-content: center;
    border-radius: 5px;
`;

export const Link = styled(NavLink)`
    display: inline-block;
    margin-left: 15px;
    text-decoration: none;
    padding: 12px;
    font-weight: 500;
    font-size: 18px;
    color: #ffffff;

    &.active {
        color: #ff6b01;
    }
`;