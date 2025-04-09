import { Route, Routes, Link } from 'react-router-dom';
import './styles/index.scss'
import { AboutPageLazy } from './pages/AboutPage/AboutPage.Lazy';
import { MainPageLazy } from './pages/MainPage/MainPage.Lazy';
import { Suspense, useContext, useState } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './theme/ThemeContext';
import { useTheme } from './theme/useTheme';
import { classNames } from './helpers/classNames/classNames';



function App() {
    const {theme, toggleTheme} = useTheme()
    const [bool, setBool] = useState(true)
    return ( 
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change Theme</button>
            <Link to={'/about'}>About</Link>
            <Link to={'/'}>Main</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageLazy/>} />
                    <Route path={'/'} element={<MainPageLazy/>} />
                    <Route path={'*'} element={<div>404</div>} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;