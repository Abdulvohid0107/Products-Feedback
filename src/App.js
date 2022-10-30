import "./assets/css/main.css"
import "./assets/css/normalize.css"
import { Container } from "./components/container/container";
import { Intro } from "./components/intro/intro";
import { Wrapper } from "./components/wrapper/wrapper";

function App() {
  return <Container>
    <Wrapper>
      <Intro></Intro>
    </Wrapper>
  </Container>
}

export default App;
