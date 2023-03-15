
import React from "react"
import { BtnTravelRead, ImageAbsolute, ImageRelative, ListAdvantage, PositionRelative, TextBack, TextGrey, TextParagraph, TextUnderNumber, TravelList, TravelMark, TravelNumber, WrapperBeach, WrapperTravel } from "./travelSection.styled"
import photoGirl from '../image/PhotoGirl.png'
import photoLake from '../image/PhotoLake.jpg' 
import photoBeach from '../image/beach.png'

export const TravelPage = () => {
    const useTag = '<use xlink:href="../image/sprite.svg#icon-checkbox-checked"/>';
    return(
        <>
        <TextBack>TRAVEL</TextBack>
       <WrapperTravel>
<PositionRelative>
  
    
    <img src={photoLake} alt="Lake" />

    <ImageAbsolute src={photoGirl} alt="Girl" />
</PositionRelative>
<div>

        <TextParagraph>World Best Travel Agency Company Since 2008.</TextParagraph>
        <TextGrey>Continually productize compelling quality for packed with  elated
productize compelling quality for packed in  with all elated Them
Setting up to website and creating pages.
</TextGrey>

<TravelList>
    <TravelMark>We providing compe quality for packed with elated different.
</TravelMark>
<TravelMark>We are one of compelling quality for packed with leading.
</TravelMark>
<TravelMark>Learn how compelling quality for packed with  elated grow.</TravelMark>
</TravelList>
<ListAdvantage>
    <li>
        <TravelNumber>20+</TravelNumber>
       <TextUnderNumber>Year</TextUnderNumber>  
       <TextUnderNumber>Experience</TextUnderNumber>
</li>
<li>
        <TravelNumber>250+</TravelNumber>
       <TextUnderNumber>Destination</TextUnderNumber>  
       <TextUnderNumber>Destination</TextUnderNumber>
</li>
<li>
        <TravelNumber>170K+</TravelNumber>
       <TextUnderNumber>Happy  </TextUnderNumber>  
       <TextUnderNumber>Customers</TextUnderNumber>
</li>
</ListAdvantage>
<BtnTravelRead>Read More</BtnTravelRead>
</div>
<WrapperBeach>
    <img src={photoBeach} alt="" />
</WrapperBeach>
</WrapperTravel>
        </>
    )
}