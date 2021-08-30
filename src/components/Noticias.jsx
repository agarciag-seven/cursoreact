import React from 'react';
import { CONFIG } from '../helpers/constants';
import Typography from '@material-ui/core/Typography';


const Noticias = ()=>{
    const[noticias,setNoticias] = React.useState([]);
    React.useEffect(()=>{
      obtenerNoticias();  
    },[]);

    const obtenerNoticias = async ()=>{
        const url = new URL(CONFIG.urlBase);
        const params = {
            'api-key': CONFIG.apiKey
        };
        url.search = new URLSearchParams(params).toString();
        const data = await fetch(url);
        const notas = await data.json();
        if(notas.status === 'OK'){           
            setNoticias(notas.results);
        } 
    };

    return(
       <main>
           Hola Mundo..!!
       </main>
    );
};

export default Noticias;