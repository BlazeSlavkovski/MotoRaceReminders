import "./SpecificRacePage.scss";
import Header from "../../Components/Header/Header";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function SpecificRacePage() {
  const [raceData, setRaceData] = useState();
  let race = useParams();

  async function grabRaceData() {
    try {
      let { data } = await axios.get(`http://localhost:8080/${race.name}`);
      setRaceData(data);
    } catch {
      console.log("Error 404");
    }
  }

  useEffect(() => {
    grabRaceData();
  }, []);

  console.log(raceData);
  if (!raceData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="specificRace">
      <Header />

      <div className="specificRace__details">
        <div className="specificRace__details__titleButton">
          <p className="specificRace__details__titleButton__title">
            {raceData.RaceName}
          </p>
          <button className="specificRace__details__titleButton__button">
            Follow Race
          </button>
        </div>

        <div className="tabletDesktopWrap">
          <div className="specificRace__details__containers tabletModifier">
            <div className="specificRace__info__wrapper">
              <p className="specificRace__title">Race Details</p>
              <p className="specificRace__info">
                Race Starts In: <span>{raceData.Time}</span>
              </p>
            </div>
            <div className="specificRace__info__wrapper">
              <p className="specificRace__info">
                Date: <span>{raceData.Date}</span>
              </p>
              <p className="specificRace__info">
                Time: <span>{raceData.Time}</span>
              </p>
            </div>
            <div className="specificRace__info__wrapper">
              <p className="specificRace__info">
                Circuit Length: <span>{raceData.CircuitLength}</span>
              </p>
              <p className="specificRace__info">
                Lap Record: <span>{raceData.LapRecord}</span>
              </p>
            </div>
            <div className="specificRace__info__wrapper">
              <p className="specificRace__info">
                Number of Laps: <span>{raceData.NumberLap}</span>
              </p>
              <p className="specificRace__info">
                Race Distance: <span>{raceData.RaceDistance}</span>
              </p>
            </div>
          </div>

          <div className="specificRace__details__containers tabletModifier">
            <div className="specificRace__info__wrapper">
              <p className="specificRace__title">
                Practice and Qualifying Times
              </p>
              <p className="specificRace__info">Date and Time</p>
            </div>
            <div className="specificRace__info__wrapper">
              <p className="specificRace__info">First Practice</p>
              <p className="specificRace__info">
                <span>
                  {raceData.FirstPractice.Date +
                    " " +
                    raceData.FirstPractice.Time}
                </span>
              </p>
            </div>

            <div className="specificRace__info__wrapper">
              <p className="specificRace__info">Section Practice</p>
              <p className="specificRace__info">
                <span>
                  {raceData.SecondPractice.Date +
                    " " +
                    raceData.SecondPractice.Time}
                </span>
              </p>
            </div>

            <div className="specificRace__info__wrapper">
              <p className="specificRace__info">
                {!raceData.ThirdPractice ? "Sprint" : "Third Practice"}
              </p>
              <p className="specificRace__info">
                <span>
                  {!raceData.ThirdPractice
                    ? raceData.Sprint.Date + " " + raceData.Sprint.Time
                    : raceData.ThirdPractice.Date +
                      " " +
                      raceData.ThirdPractice.Time}
                </span>
              </p>
            </div>

            <div className="specificRace__info__wrapper">
              <p className="specificRace__info">Qualifying:</p>
              <p className="specificRace__info">
                <span>
                  {raceData.Qualifying.Date + " " + raceData.Qualifying.Time}
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="specificRace__details__containers specificRace__details__containers--modifer">
          <p className="specificRace__title">Circuit Layout</p>
          <img className="specificRace__circuit" src={raceData.CircuitImage} />
        </div>
      </div>
    </div>
  );
}
