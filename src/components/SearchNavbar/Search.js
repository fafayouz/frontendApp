import { Button, FormControl, InputLabel, Select } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import React from 'react'
import './Search.css'

const Search = ({WilayaData , fafayouyz , Searchbtn}) => {
    const useStyles = makeStyles((theme) => ({
        formControl: {
          margin: theme.spacing(1.4),
          width : '90%',
          marginTop:'2rem'
        },
        selectEmpty: {
          marginTop: theme.spacing(0),
        },
      }));
    const classes = useStyles();
    return (
        <>
            <div className="Search">
				
            <FormControl variant="outlined"  className={classes.formControl}>
			<InputLabel htmlFor="filled-age-native-simple">Wilaya</InputLabel>
        <Select value={WilayaData} onChange={fafayouyz}  native>
				<option aria-label="None" value="" />
				<option value="">tous les wilaya</option>
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
		
            <Button onClick={Searchbtn}  className={classes.formControl} variant="outlined" color="primary">
                Search
            </Button>

            </div>   
        </>
    )
}

export default Search
