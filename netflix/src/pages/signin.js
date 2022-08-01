import React from "react";
import { FooterContainer } from "../containers/footer";
import { HeaderContainer } from '../containers/header';
import { FormContainer } from "../containers/form";

export function SignInPage(){
    return(<>
        <HeaderContainer>
            <FormContainer></FormContainer>
        </HeaderContainer>
        <FooterContainer></FooterContainer>
        </>
    )
}