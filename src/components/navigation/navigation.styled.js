import styled from 'styled-components';
import { Link } from 'react-router-dom';
import img from '../image/BG.jpg'

export const Links = styled(Link)`
  padding: 20px;
  font-size: 20px;
  font-family: 'Poppins';
  text-decoration: none;
  color: inherit;
  &.active {
    color: pink;
  }
`;
export const Navigations = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Background = styled.div`
background-image: url(${img});
display: block;
width: 1920px;
height: 900px;
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
`

export const TextBig = styled.p`
text-align: left;
font-size: 64px;
font-family: 'Poppins';
font-weight: 700;
line-height: 1.2;
color: white;
width: 488px;
display: inline-block;
margin: 0px;
height: 228px;
margin-bottom: 17px;
`

export const TextSmall = styled.p`
font-size: 16px;
font-family: 'Poppins';
font-weight: 400;
line-height: 1.9;
color: white;
text-align: left;
width: 563px;
margin-bottom: 37px;
`
export const BtnGet = styled.button`
display: inline-flex;
align-items: center;
justify-content: center;
cursor: pointer;
width: 160px;
height: 56px;
background-color: #FFC814;
color: black;
font-size: 16px;
font-family: 'Poppins';
font-weight: 600;
line-height: 1.5;
border-radius: 4px;
border: 0px;
`
export const BtnRead = styled.button`
display: flex;
align-items: center;
justify-content: center;
cursor: pointer;
width: 160px;
height: 56px;
background-color: white;
color: black;
font-size: 16px;
font-family: 'Poppins';
font-weight: 600;
line-height: 1.5;
border-radius: 4px;
border: 0px;
`
export const WrapperBtnFlex = styled.div`
display: flex;
gap: 20px;
`

export const WrapperTextAndBtn = styled.div`
margin-left: 300px;
`


