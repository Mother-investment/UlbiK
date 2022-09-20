import { AppLink, classNames } from 'shared'
import { AppLinkTheme } from 'shared/ui/AppLink/AppLink'
import { ThemeSwitcher } from 'widgets/ThemeSwitcher'
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = ({ className }) => {
    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <ThemeSwitcher />
            <nav className={cls.navigation}>
                <AppLink className={cls.navigationItem} theme={AppLinkTheme.SECONDARY} to='/'>
                    Main
                </AppLink>
                <AppLink className={cls.navigationItem} theme={AppLinkTheme.SECONDARY} to='/about'>
                    About
                </AppLink>
            </nav>
        </div>
    )
}
