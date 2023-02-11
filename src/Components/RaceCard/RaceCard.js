import "./RaceCard.scss"
import { Link } from "react-router-dom"

export default function RaceCard({raceData}){
    return(
        <div className="raceCard"
        style={{
            backgroundImage: `url(${raceData.ActionImage})`      
        }}>
            <p className="raceCard__title">{raceData.RaceName}</p>
            <p className="raceCard__location">{raceData.Circuit.Location.Locality +" - " + raceData.Circuit.Location.Country}</p>
            <div className="raceCard__buttonWrapper">
                <div className="raceCard__time">Watch at {raceData.Time} EST</div>
                <Link className="raceCard__button__link" to={`/raceseries/formulaone/${raceData.Circuit.Location.Locality}`}><div className="raceCard__button">View</div></Link>
            </div>
        </div>
    )
}