import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"

const CardInfo = () => {

    const [cardData, setCardData] = useState({})
    const params = useParams()
    const urlParamsValue = (params.id)
    console.log(urlParamsValue)

    useEffect(() => {
		axios({
			url: `https://api.magicthegathering.io/v1/cards/${urlParamsValue}`,
			
		}).then((allMagicCards) => {
			setCardData(allMagicCards.data.card)
			console.log(allMagicCards.data.card)
		})
	}, [])

    const { name, imageUrl, manaCost, colors, type, rarity, setName, text, power, toughness, flavor } = cardData

    return (
        <div className="cardContainer">
            <div className="cardInfoContainer">
                <h2>{name}</h2>
                <p>Type: {type}</p>
                <p>CMC: {manaCost}</p>
                <p>Colours: {colors}</p>
                <p>Rarity: {rarity}</p>
                <p>Set: {setName}</p>
                <p>Rules text: {text}</p>
                <p>Flavor text: {flavor}</p>
                <p>Power: {power}</p>
                <p>Toughness: {toughness}</p>
                <Link to='/searchcards' className="searchCards-button">
                    Back to Searched Cards
                </Link>
            </div>
            <div className="cardDisplay">
                <img src={imageUrl} alt={name} />
            </div>
        </div>
    )
}

export default CardInfo