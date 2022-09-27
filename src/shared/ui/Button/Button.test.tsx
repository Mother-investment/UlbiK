import { render, screen } from '@testing-library/react'
import React from 'react'
import { Button } from './Button'

describe('button', () => {
	test('with only first param', () => {
		render(<Button>TEST</Button>)
		expect(screen.getByText('TEST')).toBeInTheDocument()
	})
})