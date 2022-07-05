import { render, screen } from '@testing-library/react';
import Login from '../pages/adm/login';
import '@testing-library/jest-dom';

describe('Login', () => {
	it('renders', () => {
		render(<Login />);

		//layout testing
		expect(screen.getByRole('navbar')).toBeInTheDocument();
		expect(screen.getByRole('footer')).toBeInTheDocument();

		//page testing
		expect(screen.getByRole('login-card')).toBeInTheDocument();
		expect(screen.getByText('Sign in to our platform')).toBeInTheDocument();
		expect(screen.getByText('Your email')).toBeInTheDocument();
		expect(screen.getByText('Your password')).toBeInTheDocument();
		expect(screen.getByText('Remember me')).toBeInTheDocument();
		expect(screen.getByText('Lost Password?')).toBeInTheDocument();
		expect(screen.getByText('Login to your account')).toBeInTheDocument();
		expect(screen.getByText('Create account')).toBeInTheDocument();
	});
});
