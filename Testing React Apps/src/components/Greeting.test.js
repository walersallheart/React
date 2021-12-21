//Tests should have the three As
//Arrange: Set up the test data, test conditions and test environment
//Act: Run logic that should be executed (eg. execute function)
//Assert: Compare execution results with expected results

import { render, screen } from '@testing-library/react';
import Greeting from './Greeting';

test('renders Hello World as text', () => {
    //Arrange
    render(<Greeting />);

    //Act
    //not needed here, just rendering is enough

    //Assert
    const helloWorldElement = screen.getByText('Hello World!');
    expect(helloWorldElement).toBeInTheDocument();
});