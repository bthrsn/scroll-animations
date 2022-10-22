import "./App.css";
import Section from "./components/Section";

function App() {
  return (
    <>
      <Section header={"Hello, dear!"} text={"This is my website"} />
      <Section
        header={"Buy my product"}
        text={
          "The things you own end up owing you. It's only after you lose everything that you're free to do anything"
        }
      />
      <Section header={"It's really good"} text={null} />
    </>
  );
}

export default App;
