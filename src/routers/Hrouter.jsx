import { PropertyForm } from 'src/components/PropertyForm.jsx';
import { Route, Switch } from 'react-router-dom';
import { App } from 'src/App.jsx';

function Hrouter() {
	return (
		<Switch>
			<Route path="/" exact Component={App}></Route>
			<Route path="/Form" Component={PropertyForm}></Route>
		</Switch>
	);
}

export { Hrouter };
