import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout"; 
import About from './pages/About'
import Contact from './pages/Contact'
import Documents from './pages/Documents'
import Fotogalery from './pages/Fotogalery'
import Home from './pages/Home'
import History from './pages/History'
import NoPage from './pages/NoPage'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="history" element={<History />} />
          <Route path="documents" element={<Documents />} />
          <Route path="fotogalery" element={<Fotogalery />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
