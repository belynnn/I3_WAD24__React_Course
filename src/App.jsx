import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import NavbarComponent from "./Components/Exo00-Navbar/NavbarComponent/NavbarComponent.jsx"
import HomePage from "./Pages/HomePage.jsx"
import AboutPage from "./Pages/AboutPage.jsx"
import ContactPage from "./Pages/ContactPage.jsx"

import DemosPage from "./Pages/DemosPage.jsx"
import Demo1Page from "./Pages/Demos/Demo1Page.jsx"
import Demo2Page from "./Pages/Demos/Demo2Page.jsx"
import Demo3Page from "./Pages/Demos/Demo3Page.jsx"

import ExercicesPage from "./Pages/ExercicesPage.jsx"
import Exercice1Page from "./Pages/Exercices/Exercice1Page.jsx"
import Exercice2Page from "./Pages/Exercices/Exercice2Page.jsx"
import Exercice3Page from "./Pages/Exercices/Exercice3Page.jsx"
import Exercice4Page from "./Pages/Exercices/Exercice4Page.jsx"
import Exercice5Page from "./Pages/Exercices/Exercice5Page.jsx"

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="/"                     element={<HomePage />} />
          <Route path="/demos"                element={<DemosPage />} />
          <Route path="/exercises"            element={<ExercicesPage />} />
          <Route path="/about"                element={<AboutPage />} />
          <Route path="/contact"              element={<ContactPage />} />

          <Route path="/exercises/exercice-1" element={<Exercice1Page />} />
          <Route path="/exercises/exercice-2" element={<Exercice2Page />} />
          <Route path="/exercises/exercice-3" element={<Exercice3Page />} />
          <Route path="/exercises/exercice-4" element={<Exercice4Page />} />
          <Route path="/exercises/exercice-5" element={<Exercice5Page />} />

          <Route path="/demos/demo-1"         element={<Demo1Page />} />
          <Route path="/demos/demo-2"         element={<Demo2Page />} />
          <Route path="/demos/demo-3"         element={<Demo3Page />} />
        </Routes>
      </Router>
    </>
  )
}

export default App