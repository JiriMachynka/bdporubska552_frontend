import React from 'react'
import { Routes, Route } from "react-router-dom";
import Layout from "./Layout"; 
import History from './pages/History'
import Contact from './pages/Contact'
import Documents from './pages/Documents'
import Fotogalery from './pages/Fotogalery'
import Home from './pages/Home'
import Forms from './pages/Forms'
import Admin from './pages/Admin'
import NoPage from './pages/NoPage'
import ManageAnnouncements from "./pages/ManageAnnouncements";
import Predstavenstvo from './pages/Predstavenstvo';
import Sprava from './pages/Sprava';

function App() {
  return (
      <Routes>
        <Route path="/admin" element={<Admin />}>
          <Route path="manage-announcements" element={<ManageAnnouncements />} />
        </Route>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="documenty" element={<Documents />} />
          <Route path="fotogalerie" element={<Fotogalery />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="historie" element={<History />} />
          <Route path='predstavenstvo' element={<Predstavenstvo />} />
          <Route path='sprava' element={<Sprava />} />
          <Route path='formulare' element={<Forms />} />
        </Route> 
          <Route path="*" element={<NoPage />} />
      </Routes>
  )
}

export default App
