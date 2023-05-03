import NavigationBar from './NavigationBar.jsx';
import Footer from './Footer.jsx';

function Layout({ children }) {
	return (
		<>
			<NavigationBar></NavigationBar>
			<main>{children}</main>
			<Footer></Footer>
		</>
	);
}

export default Layout;
