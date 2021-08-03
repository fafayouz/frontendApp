import React, { useEffect, useState } from 'react';
import API from '../Api/API';
import Dashbord from '../components/Dashbord/Dashbord';
import Search from '../components/SearchNavbar/Search';
import './Home.css';


const Home = () => {
	const [Wilaya, setWilaya] = useState()
    const [cards, setCards] = useState([]);
    const [message, setMessage] = useState();
    const [loading, setLoading] = useState(false);

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




    const SearchWilaya = (event) => {
        setWilaya(event.target.value)

    }
    const  Searching =  async () => {
        if(Wilaya === '') {
            return API.get("api/getData")
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
        
             
        }else {
           if(Wilaya) {
                return API.get("api/getData")
                .then((res) => {
                  if (res.data.length === 0) {
                    setMessage("vous avez pas poster une property");
                  } else {
                    setLoading(true);
                    setCards(res.data.filter(x => x.wilaya === Wilaya));
                  }
                })
                .catch((err) => {
                  console.log(err);
                });
           }
          
        }
         
    }

    
    return (
        <>
            <div className="Page-Home">
                <div className="Home-Title-Box">

                </div>
                <div className="Dashbord-Home">
                    <Search WilayaData={Wilaya}
                             fafayouyz={SearchWilaya}
                             Searchbtn={Searching}
                    />
                    <Dashbord
                        cards={cards}
                        message={message}
                        loading={loading}
                    />
                </div>
            </div>
        </>
    )
}

export default Home
