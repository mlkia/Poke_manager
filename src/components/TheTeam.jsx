import {useState, createContext } from 'react'

 export	const TeamContext = createContext()

	 const TheTeam = ({children}) => {

	const [team, setTeam] = useState([])
	return(
		<TeamContext.Provider value={[team, setTeam]}>
			{children}
		</TeamContext.Provider>
	)
}

export default TheTeam