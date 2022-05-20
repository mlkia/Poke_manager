import { useState, useContext, useEffect } from 'react'
import {TeamContext} from './TheTeam'
import MyTeam from './MyTeam'
import TheNavbar from './Navbar'
import '../App.css'

function PokemonLista() {

	const [pokemon, setPokemon] = useState([])
	const [search, setSearch] = useState ("")
	const [nickname, setNickname] = useState ("")
	const [nextItems, setNextItems] = useState (10)
	const [team, setTeam] = useContext(TeamContext)
	

	useEffect(() => {
		const fetchData = async () => {
		const response  = await fetch('https://pokeapi.co/api/v2/pokemon?limit=40');
		const data = await response.json()
		setPokemon(data.results) 
    }
	fetchData()
  
},[])

	// Sorting Function
	function sorting (a, b){
		var textA = a.name.toLowerCase();
		var textb = b.name.toLowerCase();
		return (textA < textb) ? -1 : (textA > textb) ? 1 : 0;
	  }

	  const AvatarInfo = pokemon.map(elem => (
		{
		  name: elem.name,
		  url: elem.url,
		  nickname: nickname
		} 
	  ));


	const displayResults = () => {
		if (search.length < 1) {
		  return <div>
				{AvatarInfo.sort(sorting).slice(nextItems -10,nextItems).map(item =>(
					<div  key={item.id}>
						<div className='pokeinfo'>
							<h3>
								{item.name}
							</h3>
							<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${item.url.split('/')[6]}.png`} alt=""/>
							<br/>

							{/* Add Nickname to the element */}
							<input 
							className='addnickname'
								type="text"
								onChange={e => setNickname(e.target.value)}
								placeholder='Add Nickname'/>
							<br/>

							{/* This button (Add button) to add an element to the new array */}
							<button type="button" onClick={() => setTeam(team => [...team, item]) +										setNickname('')}>
								<i className='fa fa-plus'></i>
							</button>
						</div>
					</div>))}
					<div className='footbar'>
						<button className='nextbutton' type="button" disabled={nextItems == 10} onClick={ ()=>setNextItems (nextItems - 10 )}>Previous</button>
						<button className='nextbutton' type="button" disabled={nextItems == 40} onClick={ ()=>setNextItems (nextItems + 10 )}>Next</button>
					</div>
				 </div>
		} else {
		  return <div>
					{/* Search bar function */}
					{AvatarInfo.filter((val)=> {
					  if(search === '') {
						return val 
					  }else if (val.name.toLowerCase().includes(search.toLowerCase())){
						return val.name[0].toLowerCase().includes(search[0].toLowerCase())
					  }
					}).map(val =>(
				<div className='pokeinfo' key={val.id}>
					<h3>
						{val.name} 
					</h3>
					<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${val.url.split('/')[6]}.png`} alt=""/>
								<br/>
					{/* Add Nickname to the element */}
					<input 
							className='addnickname'
								type="text"
								onChange={e => setNickname(e.target.value)}
								placeholder='Add Nickname'/>
							<br/>

							{/* This button (Add button) to add an element to the new array */}
							<button type="button" onClick={() => setTeam(team => [...team, val]) +										setNickname('')}>
								<i className='fa fa-plus'></i>
							</button>
			   </div>
		  ))}
		</div> 
		}
	  }
	return (
		<div>
			<div className='head'>
				<h1>Welcome to your Pokemon team </h1>
			</div>
			<TheNavbar/>
			<div className='searchbar'>
				<input className='search'
				onChange={(event) => setSearch(event.target.value)}
				placeholder="search.."/>
			</div>

			<div>
			</div>
				{displayResults()}
      </div>
	)
  }
  
  export default PokemonLista