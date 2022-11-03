import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"

const SearchCard = () => {

	const [magicCards, setMagicCards] = useState([])

	useEffect(() => {
		axios({
			url: "https://api.magicthegathering.io/v1/cards",
			params: {
                pageSize: 10,
                random: true,
			}
		}).then((allMagicCards) => {
			const filteredMagicCards = allMagicCards.data.cards.filter((card) => {
				return card.imageUrl !== undefined
			}).slice( 0, 5 )
			setMagicCards(filteredMagicCards)
		})
	}, [])
	// 
	return (
		<ul className="catalogue">
			{magicCards.map((cardsObj) => {
				return (
					<li key={cardsObj.id}>
						<Link to={`/cards/${cardsObj.id}`}>
							<img src={cardsObj.imageUrl} alt={cardsObj.name} />
							<p>{cardsObj.name}</p>
						</Link>
					</li>
				)
			})}
		</ul>


	)
}

export default SearchCard
