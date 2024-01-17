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
			<nav className="flex-grow text-center">
				<ul className="flex items-center justify-center gap-16 text-[#444] cursor-pointer text-2xl font-bold">
					<li>
						<Link to="/" onClick={'App'} className="text-orange-500">
							Home
						</Link>
					</li>
					<li>
						<Link
							to="/About"
							onClick={'About'}
							className="hover:text-orange-500"
						>
							About
						</Link>
					</li>
					<li>
						<Link to="/Blog" onClick={'Blog'} className="hover:text-orange-500">
							Blog
						</Link>
					</li>
					<li>
						<Link
							to="/Property"
							onClick={'Property'}
							className="hover:text-orange-500"
						>
							Property
						</Link>
					</li>
					<li>
						<Link
							to="/PropertyForm"
							onClick={'PropertyForm'}
							className="hover:text-orange-500"
						>
							Contact
						</Link>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export { Header };
