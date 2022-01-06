import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers'
import PhotoList from "../PhotoList"

const Gallery = ({currentCategory}) => {
    const {name, description} = currentCategory

    return (
        <section>
            <h2 data-testid='h1tag'>{capitalizeFirstLetter(name)}</h2>
            <p>{description}</p>
            <PhotoList category={name} />
        </section>
    )
}

export default Gallery