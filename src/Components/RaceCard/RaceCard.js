import "./RaceCard.scss"
import { Link } from "react-router-dom"

export default function RaceCard({raceData}){
    console.log(window.location.pathname =="followng")
    return(
        <div className="raceCard"
        style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),url(${raceData.ActionImage})`      
        }}>
            <p className="raceCard__title">{raceData.RaceName}</p>
            <p className="raceCard__location">{raceData.Circuit.Location.Locality +" - " + raceData.Circuit.Location.Country}</p>
            <div className="raceCard__buttonWrapper">
                <div className="raceCard__time">Watch at {raceData.Time} EST</div>
                <Link className="raceCard__button__link" to={window.location.pathname =="/following"?`/following/formulaone/${raceData.Circuit.Location.Locality}` :`/raceseries/formulaone/${raceData.Circuit.Location.Locality}`}><div className="raceCard__button">View</div></Link>
            </div>
        </div>
    )
}