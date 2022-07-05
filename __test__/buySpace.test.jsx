import { render, screen } from '@testing-library/react';
import BuySpace from '../pages/premium/buy-space';
import '@testing-library/jest-dom';

describe('Login', () => {
	it('renders', () => {
		render(<BuySpace />);

		//layout testing
		expect(screen.getByRole('navbar')).toBeInTheDocument();
		expect(screen.getByRole('footer')).toBeInTheDocument();

		//page testing
		expect(screen.getByRole('price-calculator')).toBeInTheDocument();
	});
});
