import Header from "./components/Header"
import Main from "./components/Main"
import Footer from "./components/Footer"

function Layout() {
    return (
        <div className="container mx-auto">
            <Header />
            <Main />
            <Footer />
        </div>
    )
}

export default Layout