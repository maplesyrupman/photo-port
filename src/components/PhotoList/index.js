import React, { useState } from "react"
import photos from './photos'
import modal from '../Modal'
import Modal from "../Modal"

const PhotoList = ({category}) => {
    const [currentPhoto, setCurrentPhoto] = useState()
    const [modalIsOpen, setModalIsOpen] = useState(false)
    

    const toggleModal = (image, i) => {
        setCurrentPhoto({...image, index:i})
        setModalIsOpen(!modalIsOpen)
    }

    return (
        <div>
            {modalIsOpen && 
            <Modal 
            currentPhoto={currentPhoto}
            setModalIsOpen={setModalIsOpen}
            ></Modal>
            }
            <div className="flex-row">
                {photos.filter(photo => photo.category === category).map((photo, i) => (
                    <img
                        src={require(`../../assets/small/${category}/${i}.jpg`)}
                        alt={photo.name}
                        className='img-thumbnail mx-1'
                        onClick={() => toggleModal(photo, i)}
                        key={photo.name}
                    />
                ))}
            </div>
        </div>
    )
}

export default PhotoList