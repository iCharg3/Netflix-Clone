import React from "react";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from '../containers/header';
import { SignUpContainer } from "../containers/signup";

export function SignUpPage(){
    return(<>
        <HeaderContainer>
            <SignUpContainer></SignUpContainer>
        </HeaderContainer>
        <FooterContainer></FooterContainer>
        </>
    )
}