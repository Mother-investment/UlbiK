import { AppLink, classNames } from "shared"
import { AppLinkTheme } from "shared/ui/appLink/AppLink"
import cls from './Navbar.module.scss'

interface NavbarProps {
    className?: string
}

export const Navbar: React.FC<NavbarProps> = ({className}) => {

    return (
        <div className={classNames(cls.Navbar, {}, [className])}>
            <AppLink theme={AppLinkTheme.SECONDARY} to='/'>Main</AppLink>
            <AppLink theme={AppLinkTheme.SECONDARY} to='/about'>About</AppLink>
        </div>
    )
}
