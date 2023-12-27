import React from "react";
import {Container} from './styles';

const Card = (props) =>{
    return(
        <Container>
            <img src={props.cardImage} alt="Imagen do Card" />

            <h3>{props.cardTitle}</h3>

            <p>{props.cardText}</p>
        </Container>
    );
}

export default Card;