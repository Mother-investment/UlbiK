import { render } from '@testing-library/react'
import { StateSchema, StoreProvider } from 'app/providers/StoreProvider'
import { ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18nForTest from 'shared/config/i18nForTest/i18nForTest'

export interface ComponentRenderOptions {
	route?: string
	initialState?: DeepPartial<StateSchema>
}

export function componentRender(component: ReactNode, options: ComponentRenderOptions = {}) {
	const {
		route = '/',
		initialState
	} = options
	return render(
		<MemoryRouter initialEntries={[route]}>
			<StoreProvider initialState={initialState} >
				<I18nextProvider i18n={i18nForTest}>
					{component}
				</I18nextProvider>
			</StoreProvider>
		</MemoryRouter>
	)
}
