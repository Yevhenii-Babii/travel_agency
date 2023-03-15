import styled from 'styled-components';
import hotel from '../image/hotel.svg'
import flight from '../image/Flight.svg'
import car from '../image/car.svg'
import ship from '../image/Ship.svg'
export const HotelIcon = styled.p`
&::before{
    content: "";
    display: inline-block;
    background-image: url(${hotel});
    width: 24px;
  height: 24px;
  margin-right: 10px;
  background-size: contain;
} `

export const ShipIcon = styled.p`
&::before{
    content: "";
    display: inline-block;
    background-image: url(${ship});
    width: 24px;
  height: 24px;
  margin-right: 10px;

  background-size: contain;
} `

export const CarIcon = styled.p`
&::before{
    content: "";
    display: inline-block;
    background-image: url(${car});
    width: 24px;
  height: 24px;
  margin-right: 10px;

  background-size: contain;
} `

export const FlightIcon = styled.p`
&::before{
    content: "";
    display: inline-block;
    background-image: url(${flight});
    width: 24px;
  height: 24px;
  margin-right: 10px;
  background-size: contain;
} `

export const Container = styled.div`
display: flex;
gap: 10px;
`

export const ContainerIcon = styled.div`
width: 120px;
height: 45px;
display: flex;
align-items: center;
justify-content: center;
`

export const InputText = styled.input`
width: 170px;
height: 56px;
border-radius: 4px;
`

export const LabelText = styled.label`
display: block;
`
export const FormText = styled.form`
display: flex;
gap: 54px;
`

export const ButtonBook = styled.button`
display: flex;
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

export const ContainerBooking = styled.div`
width: 1340px;
height: 162px;
display: flex;
align-items: center;
justify-content: center;
`

export const Wrapperabsolute = styled.div`
position: absolute;
background-color: white;
top: 100%;
right: 0%;
transform: translate(35%,100%);
box-shadow: 0px 6px 24px #E4E2EE;
`