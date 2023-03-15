import React from 'react';
import { ButtonBook, CarIcon, Container, ContainerBooking, ContainerIcon, FlightIcon, FormText, HotelIcon, InputText, LabelText, ShipIcon, Wrapperabsolute } from './TextField.styled';
export const TextField = () => {
  return (
    <>
    <Wrapperabsolute>
      <Container>
        <ContainerIcon>
          <HotelIcon>Hotel</HotelIcon>
        </ContainerIcon>
        <ContainerIcon>
            <FlightIcon> Flight</FlightIcon></ContainerIcon>
        <ContainerIcon>
            <CarIcon>
                Car</CarIcon></ContainerIcon>
        <ContainerIcon>
            <ShipIcon>Ship</ShipIcon>
            </ContainerIcon>
      </Container>
      <ContainerBooking>
        <FormText>
            <div>
            <LabelText >Your Destination</LabelText>
            <InputText type="text" name="" id="" />
            </div>
            <div>
            <LabelText >Check In</LabelText>
            <InputText type="text" name="" id="" />
            </div>
            <div>
            <LabelText >Check Out</LabelText>
            <InputText type="text" name="" id="" />
            </div>
            <div>
            <LabelText >Child</LabelText>
            <InputText type="text" name="" id="" />
            </div>
            <div>
            <LabelText >Adult</LabelText>
            <InputText type="text" name="" id="" />
            </div>
            <div>
        <ButtonBook>Book Now</ButtonBook>
        </div>
        </FormText>
      </ContainerBooking>
      </Wrapperabsolute>
    </>
  );
};
