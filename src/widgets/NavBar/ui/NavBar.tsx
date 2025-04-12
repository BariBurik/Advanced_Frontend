import { Link } from "react-router-dom";
import { classNames } from "shared/lib/classNames/classNames";
import cls from './NavBar.module.scss'
import { AppLink, AppLinkTheme } from "shared/ui/AppLink/AppLink";

interface NavBarProps {
    className?: string
}

function NavBar({className}: NavBarProps) {
    return ( 
        <div className={classNames(cls.Navbar, {}, [className])}>
            <div className={classNames(cls.links)}>
                <AppLink 
                    theme={AppLinkTheme.SECONDARY} 
                    to={'/about'} 
                    className={classNames(cls.main_link)}
                >
                        About
                </AppLink>
                <AppLink 
                    theme={AppLinkTheme.SECONDARY} 
                    to={'/'}
                >
                        Main
                </AppLink>
            </div>
        </div>
    );
}

export {NavBar};