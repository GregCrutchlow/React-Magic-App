import { Link } from "react-router-dom"


const Enter = () => {
    return (
        <section className="enterPage">
            <Link to='/searchcards' className="enterButton">
                Enter
            </Link>
        </section>
    )
}

export default Enter