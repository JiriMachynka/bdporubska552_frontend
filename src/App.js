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
import FilesManager from './pages/FilesManager';

function App() {
  return (
      <Routes>
        <Route path="/admin" element={<Admin />}>
          <Route path="manage-announcements" element={<ManageAnnouncements />} />
          <Route path="files-manager" element={<FilesManager />} />
        </Route>
        <Route exact path="/" element={<Layout />}>
          <Route index element={<Home page='Domů'/>} />
          <Route path="documenty" element={<Documents page='Dokumenty'/>} />
          <Route path="fotogalerie" element={<Fotogalery page='Fotogalerie'/>} />
          <Route path="kontakt" element={<Contact page='Kontakt'/>} />
          <Route path="historie" element={<History page='Historie'/>} />
          <Route path='predstavenstvo' element={<Predstavenstvo page='Představenstvo'/>} />
          <Route path='sprava' element={<Sprava page='Správa'/>} />
          <Route path='formulare' element={<Forms page='Formuláře'/>} />
        </Route> 
          <Route path="*" element={<NoPage />} />
      </Routes>
  )
}

export default App
