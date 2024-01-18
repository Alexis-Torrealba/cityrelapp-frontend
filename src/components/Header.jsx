import { Link } from 'react-router-dom';

function Header() {
	return (
		<div className="flex items-center justify-between p-2 bg-opacity-40 bg-white">
			<div className="flex-shrink-0 pl-10">
				<img
					src="./assets/Real_Estate_Logo-removebg-preview.png"
					className="w-24"
					alt=""
				/>
			</div>
			<div className="flex-grow text-center">
				<nav className="flex items-center justify-center gap-16 text-[#444] cursor-pointer text-2xl font-bold list-none">
					<Link to="/" className="text-orange-500">
						Home
					</Link>
					<Link to="/about" className="hover:text-orange-500">
						About
					</Link>
					<Link to="/blog" className="hover:text-orange-500">
						Blog
					</Link>
					<Link to="/property" className="hover:text-orange-500">
						Property
					</Link>
					<Link to="/propertyform" className="hover:text-orange-500">
						Contact
					</Link>
				</nav>
			</div>
		</div>
	);
}

export { Header };
