import { useParams, Link } from "react-router-dom"
import axios from "axios"
import { useState, useEffect } from "react"
import colourWheel from "./assets/MM20161114_Wheel.png"

const CardInfo = () => {

    const [cardData, setCardData] = useState({})
    const params = useParams()
    const urlParamsValue = (params.id)

    useEffect(() => {
		axios({
			url: `https://api.magicthegathering.io/v1/cards/${urlParamsValue}`,
			
		}).then((allMagicCards) => {
			setCardData(allMagicCards.data.card)
			// console.log(allMagicCards.data.card
		})
	},[urlParamsValue])

    const { name, imageUrl, manaCost, colors, type, rarity, setName, text, power, toughness, flavor } = cardData

    return (
        <div className="cardContainer">
            {
                imageUrl !== undefined ? (
                <>
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
                    Re-Roll Cards
                </Link>
            </div>
            <div className="cardDisplay">
                <img src={imageUrl} alt={name} />
                        </div>
                    </>
                ) : <div className="loadingPentagon">
                        <img src={colourWheel} alt="Magic the Gathering Colour Wheel" />
                </div>
            }
            
        </div>
    )
}

export default CardInfo