function Content() {
	return (
		<div className=" flex flex-col justify-center bg-opacity-40 bg-white h-[826px] pl-32">
			<div className="flex flex-col flex-wrap w-2/5 ">
				<h1 className=" text-8xl font-bold leading-tight text-[#222]">
					Let's Find Your Dream
					<span className=" pl-4 text-orange-500  ">House!</span>
				</h1>
				<p className="text-2xl pt-5 font-semibold text-[#3b3b3b] w-5/6">
					We are a real estate agency that will help you find the best residence
					you dream of. Let's discuss your dream house!
				</p>
			</div>

			<div className="flex justify-center items-center gap-5 p-5 bg-white w-3/5 my-10 border-2 rounded-lg  shadow-lg shadow-gray-600 ">
				{/* Location */}
				<div className="flex flex-col mr-4">
					<label
						htmlFor="location"
						className="text-lg text-[#222] font-bold mb-2"
					>
						Location:
					</label>
					<input
						type="text"
						id="location"
						name="location"
						className="p-2 border border-gray-300 rounded-lg  bg-white hover:bg-[#afafaf] placeholder:text-[#444] placeholder:font-semibold"
						placeholder="Type location"
					/>
				</div>

				{/* Property */}
				<div className="flex flex-col mr-4">
					<label
						htmlFor="property"
						className="text-lg text-[#222]  font-bold mb-2"
					>
						Property type
					</label>
					<input
						type="text"
						id="property"
						name="property"
						className="p-2 border border-gray-300 rounded-lg  bg-white hover:bg-[#afafaf] placeholder:text-[#444] placeholder:font-semibold"
						placeholder="Type Property"
					/>
				</div>

				{/* Price */}
				<div className="flex flex-col">
					<label
						htmlFor="price"
						className="text-lg text-[#222]  font-bold mb-2"
					>
						Average Price
					</label>
					<input
						type="price"
						id="price"
						name="price"
						className="p-2 border border-gray-300 rounded-lg bg-white hover:bg-[#afafaf] placeholder:text-[#444] placeholder:font-semibold"
						placeholder="Type Price"
					/>
				</div>
				<div>
					<button className="w-32 bg-orange-500 p-3 rounded-lg text-lg font-bold text-white hover:bg-orange-400">
						Search
					</button>
				</div>
			</div>
		</div>
	);
}

export { Content };
