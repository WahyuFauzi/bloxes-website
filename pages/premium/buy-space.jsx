import React, { useState } from 'react';
import Layout from '../../components/Layout.jsx';

export default function BuySpace() {
	const [size, setSize] = useState(20);
	const [cost, setCost] = useState(0.2);
	const [renderCond, setRenderCond] = useState(false);
	const [renderClass, setRenderClass] = useState('hidden');
	const [symbolCond, setSymbolCond] = useState('🔽');

	let sizeOptions = [];

	for (var i = 2; i <= 100; i++) {
		sizeOptions.push(i * 10);
	}

	const optionSize = () =>
		sizeOptions.map((name, index) => {
			return (
				<div
					key={index}
					className="cursor-pointer hover:bg-sky-200 text-black"
					onClick={() => {
						setSize(name);
						setCond();
						name >= 100 ? setCost(0.18) : setCost(0.2);
					}}
				>
					{name} GB
				</div>
			);
		});

	const setCond = () => {
		var showClasses =
			'h-48 w-24 mt-2 bg-white border-2 overflow-auto z-10 absolute rounded block';
		var hiddenClasses = 'hidden';
		if (renderCond === false) {
			setRenderClass(showClasses);
			setRenderCond(true);
			setSymbolCond('🔼');
		} else if (renderCond === true) {
			setRenderClass(hiddenClasses);
			setRenderCond(false);
			setSymbolCond('🔽');
		}
	};
	return (
		<>
			<Layout>
				<div role="price-calculator" className="h-screen flex mt-4">
					<div className="w-64 mx-auto flex justify-between">
						<div>
							<button
								onClick={() => {
									setCond();
								}}
								className="w-24 h-8 text-white mx-auto bg-accent1 rounded-full hover:bg-accent2 "
							>
								{size} GB {symbolCond}
							</button>
							<ul className={renderClass}>{optionSize()}</ul>
						</div>
						<div>
							<p>x ${cost} =</p>
						</div>
						<div>
							<p>${(cost * size).toLocaleString()}</p>
						</div>
					</div>
				</div>
			</Layout>
		</>
	);

	//add card options
	//TODO improve UI design
}
