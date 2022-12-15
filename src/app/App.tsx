import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/Router'
import { Header } from 'widgets/Header'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { userActions } from 'entities/User'
import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader/Loader'

const App: React.FC = () => {
	const { theme } = useTheme()
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(userActions.initAuthData())
	}, [dispatch])

	return (
		<div className={classNames('app', {}, [theme])} id='app'>
			<Suspense fallback={<Loader />}>
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
