//import { Outlet } from "react-router-dom"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Main from "./components/Main"
import Footer from "./components/Footer"

function Layout() {
    return (
        <div className="container mx-auto">
            <Header />
            <Navbar />
            <Main />
            <Footer />
        </div>
    )
}

export default Layout