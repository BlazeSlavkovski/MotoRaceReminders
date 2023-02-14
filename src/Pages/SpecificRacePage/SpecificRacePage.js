import "./SpecificRacePage.scss";
import Header from "../../Components/Header/Header";
import { useState, useEffect } from "react";
import { useParams , useNavigate} from "react-router-dom";
import axios from "axios";
import backButton from "../../Assets/back_arrow_icon.svg"

export default function SpecificRacePage() {
  const [raceData, setRaceData] = useState();
  const [timeRemaining, settimeRemaining] = useState(0);
  const [days, setdays] = useState(0);
  const [hours, sethours] = useState(0);
  const [mins, setmins] = useState(0);
  const [secs, setsecs] = useState(0);
  const [following, setFollowing] = useState(false)

  let nav = useNavigate();
  
  
  let race = useParams();

  async function grabRaceData() {
    try {
      let { data } = await axios.get(`http://localhost:8080/${race.name}`);
      setRaceData(data);

      
      let { data: followingData } = await axios.get(`http://localhost:8080/following/${race.name}`);
      //check to see if the race exists in following data and then set following state to true if that is the case
      if(followingData){
        console.log("found found ofund ofufnd fsdlnams")
        setFollowing(true)
      }
      

    } catch {
      console.log("Error 404");
    }
  }

  useEffect(() => {
    grabRaceData();
  }, []);

  async function unfollowFunction(){
      await axios.put(`http://localhost:8080/following/${race.name}`)
      setFollowing(false);
  }

  useEffect(() => {
    if (timeRemaining < 0) return;
    const intervalId = setInterval(() => {
        settimeRemaining(timeRemaining - 1000);


        setsecs(Math.floor((timeRemaining / 1000) % 60));
        setmins(Math.floor((timeRemaining / 1000 / 60) % 60));
        sethours(Math.floor((timeRemaining / 1000 / 60 / 60) % 24));
        setdays(Math.floor((timeRemaining / 1000 / 60 / 60 / 24)));
    }, 1000);
    return () => clearInterval(intervalId);
}, [timeRemaining]);


  function followFunction(){
    console.log("this is where the post is going to go")
    
    async function postRace(){
      await axios.post(`http://localhost:8080/following`,raceData)
      setFollowing(true)
      
    }
    postRace()
  }

  
  if(raceData && timeRemaining == 0){
    let raceDateArray = raceData.Date.split("/")
    let raceDate = new Date(raceDateArray[2], raceDateArray[0] -1, raceDateArray[1])
    settimeRemaining(raceDate.getTime() - Date.now())
    
  }

  function goBack(){
    nav(-1)
  }
  
  if (!raceData) {
    return <div>Loading...</div>;
  }

  return (
    <div className="specificRace">
      <Header />

      <div className="specificRace__details">
        <div className="specificRace__details__titleButton">
          <div className="back__wrapper">
            <img src={backButton} className="back" onClick={goBack}/>
            <p className="specificRace__details__titleButton__title">
              {raceData.RaceName}
            </p>
          </div>
          
          <button className="specificRace__details__titleButton__button" onClick={following ? unfollowFunction : followFunction}>
            {following ? "UnFollow Race" : "Follow Race"}
          </button>
        </div>

        <div className="tabletDesktopWrap">
          <div className="specificRace__details__containers tabletModifier">
            <div className="specificRace__info__wrapper">
              <p className="specificRace__title">Race Details</p>
              <p className="specificRace__info">
                 <span>{`${days} Days ${hours} hours ${mins}min ${secs}`}</span>
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
                Track Len: <span>{raceData.CircuitLength}</span>
              </p>
              <p className="specificRace__info">
                Lap Rec: <span>{raceData.LapRecord}</span>
              </p>
            </div>
            <div className="specificRace__info__wrapper">
              <p className="specificRace__info">
                Laps: <span>{raceData.NumberLap}</span>
              </p>
              <p className="specificRace__info">
                Distance: <span>{raceData.RaceDistance}</span>
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
              <p className="specificRace__info">FP1</p>
              <p className="specificRace__info">
                <span>
                  {raceData.FirstPractice.Date +
                    " " +
                    raceData.FirstPractice.Time}
                </span>
              </p>
            </div>

            <div className="specificRace__info__wrapper">
              <p className="specificRace__info">FP2</p>
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
                {!raceData.ThirdPractice ? "Sprint" : "FP3"}
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
              <p className="specificRace__info">Quali</p>
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
