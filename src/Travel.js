import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faMapMarkerAlt } from "@fortawesome/fontawesome-free-solid"

function Travel(props){
    
   let marginStyle
    if (props.id != 1){
        marginStyle = 50
    } else{
        marginStyle = 100
    }
    
    
    
    return(
        <section className="travel" style = {{marginTop:`${marginStyle}px`}}>
            <div className="travel-card">
                <div className="travel-image">
                    <img src={`./${props.imageUrl}`}/>
                </div>

                <div className="travel-text">
                    <div className="country-text">
                    <p className="country"><FontAwesomeIcon icon={faMapMarkerAlt} className="red-color"/>  {props.location}</p>
                    <a href={props.googleMapsUrl} className="gray-color">View on Google Maps</a>
                    </div>
                    <h2 className="location">{props.title}</h2>
                    <div className="dates">
                        <p>{props.startDate} - {props.endDate}</p>
                    </div>
                    <div className="aboutlocation">
                        <p>
                            {props.description}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Travel