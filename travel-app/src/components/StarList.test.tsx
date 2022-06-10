import { render } from "@testing-library/react"
import { getStarIconTypes, StarList } from "./StarList"

describe("getStarIconTypes", () => {
  test("returns five fulls stars", () => {
    expect(getStarIconTypes(5)).toEqual([
      "full",
      "full",
      "full",
      "full",
      "full",
    ])
  })

  test("returns stars for 2.5 rating", () => {
    expect(getStarIconTypes(2.5)).toEqual([
      "full",
      "full",
      "half",
      "empty",
      "empty",
    ])
  })

  test("returns stars for 2.51 rating", () => {
    expect(getStarIconTypes(2.51)).toEqual([
      "full",
      "full",
      "full",
      "empty",
      "empty",
    ])
  })

  test("returns stars for 0 rating", () => {
    expect(getStarIconTypes(0)).toEqual([
      "empty",
      "empty",
      "empty",
      "empty",
      "empty",
    ])
  })

  test("returns stars for 1.9 rating", () => {
    expect(getStarIconTypes(1.9)).toEqual([
      "full",
      "full",
      "empty",
      "empty",
      "empty",
    ])
  })

  test("returns stars for 2.1 rating", () => {
    expect(getStarIconTypes(2.1)).toEqual([
      "full",
      "full",
      "half",
      "empty",
      "empty",
    ])
  })
})

test("renders <StarList />", () => {
  render(<StarList rating={5} />)
})
