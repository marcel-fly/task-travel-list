import { render, screen } from "@testing-library/react"
import { Header } from "./Header"

test("renders app", () => {
  render(<Header />)
  const linkElement = screen.getByText(/Recently viewed trips/i)
  expect(linkElement).toBeInTheDocument()
})
