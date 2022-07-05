import { render, screen } from '@testing-library/react';
import Register from '../pages/adm/register';
import '@testing-library/jest-dom';

describe('Register', () => {
	it('renders', () => {
		render(<Register />);

		//layout testing
		expect(screen.getByRole('navbar')).toBeInTheDocument();
		expect(screen.getByRole('footer')).toBeInTheDocument();

		//page testing
		expect(screen.getByRole('register-card')).toBeInTheDocument();
		expect(screen.getByText('Sign up to our platform')).toBeInTheDocument();
		expect(screen.getByText('Your email')).toBeInTheDocument();
		expect(screen.getByText('Your password')).toBeInTheDocument();
		expect(screen.getByText('Verify password')).toBeInTheDocument();
		expect(screen.getByText('Create your account')).toBeInTheDocument();
	});
});
