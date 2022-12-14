import './header.css'
import reactLogo from '../../logo.svg'

export default function Header () {

    return(
        <header>
            <nav>
                <img 
                    src={reactLogo} 
                    className="reactLogo" 
                    alt="React Logo" 
                />
            </nav>
        </header>
    )
}