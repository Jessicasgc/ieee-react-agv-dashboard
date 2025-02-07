import { LocaleConsumer } from '../contexts/LocaleContext';
import LocaleToggle from './ToggleLocale';
import ThemeToggle from './ToggleTheme';


function Navigation(){
    return (
        <LocaleConsumer>
            {() => {
                return (
                    // <nav className='header-navigation'>
                        // <ul>
                    <div className='header-navigation'>
                        <>
                            <LocaleToggle/>
                            <ThemeToggle/>
                        </>
                    </div>
                        
                            // <li><LocaleToggle/></li>
                            // <li><ThemeToggle/></li>
                        // </ul>
                    // </nav>
                )
            }
        }
        </LocaleConsumer>
    )
}
  

export default Navigation;
