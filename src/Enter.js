import { Link } from "react-router-dom"


const Enter = () => {
    return (
        <section className="enterPage">
            <Link to='/searchcards' className="enterButton">
                Enter
            </Link>
            <h2>Press Enter to get a selection of cards!</h2>
            <p>Get a random selection of cards, click on one to see more info!</p>
        </section>
    )
}

export default Enter