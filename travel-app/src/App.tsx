import { Header } from "./components/Header"
import { useEffect, useState } from "react"
import { Trip } from "./trip"
import { TravelList } from "./components/TravelList"
import styled, { createGlobalStyle } from "styled-components"

function App() {
  const [tripsData, setTripsData] = useState<Trip[]>([])
  const [error, setError] = useState<Error>()

  useEffect(() => {
    const webSocket = new WebSocket("ws://localhost:4000")
    webSocket.onmessage = msg => {
      setTripsData(JSON.parse(msg.data))
    }
    webSocket.onerror = () => setError(new Error("Websocket error"))
  }, [])

  return (
    <AppContainer>
      <GlobalStyle />
      {error ? (
        <h1>Couldn't load data from server</h1>
      ) : (
        <>
          <Header />
          <TravelList trips={tripsData} />
        </>
      )}
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  text-align: center;
  margin: 10px;
  font-size: 30px;
  @media (max-width: 1600px) {
    font-size: 24px;
  }
  @media (max-width: 1366px) {
    font-size: 20px;
  }
  @media (max-width: 1100px) {
    font-size: 19px;
  }

  @media (max-width: 900px) {
    font-size: 18px;
  }

  @media (max-width: 800px) {
    font-size: 16px;
  }

  @media (max-width: 700px) {
    font-size: 14px;
  }
`

const GlobalStyle = createGlobalStyle`
s {
  font-size: 0.8em;
  @media (max-width: 600px) {
    font-size: 1.2em;
  }
}

p {
  margin: 0px;
  font-weight: 700;
  margin-right: 2px;
  font-size: 0.8em;
  @media (max-width: 600px) {
    font-size: 1.2em;
  }
}

h2 {
  font-size: 1.2em;
  margin: 0px;
  @media (max-width: 1200px) {
    font-size: 1.1em;
  }

  @media (max-width: 600px) {
    font-size: 1.6em;
  }
}
`
