import React from "react";
import { capitalizeFirstLetter } from '../../utils/helpers'
import photo from '../../assets/small/commercial/0.jpg'

const categories = {
    commercial: {
        name: 'commercial',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet similique voluptates numquam adipisci. Est accusantium, nostrum maxime dolorem nisi similique quod reiciendis quis exercitationem deleniti, consectetur suscipit soluta ex.'
    }
}

const Gallery = () => {
    return (
        <section>
        <h2>{capitalizeFirstLetter(categories.commercial.name)}</h2>
        <p>{categories.commercial.description}</p>
        <div className="flex-row">
            <img
                src={photo}
                alt='range of colourful vegetables'
                className='img-thumbnail mx-1'
            />
        </div>
    </section>
    )
}

export default Gallery