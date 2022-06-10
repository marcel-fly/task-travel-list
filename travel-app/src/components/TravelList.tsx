import styled from "styled-components"
import { Trip } from "../trip"
import { Travel } from "./Travel"

export const TravelListContainer = styled.div`
  max-width: 100vw;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 20px;
  @media (max-width: 1200px) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 10px;
  }
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
  }
`

export const TravelList = ({ trips }: { trips: Trip[] }) => (
  <TravelListContainer>
    {trips.map(tripData => (
      <Travel
        key={tripData.key}
        name={tripData.name}
        numberDays={tripData.numberDays}
        numberCountries={tripData.numberCountries}
        rating={tripData.rating}
        price={tripData.price}
        oldPrice={tripData.oldPrice}
        picture={tripData.picture}
      />
    ))}
  </TravelListContainer>
)
