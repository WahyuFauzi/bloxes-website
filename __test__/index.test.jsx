import { render, screen } from '@testing-library/react';
import Home from '../pages/index';
import '@testing-library/jest-dom';
import image from '../__mocks__/imageMocks';

describe('Home', () => {
	it('renders', () => {
		render(<Home />);
		const logo = screen.getByRole('img');

		//layout testing
		expect(screen.getByRole('navbar')).toBeInTheDocument();
		expect(screen.getByRole('footer')).toBeInTheDocument();

		//page testing
		expect(screen.getByText('Share file made easy')).toBeInTheDocument();
		expect(screen.getByText('Buy Space')).toBeInTheDocument();
		//problem with src, need to mock it
		expect(logo).toHaveAttribute('src', image);
		expect(logo).toHaveAttribute('alt', 'hero');
	});
});
