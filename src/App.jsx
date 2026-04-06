import {Route, Routes} from "react-router-dom";
import Home from "./pages/Home.jsx";
import Overview from "./pages/Overview.jsx";
import Packages from "./pages/Packages.jsx";
import Repositories from "./pages/Repositories.jsx";
import Projects from "./pages/Projects.jsx";

function App() {

  return (
      <>
          <Routes>
              <Route path="/" element={<Home/>}>
                  <Route index element={<Overview/>}/>
                  <Route path="repositories" element={<Repositories/>}/>
                  <Route path="projects" element={<Projects/>}/>
                  <Route path="packages" element={<Packages/>}/>
              </Route>
          </Routes>
      </>
  )
}

export default App
