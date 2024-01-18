import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Content } from './components/Content';
import { PropertyForm } from './components/PropertyForm';
import { About } from './components/About';
import { Blog } from './components/Blog';
import { Property } from './components/Property';

function App() {
	return (
		<Router>
			<div>
				<div
					className="bg-cover bg-center bg-no-repeat"
					style={{
						backgroundImage: `url('./assets/pexels-photomix-company-565324.jpg')`,
						height: '100vh',
					}}
				>
					<Header />
					<Content />
					<Routes>
						<Route path="/about" component={<About />} />
						<Route path="/blog" component={<Blog />} />
						<Route path="/property" component={<Property />} />
						{/* <Route path="/propertyform" component={<PropertyForm />} /> */}
						<Route path="/" component={<Content />} />
					</Routes>
				</div>
				{/*Todavía no he podido arreglar lo de las rutas intente hacerlo así y aun cuando le doy en el Header a contacto no me renderiza el contenido de PropertyForm, Lo puse aquí para que puedas verlo*/}
				<PropertyForm />
			</div>
		</Router>
	);
}

export { App };
