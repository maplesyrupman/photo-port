import React, {useEffect} from "react";
import { capitalizeFirstLetter } from "../../utils/helpers";

const Nav = (props) => {
    const {
        categories,
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
    } = props
    
    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name)
    }, [currentCategory])

    return (
        <header className="flex-row">
            <h2 className="d-inline no-wordwrap">
                <a href='/' data-testid='link'>
                    <span role='img' aria-label='camera'>📸</span> Oh Snap!
                </a>
            </h2>
            <nav>
                <ul className='flex-row'>
                    <li className='mx-2 no-wordwrap'>
                        <a href='#about'data-testid='about' onClick={() => setContactSelected(false)}>
                            About Me
                        </a>
                    </li>
                    <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                        <span onClick={() => setContactSelected(true)}>Contact</span>
                    </li>
                    {categories.map((category) => (
                        <li
                            className={`mx-1 ${
                                currentCategory.name === category.name && !contactSelected && 'navActive'
                            }`}
                            key={category.name}
                        >
                            <span onClick={() => {
                                setCurrentCategory(category)
                                setContactSelected(false)
                            }}>
                                {category.name}
                            </span>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    )
}

export default Nav