import "./RaceSeriesPage.scss"
import Header from "../../Components/Header/Header"
import SeriesCard from "../../Components/SeriesCard/SeriesCard";
import f1image from "../../Assets/formulaonesplash.jpg"
import f2image from "../../Assets/formulatwosplash.webp"
import indycarimage from "../../Assets/indycarspash.jpg"
import nascarimage from "../../Assets/nascarspash.webp"


export default function RaceSeriesPage(){

    return(
        <>  
            <Header active={"series"}/>
            <div className="raceseries__layout">
                <SeriesCard title={"Formula 1"} image={f1image} to={"/raceseries/formulaone"}/>
                <SeriesCard title={"Formula 2"} image={f2image} to={"/raceseries/comingsoon"}/>
                <SeriesCard title={"IndyCar"} image={indycarimage} to={"/raceseries/comingsoon"}/>
                <SeriesCard title={"Nascar"} image={nascarimage} to={"/raceseries/comingsoon"}/>
            </div>
        </>
    )
}