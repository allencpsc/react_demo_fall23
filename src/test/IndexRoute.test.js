import { render, screen } from '@testing-library/react';
import IndexRoute from '../components/IndexRoute';


test('check if date present', () => {
    render(<IndexRoute/>);
    const dateElement = screen.getByText(/Date: /i);
    expect(dateElement).toBeInTheDocument();
    //const titleElement = screen.getByText(/Title: /i);
    //expect(titleElement).toBeInTheDocument();
    //const descElement = screen.getByText(/Description: /i);
    //expect(descElement).toBeInTheDocument();
});


// test('check if title present', () => {
//     render(<IndexRoute/>);
//     //const titleElement = screen.getByText(/Title: /i);
//     //expect(titleElement).toBeInTheDocument();
// });

// test('check if description present', () => {
//     render(<IndexRoute/>);
//     //const descElement = screen.getByText(/Description: /i);
//     //expect(descElement).toBeInTheDocument();
// });

