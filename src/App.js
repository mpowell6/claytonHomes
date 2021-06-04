import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Homes from "./components/homes/Homes";

function App() {
  return (
    <div className="App">
        <Header />
        <Homes />
        <Footer />
    </div>
  );
}

export default App;
