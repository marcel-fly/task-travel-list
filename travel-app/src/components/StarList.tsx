import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons"
import { faStar as regularFaStar } from "@fortawesome/free-regular-svg-icons"
import styled from "styled-components"

interface Props {
  rating: number
}

const Star = styled(FontAwesomeIcon)`
  font-size: 1em;
  color: yellow;
  @media (max-width: 1200px) {
    font-size: 0.8em;
  }
`

const StarWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

export const getStarIconTypes = (rating: number) => {
  const fullStars = Math.round(rating - 0.01)
  const halfStars = rating - fullStars > 0 ? 1 : 0
  const emptyStars = 5 - fullStars - halfStars

  const full = Array(fullStars).fill("full")
  const half = Array(halfStars).fill("half")
  const empty = Array(emptyStars).fill("empty")

  return [...full, ...half, ...empty] as ("full" | "half" | "empty")[]
}

export const StarList = ({ rating }: Props) => {
  const starIcon = {
    full: faStar,
    half: faStarHalfStroke,
    empty: regularFaStar,
  }

  return (
    <StarWrapper>
      {getStarIconTypes(rating).map((star, i) => (
        <Star key={i} icon={starIcon[star]} />
      ))}
      <p>{rating}</p>
    </StarWrapper>
  )
}
