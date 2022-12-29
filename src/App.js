import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Layout from "./components/Layout/Layout";
import Circles from "./components/Circles";
import Parallax from "./components/Parallax/Parallax";
import DrawSVG from "./components/DrawSVG";
import Scroll from "./components/Scroll";
import Text from "./components/Text";
import FaceOne from "./assets/images/faceOne.png";
import LandscapeOne from "./assets/images/landscapeOne.png";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="circles" element={<Circles />} />
          <Route path="parallax" element={<Parallax />} />
          <Route path="drawsvg" element={<DrawSVG />} />
          <Route
            path="scroll"
            element={
              <Scroll
                face={FaceOne}
                landscape={LandscapeOne}
                name={"Christan Guard"}
                Job={"Founder"}
                sentenceOne={"We only launch"}
                sentenceTwo={"what we love"}
                crossreveal={"xPercent"}
              />
            }
          />
          <Route path="text" element={<Text   title={"Lorem Ipsum"}
        text={
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
        }/>} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
