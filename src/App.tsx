import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Header from "./components/Header";
import "./styles/global.css";
import "./styles/theme.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Header />
      <Main />
      <Footer />
    </Router>
  );
}

export default App;
