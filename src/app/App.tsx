import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared'
import { AppRouter } from './providers/Router'
import { Header } from 'widgets/Header'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'

const App: React.FC = () => {
	const { theme } = useTheme()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(userActions.initAuthData())
	}, [dispatch])

	return (
		<div className={classNames('app', {}, [theme])} id='app'>
			<Suspense fallback=''>
				<Header />
				<div className='contentPage'>
					<Sidebar />
					<AppRouter />
				</div>
			</Suspense>
		</div>
	)
}
export default App
