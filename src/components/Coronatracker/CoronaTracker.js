import { Button, TextField } from "@material-ui/core";
import { Alert } from "@material-ui/lab";
import React, { useEffect, useState } from "react";
import API from "../../Api/API";
import "./CoronaTracker.css";

const CoronaTracker = () => {
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState();
  const [newcases,setNewCases] = useState();
  const [newdeath , setNewDeaths] = useState();
  const [newhealing , setNewHealing] = useState()

  useEffect(() => {
    API.get("api/CovidGet")
      .then((res) => {
        if (res.data.length === 0) {
          setMessage("vous avez pas poster une property");
        } else {
          setCards(res.data);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const UpdateInfo = () => {
      const data = {newcases , newdeath , newhealing}
      API.patch("api/CovidUpdate/61082c54a1030c385087b234" , data).then(res => {
            setMessage(res.data.message)
            setTimeout(() => {
                setMessage(false)
              }, 3000);
              API.get("api/CovidGet")
              .then((res) => {
                if (res.data.length === 0) {
                  setMessage("vous avez pas poster une property");
                } else {
                  setCards(res.data);
                }
              })
              .catch((err) => {
                console.log(err);
              });
    })
  }
  return (
    <>
          {message &&( <div className="message-stats-update">
          <Alert variant="filled" severity="success">
                     {message}
            </Alert>
          </div>)}
      <div className="Covid-Form">
        <div className="Cases-Box">
          <span>NewCases</span>
          {cards && cards.map((Cases) =>
            <span> {Cases.newcases} </span>
          )}
        </div>
        <div className="Cases-Box">
          <span>NewDeaths</span>
          {cards && cards.map((Cases) =>
            <span>{Cases.newdeath}</span>
          )}
          
        </div>
        <div className="Cases-Box">
          <span>NewHealing</span>
          {cards && cards.map((Cases) =>
            <span> {Cases.newhealing} </span>
          )}
          
        </div>
        <div className="Cases-Box2">
        <TextField  id="outlined-basic"
             label="NewCases" variant="outlined" 
             value={newcases}
             onChange={(event) => setNewCases(event.target.value)}
        />
        </div>  
        <div className="Cases-Box2">
        <TextField  id="outlined-basic"
             label="NewDeaths" variant="outlined" 
             value={newdeath}
             onChange={(event) => setNewDeaths(event.target.value)}
        />
        </div>
        <div className="Cases-Box2">
        <TextField  id="outlined-basic"
             label="newHealing" variant="outlined" 
             value={newhealing}
             onChange={(event) => setNewHealing(event.target.value)}
        />
        </div>
        <div className="Cases-Box2">
        <Button onClick={UpdateInfo}  variant="outlined" 
            >
                 Update
        </Button>
        </div>
      </div>
    </>
  );
};

export default CoronaTracker;
