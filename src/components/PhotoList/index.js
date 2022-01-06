import React from "react"
import photos from './photos'

const PhotoList = ({category}) => {

    return (
        <div>
            <div className="flex-row">
                {photos.filter(photo => photo.category === category).map((photo, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        alt={photo.name}
                        className='img-thumbnail mx-1'
                        key={photo.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default PhotoList