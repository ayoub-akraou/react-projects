import { useState } from "react";
import "./App.css";

const messages = ["message 1", "message 2", "message 3"];

function App() {
	const [index, setIndex] = useState(0);

	return (
		<main className="rounded-lg absolute top-1/2 left-1/2 border border-gray-400 shadow-lg w-sm p-4 -translate-x-1/2 -translate-y-1/2 ">
			<h1>index: {index}</h1>
			<div className="flex justify-between">
				<div
					className="rounded-full w-12 h-12 flex justify-center items-center shadow-lg"
					style={{ backgroundColor: index + 1 >= 1 ? "violet" : "" }}>
					1
				</div>
				<div
					className="rounded-full w-12 h-12 flex justify-center items-center shadow-lg"
					style={{ backgroundColor: index + 1 >= 2 ? "violet" : "" }}>
					2
				</div>
				<div
					className="rounded-full w-12 h-12 flex justify-center items-center shadow-lg"
					style={{ backgroundColor: index + 1 >= 3 ? "violet" : "" }}>
					3
				</div>
			</div>

			<p id="message" className="text-center p-4">
				{messages[index]}
			</p>

			<div className="flex justify-between">
				<button
					onClick={() => {
						if (index > 0) setIndex((prev) => prev - 1);
					}}
					className="bg-violet-700 text-white font-medium rounded-sm px-2 py-1 leading-none">
					previous
				</button>
				<button
					onClick={() => {
						if (index < messages.length - 1) {
							// console.log("old value", index);
							setIndex((prev) => prev + 1);
							setIndex((index) => {
								console.log("new value from inside", index);
								return index;
							});
							console.log("new value from outside", index);
						}
					}}
					className="bg-violet-700 text-white font-medium rounded-sm px-2 py-1 leading-none">
					next
				</button>
			</div>
		</main>
	);
}

export default App;
