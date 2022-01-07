import React from "react";
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import ContactForm from ".."

afterEach(cleanup)

describe('renders ContactForm', () => {
    it('renders', () => {
        render(<ContactForm></ContactForm>)
    })

    it('matches snapshot', () => {
        const {asFragment} = render(<ContactForm></ContactForm>)
        expect(asFragment()).toMatchSnapshot()
    })

    it('contact heading has text', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>)
        expect(getByTestId('contact-heading')).toHaveTextContent('Contact Me')
    })

    it('submit button has text "submit"', () => {
        const { getByTestId } = render(<ContactForm></ContactForm>)
        expect(getByTestId('submit-btn')).toHaveTextContent('Submit')
    })
})