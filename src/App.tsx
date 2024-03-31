import Header from "./components/header/header";
import { faPerson } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./index.css";

function App() {
  return (
    <>
      <Header
        title="Accessibility"
        icon={<FontAwesomeIcon icon={faPerson} size="2xl" color="#000000"/>}
      />
      <main className="py-10">
      </main>
    </>
  );
}

export default App;
