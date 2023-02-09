import "./SeriesCard.scss"
import {Link} from "react-router-dom"
export default function SeriesCard({title, image, to}){
    return(
        <div className="seriescard"
        style={{
            backgroundImage: `url(${image})` 
        }}>
            <p className="seriescard__title">{title}</p>
            <Link className="seriescard__link" to={to}><div className="seriescard__link__button">View Series</div></Link>
        </div>
    )
}