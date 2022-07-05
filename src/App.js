import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Classes from "./components/Pages/Classes/Classes";
import Gallery from "./components/Pages/Gallery/Gallery";
import Home from "./components/Pages/Home/Home";

import Students from "./components/Students/Students";
import Teachers from "./components/Pages/Teachers/Teachers";
import Footer from "./components/Footer/Footer";
import JoinClass from "./components/JoinClass/JoinClass";
import NotFoundPage from "./components/NotFoundPage/NotFoundPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/classes" element={<Classes />} />
          <Route path="/teachers" element={<Teachers />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/students" element={<Students />} />
          <Route path="/joinClass" element={<JoinClass />} />
          <Route path="*"  element={<NotFoundPage/>}/> 
        </Routes>

        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
