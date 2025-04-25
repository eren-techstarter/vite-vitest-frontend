import { render, screen, fireEvent } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import App from './src/App'


describe('App Component', () => {
  it('increments count by 1 when the button is clicked', () => {
    // Render the App component
    render(<App />)

    // Find the button element
    const button = screen.getByText(/count is 0/i)

    // Simulate a click event
    fireEvent.click(button)

    // Assert that the button text updates correctly
    expect(button.textContent).toBe('count is 1')

    // Simulate another click event
    fireEvent.click(button)

    // Assert that the button text updates correctly again
    expect(button.textContent).toBe('count is 2')
  })
})