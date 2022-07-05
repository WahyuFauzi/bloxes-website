import Image from 'next/image';
import { useRouter } from 'next/router';
import Layout from '../components/Layout';

import hero from '../public/25501.jpg';

export default function Home() {
	const router = useRouter();
	return (
		<>
			<Layout>
				<div className="relative text-center">
					<Image className="w-full h-fit" src={hero} alt="hero"></Image>
					<p className="absolute top-36 left-48 text-6xl text-white subpixel-antialiased font-bold font-sans">
						Share file made easy
					</p>
				</div>
				<div className="w-full h-60 flex">
					<button
						onClick={(e) => {
							e.preventDefault();
							router.push('/premium/buy-space');
						}}
						className="w-36 h-12 mx-auto mt-9 text-center text-white bg-accent1 rounded-full hover:bg-accent2"
					>
						Buy Space
					</button>
				</div>
			</Layout>
		</>
	);

	// add jumbtron
	//<a href='https://www.freepik.com/vectors/cloud-cartoon'>Cloud cartoon vector created by starline - www.freepik.com</a>;
}
