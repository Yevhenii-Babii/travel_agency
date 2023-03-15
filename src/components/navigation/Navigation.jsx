

import React from 'react';
import { Background, BtnGet, BtnRead, Links, Navigations, TextBig, TextSmall, WrapperBtnFlex, WrapperTextAndBtn } from './navigation.styled';


export function Navigation() {
  return (
    <>
    
    
    <Background>
        <Navigations>
    <p>Explore</p>
      <Links to="/"> Home </Links>
      <Links to="/gallery">Gallery</Links>
      <Links to="/auth">Login</Links>
      <button>Sign up</button>
      </Navigations>
      <WrapperTextAndBtn>
      <TextBig>It’s a Big World
Out There, Go
Explore</TextBig>
      <TextSmall>Conveniently customize proactive web services for leveraged without 
continualliery aggregate fricctionle ou wellies richard.and very 
customize  continually.</TextSmall>
<WrapperBtnFlex>
      <BtnGet>Get Exploration </BtnGet>
      <BtnRead>Read More</BtnRead>
      </WrapperBtnFlex>
      </WrapperTextAndBtn>
      </Background>



    </>
  );
}