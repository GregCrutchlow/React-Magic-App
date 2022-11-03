import { Link } from "react-router-dom"
import Ajani from "./assets/MTG Characters/Ajani_Goldmane_MTGA_avatar_DMU.webp"
import Squee from "./assets/MTG Characters/Squee_MTGA_avatar_DMU.webp"
import Wrenn from "./assets/MTG Characters/Wrenn_MTGA_avatar_MID.webp"
import Yargle from "./assets/MTG Characters/Yargle_MTGA_avatar_DOM.webp"


const Enter = () => {
    window.onload = function () {
		let images = [Ajani, Squee, Wrenn, Yargle]

		document.body.style.backgroundImage = "url(" + images[Math.floor(Math.random() * images.length)] + ")"
	}
    return (
        <section className="enterPage">
            <Link to='/searchcards' className="enterButton">
                Enter
            </Link>
            <h2>Press Enter to get a selection of cards!</h2>
            <p>Get a random selection of cards, click on one to see more info!</p>
            <p>All images, logos and symbols of/from the game Magic the Gathering are owned by Wizards of the Coast and Hasbro Toys.</p>
        </section>
    )
}

export default Enter