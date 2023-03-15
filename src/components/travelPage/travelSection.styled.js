import styled from 'styled-components';
import mark from '../image/checkbox-checked.svg'

export const TextBack = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 600;
font-size: 430px;
line-height: 300px;
color: rgba(244, 246, 250, 0.8);
`

export const WrapperTravel = styled.div `
display: flex;
align-items: flex-end;
`

export const ImageAbsolute = styled.img`
position: absolute;
bottom: 0;
right: -110px;
`

export const PositionRelative = styled.div`
position: relative;
margin-right: 249px;
`

export const TextParagraph = styled.h2`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 48px;
width: 479px;
height: 97px;
text-transform: capitalize;
color: #1F3347;
`

export const TextGrey = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #9DA1B4;
`

export const TravelList = styled.ul`
list-style-type: none;
padding: 0px;
font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 14px;
line-height: 24px;
color: #9DA1B4;
margin-bottom: 0px;
margin-top: 29px;
`
export const TravelMark = styled.li`
&::before {
    content: '';
    display: inline-block;
    background-image: url(${mark});
margin-right: 15px;
    width: 12px;
    height: 12px;
    background-size: contain;
  background-repeat: no-repeat;
  font-family: 'Poppins';
font-style: normal;
font-weight: 400;
font-size: 16px;
line-height: 24px;
color: #9DA1B4;

}
`

export const ListAdvantage = styled.ul`
display: flex;
list-style: none;
padding: 0;
gap: 95px;
margin-top: 32px;
margin-bottom: 0px;
`
export const TravelNumber = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 36px;
line-height: 28px;
color: #FFC814;
`
export const TextUnderNumber = styled.p`
font-family: 'Poppins';
font-style: normal;
font-weight: 500;
font-size: 16px;
line-height: 24px;

color: #9DA1B4;
`
export const BtnTravelRead = styled.button`
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
margin-top: 50px;
`
export const WrapperBeach = styled.div`
margin-left: 30px;
`