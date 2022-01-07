import React from "react"

export default function Modal({currentPhoto, toggleModal}) {
    const {index, name, category, description} = currentPhoto
    // function closeModal() {
    //     setModalIsOpen(false)
    // }

    return(
        <div className="modalBackdrop">
            <div className="modalContainer">
                <h3 className='modalTitle'>{name}</h3>
                <img alt='current category' src={require(`../../assets/large/${category}/${index}.jpg`)}/>
                <p>
                    {description}
                </p>
                <button type='button' onClick={toggleModal}>
                    Close this modal
                </button>
            </div>
        </div>
    )
}