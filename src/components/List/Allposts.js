import React, { useEffect, useState } from "react";
import "../Dashbord/Dashbord.css";
import Profil from "../assets/Profil.png";
import CallIcon from "@material-ui/icons/Call";
import MyLocationIcon from "@material-ui/icons/MyLocation";
import LocationCityIcon from "@material-ui/icons/LocationCity";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import DeleteForeverIcon from "@material-ui/icons/DeleteForever";
import ClipLoader from "react-spinners/ClipLoader";
import API from "../../Api/API";
import { Search } from "@material-ui/icons";

const Allposts = () => {
  const [cards, setCards] = useState([]);
  const [message, setMessage] = useState();
  const [loading, setLoading] = useState(false);
  const [disponible , setDisponible] = useState('')

  useEffect(() => {
    API.get("api/getData")
      .then((res) => {
        if (res.data.length === 0) {
          setMessage("vous avez pas poster une property");
        } else {
          setCards(res.data);
          setLoading(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

 
  const PostDelete = (_id) => {
    API.delete(`api/Delete/${_id}`).then(ok => {
        API.get("api/getData")
      .then((res) => {
        if (res.data.length === 0) {
          setMessage("vous avez pas poster une property");
        } else {
          setCards(res.data);
          setLoading(true);
        }
      })
      .catch((err) => {
        console.log(err);
      });
    })
  };
  const switchbtn = (_id) => {
      const data = {disponible : 'non'}
      const data2 = {disponible : 'oui'}
      if(disponible == 'oui'){
        setDisponible('non')
        return API.patch(`api/Update/${_id}` , data ).then(ok => {
          API.get("api/getData")
          .then((res) => {
            if (res.data.length === 0) {
              setMessage("vous avez pas poster une property");
            } else {
              setCards(res.data);
              setLoading(true);
            }
          })
        })
        
        
      }else{
          setDisponible('oui')
         return API.patch(`api/Update/${_id}` , data2 ).then(ok => {
          API.get("api/getData")
          .then((res) => {
            if (res.data.length === 0) {
              setMessage("vous avez pas poster une property");
            } else {
              setCards(res.data);
              setLoading(true);
            }
          })
         })
      }
      
  }

  return (
    <>
      {!message ? (
        <div className="Dashbord-list">
          {loading ? (
            cards.map((Post) => (
              <div key={Post._id} className="Fournisseur-Card-List">
                <div
                  onClick={() => {
                    PostDelete(Post._id);
                  }}
                  className="Post-Card-delete-icon"
                >
                  <DeleteForeverIcon cursor="pointer" fontSize="large" />
                </div>
                <div className="Fournisseur-img-check">
                  <div className="Fournisseur-Profil">
                    <img src={Profil} alt="Profil" />
                  </div>
                  {Post.disponible === "oui" ? (
                    <>
                      <div onClick={() => {
                    switchbtn(Post._id);
                  }} className="disponibilité-Check"></div>
                    </>
                  ) : (
                    <>
                      <div onClick={() => {
                    switchbtn(Post._id);
                  }} className="disponibilité-Check2"></div>
                    </>
                  )}
                </div>

                <div className="Fournisseur-Info">
                  <div className="Fournisseur-info-box">
                    <span>Nom: {Post.name}</span>
                  </div>
                  <div className="Fournisseur-info-box">
                    <span className="Info-Icon">
                      {" "}
                      <CallIcon />{" "}
                    </span>
                    <span className="Info-text"> {Post.phone} </span>
                  </div>
                  <div className="Fournisseur-info-box">
                    <span className="Info-Icon">
                      {" "}
                      <MyLocationIcon />{" "}
                    </span>
                    <span className="Info-text"> {Post.wilaya}</span>
                  </div>
                  <div className="Fournisseur-info-box">
                    <span className="Info-Icon">
                      {" "}
                      <LocationCityIcon />{" "}
                    </span>
                    <span className="Info-text"> {Post.commune}</span>
                  </div>
                  <div className="Fournisseur-info-box">
                    <span className="Info-Icon">
                      {" "}
                      <LocationOnIcon />{" "}
                    </span>
                    <span className="Info-text"> {Post.address} </span>
                  </div>
                  <div className="Fournisseur-info-box">
                    <span className="Info-Icon">
                      {" "}
                      <LocalHospitalIcon />{" "}
                    </span>
                    <span className="Info-text"> {Post.type}</span>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <div className="LoadingDashbord">
              <ClipLoader size={100} />
            </div>
          )}
        </div>
      ) : (
        <>
          <div className="message-err-data">
            <span>{message}</span>
          </div>
        </>
      )}
    </>
  );
};

export default Allposts;
