import { fireEvent, screen, waitFor } from '@testing-library/react'
import { Sidebar } from 'widgets/Sidebar'
import { componentRender } from 'shared/lib/tests/componentRender/componentRender'
import { StateSchema } from 'app/providers/StoreProvider'


describe('Sidebar', () => {
	test('with only first param', async () => {
		componentRender(<Sidebar />)
		await waitFor(() => {
			expect(screen.getByTestId('sidebar')).toBeInTheDocument()
		})
	})
	test('test toggle', async () => {
		componentRender(<Sidebar />)
		const toggleBtn = screen.getByTestId('sidebar-toggle')
		await waitFor(() => {
			expect(screen.getByTestId('sidebar')).toBeInTheDocument()
			fireEvent.click(toggleBtn)
			expect(screen.getByTestId('sidebar')).toHaveClass('collapsed')
		})
	})
})