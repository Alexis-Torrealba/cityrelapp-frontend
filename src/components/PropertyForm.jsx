function PropertyForm() {
	return (
		<div className=" h-screen flex flex-col justify-center items-center ">
			<div className=" flex flex-col items-center  p-10 w-3/12 h-3/6 shadow-lg shadow-[#444] rounded-xl ">
				<h1 className="text-3xl text-center text-[#444] font-bold">
					Add Property
				</h1>
				<div className="flex flex-col py-10 gap-5 ">
					<input
						type="text"
						name="Name"
						id="Name"
						placeholder="Property name"
						className="h-8 w-80  border-2  border-gray-500 rounded-md"
					/>
					<input
						type="number"
						name="Price"
						id="Price"
						placeholder="Property price"
						className="h-8 border-2 border-gray-500 rounded-md "
					/>
					<input
						type="file"
						name="Imagen"
						id="Imagen"
						className=" text-sm text-gray-900 border-gray-500 rounded-md cursor-pointer dark:border-gray-500 dark:border-2 dark:text-white dark:bg-[#444]"
					/>
					<button
						className="bg-orange-500 rounded-md text-xl font-bold text-white shadow-md shadow-slate-400 hover:bg-orange-400"
						type="submit"
					>
						Send
					</button>
				</div>
			</div>
		</div>
	);
}

export { PropertyForm };
