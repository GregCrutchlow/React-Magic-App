import './App.css';
import SearchCards from './SearchCards';
import Enter from './Enter';
import CardInfo from './CardInfo';
import { Link, Routes, Route } from 'react-router-dom'
import logo from "./mtg-logo.png"

function App() {
  return (
		<div className="wrapper">
			<header>
				<Link to="/">
          <img src={logo} alt="magic the gathering logo" />
          <h1>Card Finder</h1>
          <hr />
				</Link>
			</header>
			<Routes>
				<Route path="/" element={<Enter />} />
				<Route path="/searchcards" element={<SearchCards />} />
				<Route path="/cards/:id" element={<CardInfo />} />
			</Routes>
		</div>
  )
}

export default App;
