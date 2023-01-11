import { Outlet } from "react-router-dom";
import { MainContainer, Main } from "./Layout.styled";
import Navigation from "../Navigation/Navigation";

const Container = () => (
    <MainContainer>
        <Navigation />
        <Main>
            <Outlet />
        </Main>
    </MainContainer>
);

export default Container;