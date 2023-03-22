import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/fontawesome-free-solid"
function Travel(){
    return(
        <section className="travel">
            <div className="travel-card">
                <div className="travel-image">
                    <img src="./kilimanjaro-photo.jpg"/>
                </div>

                <div className="travel-text">
                    <div className="country-text">
                    <p className="country"><FontAwesomeIcon icon={faMapMarkerAlt} className="red-color"/>  Japan</p>
                    <a href="https://goo.gl/maps/eBZGdRaZVtEBREtg8" className="gray-color">View on Google Maps</a>
                    </div>
                    <h2 className="location">Mount Fuji</h2>
                    <div className="dates">
                        <p>12 Jan, 2021 - 24 Jan, 2021</p>
                    </div>
                    <div className="aboutlocation">
                        <p>
                            Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). 
                            Mount Fuji is the single most popular tourist site in Japan, 
                            for both Japanese and foreign tourists.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Travel