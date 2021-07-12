import './App.css'
import Instruction from "./Components/Insructions"
import Start from "./Components/Start"
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
	return (
		<div className="App">
			<Router basename={'/simulator'}>
				<Switch>
					<Route exact path="/">
						<Start />
					</Route>
					<Route path="/instructions">
						<Instruction />
					</Route>
				</Switch>
			</Router>
		</div>
	)
}

export default App
