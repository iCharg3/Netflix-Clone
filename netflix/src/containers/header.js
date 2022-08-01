import React from "react";
import { useLocation } from "react-router-dom";
import { Header } from "../components";
import * as ROUTES from '../constants/routes';
import logo from '../logo.svg';

export function HeaderContainer({children,...restProps}){
    const location = useLocation();
    //console.log(location);
    return (
        <Header {...restProps}>
            <Header.Frame>
                <Header.Logo to={ROUTES.HOME} alt="Netflix" src={logo}/>
                {!location.pathname.includes("signin") && !location.pathname.includes("browse") && <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>}
            </Header.Frame>
            {children}
        </Header>
    )
}