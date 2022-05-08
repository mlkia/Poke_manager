import { useState, useContext } from 'react'
import TheTeam, { TeamContext } from './TheTeam'
import '../App.css'
import TheNavbar from './Navbar'

const MyTeam = () => {

	const [team, setTeam] = useContext(TeamContext)

	return(
		<div>
			<TheNavbar/>
			<h1>Here is my team</h1>
			{team.map(member => (
			<div className='pokeinfo'>
				<h3>
					{member.name}
				</h3>
				<h4>
					{member.nickname}
				</h4>
				
				<img src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${member.url.split('/')[6]}.png`} alt=""/>
				<br/>
				<button type="button" onClick={ ()=>setTeam(team.filter(team => team !==member))}><i className='fa fa-trash'></i></button>
			</div>
		))}
		</div>
	)

}

export default MyTeam