import React from 'react';
import {Slideshow, Slide, TextoSlide} from './Slideshow';
import { CONFIG } from './../helpers/constants';
import styled from 'styled-components';
import img1 from './../img/hobbit.jpg';
import img2 from './../img/jonh.jpg';
import img3 from './../img/merce.jpg';
import Contenedor from './Contenedor';

const Home = () =>{
    const[movies,setMovies] = React.useState([]);
    
    React.useEffect(()=>{
      obtenerReviews();  
    },[]);

    const src1 = (movies.length) ? movies[0].multimedia.src : img1;
    const src2 = (movies.length) ? movies[1].multimedia.src : img2;
    const src3 = (movies.length) ? movies[2].multimedia.src : img3;

    const title1 = (movies.length) ? movies[0].display_title : 'The Hobbit';
    const title2 = (movies.length) ? movies[1].display_title : 'Jonh Wick';
    const title3 = (movies.length) ? movies[2].display_title : 'Los Indestructibles';

    const link1 = (movies.length) ? movies[0].link.url : '#';
    const link2 = (movies.length) ? movies[1].link.url : '#';
    const link3 = (movies.length) ? movies[2].link.url : '#';

    const obtenerReviews = async ()=>{
        const url = new URL(CONFIG.urlBase);
        const params = {
            'api-key': CONFIG.apiKey
        };
        url.search = new URLSearchParams(params).toString();
        const data = await fetch(url);
        const notas = await data.json();
        if(notas.status === 'OK'){    
            console.log(notas.results);       
            setMovies(notas.results);
        } 
    };

    return(
        <div>
          <div>
            <Slideshow controles={true} autoplay={true} velocidad="3000" intervalo="5000">
                <Slide>
                    <a href={link1} target="_blank">
                        <img src={src1} alt=""/>
                    </a>
                    <TextoSlide>
                        <p>{title1}</p>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href={link2} target="_blank">
                        <img src={src2} alt=""/>
                    </a>
                    <TextoSlide>
                        <p>{title2}</p>
                    </TextoSlide>
                </Slide>
                <Slide>
                    <a href={link3} target="_blank">
                        <img src={src3} alt=""/>
                    </a>
                    <TextoSlide>
                        <p>{title3}</p>
                    </TextoSlide>
                </Slide>
            </Slideshow>
            </div>
            <div className="margin">
            {
                movies.map(item=>{
                    <Contenedor 
                        src={item.multimedia.src}
                        title={item.display_title}
                        description={item.summary_short}
                 />
                })
            }
            </div>
        </div>
    );
};

export default Home;