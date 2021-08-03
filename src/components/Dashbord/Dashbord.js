import React from 'react'
import ClipLoader from "react-spinners/ClipLoader";
import './Dashbord.css'
import Profil from '../assets/Profil.png'
import CallIcon from '@material-ui/icons/Call';
import MyLocationIcon from '@material-ui/icons/MyLocation';
import LocationCityIcon from '@material-ui/icons/LocationCity';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const Dashbord = ({cards  , message , loading}) => {
    
    
    
    
    return (
        <>
            
            {!message ? (
        <div className="Dashbord">
          {loading ? (
            cards.map((Post) => (
              <div key={Post._id} className="Fournisseur-Card">
                <div className="Fournisseur-img-check">
                  <div className="Fournisseur-Profil">
                    <img src={Profil} alt="Profil" />
                  </div>
                  {Post.disponible === "oui" ? (
                    <>
                      <div className="disponibilité-Check"></div>
                    </>
                  ) : (
                    <>
                      <div className="disponibilité-Check2"></div>
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
              <ClipLoader size={150} />
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
    )
}


export default Dashbord
