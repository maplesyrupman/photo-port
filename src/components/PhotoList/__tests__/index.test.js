import React from "react"
import { render, cleanup } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import PhotoList from '..'

afterEach(cleanup)

describe('renders PhotoList', () => {
    it('renders', () => {
        render(<PhotoList category='portraits'/>)
    })

    it('matches snapshot', () => {
        const {asFragment} = render(<PhotoList category='portraits' />)
        expect(asFragment()).toMatchSnapshot()
    })
})