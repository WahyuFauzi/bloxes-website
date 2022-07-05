import Layout from '../../components/Layout.jsx';

export default function Register() {
	return (
		<>
			<Layout>
				<div
					role="register-card"
					className="p-4 max-w-sm bg-primary my-4 text-white mx-auto rounded-lg border border-gray-200 shadow-md sm:p-6 lg:p-8 dark:bg-gray-800 dark:border-gray-700"
				>
					<form className="space-y-6" action="#">
						<h5 className="text-xl font-medium text-gray-900 dark:text-white">
							Sign up to our platform
						</h5>
						<div>
							<label
								htmlFor="email"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Your email
							</label>
							<input
								type="email"
								name="email"
								id="email"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								placeholder="name@company.com"
								required=""
							/>
						</div>
						<div>
							<label
								htmlFor="password"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Your password
							</label>
							<input
								type="password"
								name="password"
								id="password"
								placeholder="••••••••"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								required=""
							/>
						</div>
						<div>
							<label
								htmlFor="verify-password"
								className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
							>
								Verify password
							</label>
							<input
								type="verify-password"
								name="verify-password"
								id="verify-password"
								placeholder="••••••••"
								className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								required=""
							/>
						</div>
						<div className="flex items-start">
							<div className="flex items-start"></div>
							<a
								href="#"
								className="ml-auto text-sm text-blue-700 hover:underline dark:text-blue-500"
							>
								Lost Password?
							</a>
						</div>
						<button
							type="submit"
							className="w-full text-white bg-accent1 hover:bg-accent2 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
						>
							Create your account
						</button>
					</form>
				</div>
			</Layout>
		</>
	);
}
