import { FormControl, InputLabel, TextField , Select, Button  } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import React, { useState } from 'react';
import API from '../../Api/API';
import './Form.css';




const Form = () => {
    const [wilaya, setWilaya] = useState();
    const [phone, setPhone] = useState();
    const [address, setAddress] = useState();
    const [name, setName] = useState();
    const [type, setType] = useState();
    const [disponible, setDisponible] = useState();
    const [commune, setCommune] = useState();
    const[messagevalid,setMessagevalid] = useState()
    const[messageerr,setMessageerr] = useState()



    const Send = () => {
      
        const data = {wilaya,phone,name,address,type,disponible,commune}
    
        API.post("api/post", data)
          .then((res) => {
            if (res.data.err === true) {
              setMessageerr(res.data.message);
              setTimeout(() => {
                setMessageerr(false)
              }, 3000);
            } else {
              setMessagevalid(res.data.message);
              setWilaya("");
              setPhone("");
              setName("");
              setAddress("");
              setType("");
              setDisponible("");
              setCommune("");
              setTimeout(() => {
                setMessagevalid(false)
              }, 3000);
              
            }
          })
          .catch((err) => {
            setMessageerr(err.data.message);
          });
      };


    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1.7),
          width:'20%'
          
        },
        
      }));
    const classes = useStyles();

    return (
        <>
           {messagevalid && (
                <div className="Form-Message">
                <Alert variant="filled" severity="success">
                     {messagevalid}
                </Alert>
                </div>
           )}
           {messageerr && (
                <div className="Form-Message">
                <Alert variant="filled" severity="error">
                     {messageerr}
                </Alert>
                </div>
           )}
            <div className="Form-Container">
            <TextField className={classes.formControl} id="outlined-basic"
             label="Name" variant="outlined" 
             value={name}
             onChange={(event) => setName(event.target.value)}
             />
            <TextField className={classes.formControl}
             id="outlined-basic" label="Phone" variant="outlined"
             value={phone}
             onChange={(event) => setPhone(event.target.value)}
             />
            <TextField className={classes.formControl} id="outlined-basic" label="Address"
             variant="outlined" 
             value={address}
             onChange={(event) => setAddress(event.target.value)}
             />
            <FormControl className={classes.formControl} variant="outlined"  >
			    <InputLabel htmlFor="filled-age-native-simple">Wilaya</InputLabel>
                    <Select
                    value={wilaya}
                    onChange={(event) => setWilaya(event.target.value)}
                    native>
                            <option aria-label="None" value="" />
                            <option >Adrar</option>
                            <option >Chlef</option>
                            <option>Laghouat</option>
                            <option >Oum El Bouaghi</option>
                            <option >Batna</option>
                            <option >Bejaia</option>
                            <option >Biskra</option>
                            <option >Bechar</option>
                            <option >Blida</option>
                            <option >Bouira</option>
                            <option >Tamanrasset</option>
                            <option >Tebessa</option>
                            <option >Tlemcen</option>
                            <option >Tiaret</option>
                            <option >Tizi Ouzou</option>
                            <option >Alger</option>
                            <option >Djelfa</option>
                            <option >Jijel</option>
                            <option >Setif</option>
                            <option >Saida</option>
                            <option >Skikda</option>
                            <option >Sidi Bel Abbes</option>
                            <option >Annaba</option>
                            <option >Guelma</option>
                            <option >Constantine</option>
                            <option >Medea</option>
                            <option >Mostaganem</option>
                            <option >MSila</option>
                            <option >Mascara</option>
                            <option >Ouargla</option>
                            <option >Oran</option>
                            <option >El Bayadh</option>
                            <option >Illizi</option>
                            <option >Bordj Bou Arreridj</option>
                            <option >Boumerdes</option>
                            <option >El Tarf</option>
                            <option >Tindouf</option>
                            <option >Tissemsilt</option>
                            <option >El Oued</option>
                            <option >Khenchela</option>
                            <option >Souk Ahras</option>
                            <option >Tipaza</option>
                            <option >Mila</option>
                            <option >Ain Defla</option>
                            <option >Naama</option>
                            <option >Ain Temouchent</option>
                            <option >Ghardaia</option>
                            <option >Relizane</option>
                    </Select>
            </FormControl>
            <TextField className={classes.formControl}
             id="outlined-basic" label="Commune" variant="outlined" 
             value={commune}
             onChange={(event) => setCommune(event.target.value)}
             />
            <FormControl className={classes.formControl} variant="outlined">
                <InputLabel htmlFor="filled-age-native-simple">disponible</InputLabel>
                    <Select
                    value={disponible}
                    onChange={(event) => setDisponible(event.target.value)}
                    native>
                            <option aria-label="None" value="" />
                            <option >oui</option>
                            <option >non</option>
                    </Select>
            </FormControl>
            <FormControl className={classes.formControl} variant="outlined">
                <InputLabel htmlFor="filled-age-native-simple">Type</InputLabel>
                    <Select 
                    value={type}
                    onChange={(event) => setType(event.target.value)}
                    native>
                            <option aria-label="None" value="" />
                            <option >recharges bouteille O2</option>
                            <option >vente concentrateur d'oxygèn</option>
                            <option >Lovenox</option>
                    </Select>
            </FormControl>
            <Button onClick={Send} variant="outlined" 
            >
                 Soumettre
            </Button>

            </div>
        </>
    )
}

export default Form
