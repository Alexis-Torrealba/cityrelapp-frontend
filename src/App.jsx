import { BrowserRouter } from 'react-router-dom';
import { Content } from './components/Content';
import { Header } from './components/Header';
import { PropertyForm } from './components/PropertyForm';

function App() {
	return (
		<BrowserRouter>
			<div
				className="bg-cover bg-center bg-no-repeat"
				style={{
					backgroundImage: `url('./assets/pexels-photomix-company-565324.jpg')`,
					height: '100vh',
				}}
			>
				<Header />
				<Content />
			</div>
			<PropertyForm />
		</BrowserRouter>
	);
}

export { App };
