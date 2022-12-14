import './intro.css'
import Header from "../components/header/header"
import MainContent from "../components/mainContent/mainContent.js"
import Footer from "../components/footer/foorter"

export default function Intro (){

    return(
        <main className="mainWrapper">
             <Header/>
             <MainContent/>
             <Footer/>
        </main>
    )
}