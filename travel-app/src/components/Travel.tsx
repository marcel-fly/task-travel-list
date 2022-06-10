import { StarList } from "./StarList"
import styled from "styled-components"

interface travelProperties {
  key: number
  name: string
  numberDays: number
  numberCountries: number
  rating: number
  price: string
  oldPrice: string
  picture: string
}

export const Travel: React.FC<travelProperties> = ({
  name,
  numberDays,
  numberCountries,
  rating,
  price,
  oldPrice,
  picture,
}) => {
  return (
    <TravelWrapper>
      <TravelImage src={picture} alt="travel_picture" />
      <TravelDescriptionWrapper>
        <TravelDataWrapper>
          <TravelGreyDataP className="">{`Countr${
            numberCountries === 1 ? "y" : "ies"
          }`}</TravelGreyDataP>
          <TravelGreyDataP>{`${numberDays} Days`}</TravelGreyDataP>
        </TravelDataWrapper>
        <TravelTitleWrapper>
          <h2>{name}</h2>
        </TravelTitleWrapper>
        <TravelDataWrapper>
          <StarList rating={rating} />
        </TravelDataWrapper>
        <TravelDataWrapper>
          <p>{`From ${price} `}</p>
          <TravelGreyDataP>•</TravelGreyDataP>
          <TravelGreyDataS>{` From ${oldPrice}`}</TravelGreyDataS>
        </TravelDataWrapper>
      </TravelDescriptionWrapper>
    </TravelWrapper>
  )
}

const TravelWrapper = styled.div`
  border: 1px solid grey;
  box-sizing: content-box;
  height: 32vw;
  @media (max-width: 1200px) {
    height: 44vw;
  }
  @media (max-width: 600px) {
    height: 98vw;
  }
`
const TravelImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 70%;
`
const TravelDescriptionWrapper = styled.div`
  height: 30%;
  margin-left: 10px;
  overflow: hidden;
`
const TravelDataWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 20%;
`
const TravelGreyDataP = styled.p`
  color: gray;
`
const TravelTitleWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 35%;
`
const TravelGreyDataS = styled.s`
  color: gray;
`
