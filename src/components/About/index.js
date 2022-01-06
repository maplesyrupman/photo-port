import React from "react";
import coverImage from '../../assets/cover/cover-image.jpg'

const About = () => {
    return(
        <section className="my-5">
            <h1>Who am I?</h1>
            <img src={coverImage} className='my-2' style={{ width: '100%' }} alt="cover" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea amet similique voluptates numquam adipisci. Est accusantium, nostrum maxime dolorem nisi similique quod reiciendis quis exercitationem deleniti, consectetur suscipit soluta ex, veritatis voluptates quidem magni cumque quos aperiam! Provident, mollitia dolor maiores numquam iusto soluta tempora id at quos a enim corporis culpa modi. Debitis, facilis!</p>
        </section>
    )
}

export default About