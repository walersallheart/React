//Tests should have the three As
//Arrange: Set up the test data, test conditions and test environment
//Act: Run logic that should be executed (eg. execute function)
//Assert: Compare execution results with expected results

import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Greeting from './Greeting';

describe('Greeting Component', () => {
    test('renders Hello World as text', () => {
        //Arrange
        render(<Greeting />);

        //Act
        //not needed here, just rendering is enough

        //Assert
        const helloWorldElement = screen.getByText('Hello World!');
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('renders "good to see you"  if the button was not clicked', ()=> {
        //Arrange
        render(<Greeting />);

        //Act
        //not needed here, just rendering is enough

        //Assert
        const outputElement = screen.getByText('Good to See You', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('renders "changed!" if the button was clicked', ()=> {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const outputElement = screen.getByText('Changed', { exact: false });
        expect(outputElement).toBeInTheDocument();
    });

    test('removes "good to see you" if the button was clicked', ()=> {
        //Arrange
        render(<Greeting />);

        //Act
        const buttonElement = screen.getByRole('button');
        userEvent.click(buttonElement);

        //Assert
        const outputElement = screen.queryByText('Good to See You', { exact: false });
        expect(outputElement).toBeNull();
    });
});