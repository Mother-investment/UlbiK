import './styles/index.scss'
import { useTheme } from './providers/ThemeProvider'
import { classNames } from 'shared'
import { AppRouter } from './providers/Router'
import { Navbar } from 'widgets/Navbar'
import { Sidebar } from 'widgets/Sidebar'

const App: React.FC = () => {
    const { theme } = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className='contentPage'>
                <Sidebar />
                <AppRouter />
            </div>
        </div>
    )
}
export default App
