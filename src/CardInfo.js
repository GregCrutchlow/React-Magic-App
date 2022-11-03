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
    }, [urlParamsValue])
    
    const { name, imageUrl, manaCost, colors, type, rarity, setName, text, power, toughness, flavor } = cardData

    return (
        <div className="cardContainer">
            {
                imageUrl !== undefined ? (
                <>
                <div className="cardInfoContainer">
                <h2>{name}</h2>
                <p><span>Type:</span> {type}</p>
                <p><span>CMC:</span> {manaCost}</p>
                <p><span>Colours:</span> {colors}</p>
                <p><span>Rarity:</span> {rarity}</p>
                <p><span>Set:</span> {setName}</p>
                <p><span>Rules text:</span> {text}</p>
                <p><span>Flavor text:</span> <em>{flavor}</em></p>
                <p><span>Power/Toughness:</span> {power}/{toughness}</p>
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