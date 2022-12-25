import { useTheme } from './providers/ThemeProvider'
import { AppRouter } from './providers/Router'
import { Sidebar } from 'widgets/Sidebar'
import { Suspense, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getUserInited, userActions } from 'entities/User'
import { classNames } from 'shared/lib/classNames/classNames'
import { Loader } from 'shared/ui/Loader/Loader'
import { Navbar } from 'widgets/Navbar'

const App: React.FC = () => {
	const { theme } = useTheme()
	const dispatch = useDispatch()
	const inited = useSelector(getUserInited)

	useEffect(() => {
		dispatch(userActions.initAuthData())
	}, [dispatch])

	return (
		<div className={classNames('app', {}, [theme])} id='app'>
			<Suspense fallback={<Loader/>}>
				<Navbar />
				<div className='contentPage'>
					<Sidebar />
					{inited && <AppRouter />}
				</div>
			</Suspense>
		</div>
	)
}
export default App
