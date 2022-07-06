import { useRouter } from 'next/router';
export default function Navbar() {
	const router = useRouter();

	return (
		<div role="navbar" className="w-full h-12 flex bg-primary">
			<div className="w-1/2">
				<ul className="flex w-full h-full">
					<li>
						<div
							className="w-24 pl-1 pt-2 h-full cursor-pointer text-white font-bold text-xl"
							onClick={(e) => {
								e.preventDefault();
								router.push('/');
							}}
						>
							Bloxes
						</div>
					</li>
					<li className="h-full">
						<div
							className="w-24 pt-2.5 h-full cursor-pointer text-center text-white transition ease-in-out delay-150 hover:bg-accent2"
							onClick={(e) => {
								e.preventDefault();
								router.push('/download');
							}}
						>
							Download
						</div>
					</li>
				</ul>
			</div>
			<div className="w-1/2">
				<ul className="flex justify-end">
					<li>
						<button
							onClick={(e) => {
								e.preventDefault();
								router.push('/adm/login');
							}}
							className="bg-accent1 hover:bg-blue-700 text-white mx-2 mt-1 font-bold py-2 px-4 rounded hover:bg-accent2"
						>
							Login
						</button>
					</li>
					<li>
						<button
							onClick={(e) => {
								e.preventDefault();
								router.push('/adm/register');
							}}
							className="bg-accent1 hover:bg-blue-700 text-white mx-2 mt-1 font-bold py-2 px-4 rounded hover:bg-accent2"
						>
							Daftar
						</button>
					</li>
				</ul>
			</div>
		</div>
	);
}
