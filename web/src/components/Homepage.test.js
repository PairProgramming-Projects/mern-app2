import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Homepage from './Homepage';

test('renders the home page', async () => {
    render(
        <BrowserRouter>
            <Homepage />
        </BrowserRouter>,
    );
    expect(screen.getByText('Homepage')).toBeInTheDocument();
});
