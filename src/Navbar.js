import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faGlobe } from "@fortawesome/fontawesome-free-solid"

function Navbar(){
    return(
        <nav>
            <div className="nav-items">
                <h3 className="nav-text"><FontAwesomeIcon icon={faGlobe}/> my travel journal.</h3>
            </div>
        </nav>
    )
}

export default Navbar