import { Link } from 'react-router-dom';
import './styles/index.scss'

import { classNames } from 'shared/lib/classNames/classNames';
import { useTheme } from './providers/ThemeProvider';
import { AppRouter } from './providers/router';
import { NavBar } from 'widgets/NavBar';



function App() {
    const {theme, toggleTheme} = useTheme()
    return ( 
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Change Theme</button>
            <NavBar/>
            <AppRouter/>
        </div>
    );
}

export default App;