import Button from '../../Button/Button'
import style from './header.module.scss'
import logo from '../../../assets/img/logo.png'
import { useState } from 'react'
const Header = () =>{
    const [menuActive, setMenuActive] = useState(false)

    const handleClick = () =>{
        setMenuActive(!menuActive)
    }
    return(
        <header className={style.headerWrapper}>
            <img src={logo} alt="logo" className={style.headerImg}/>
            <nav className={style.headerNav}>
                <a>Features</a>
                <a>How it Works</a>
                <a>{'Devices & Downloads'}</a>
                <a>{'Apps & Content'}</a>
                <a>Pricing</a>
            </nav>

            <div className={style.headerButtons}>
                <Button title={'Login'} color={'#0460BA'} bgcColor={'#FFFFFF'} padding={'35'} margin={'15'}/>
                <Button title={'Free Trial'} color={'#FFFFFF'} bgcColor={'#0460BA'} padding={'22'} margin={'0'}/>
            </div>

        
            <div className={menuActive ? style.headerMenu + ' ' + style.menuActive : style.headerMenu} onClick={()=>handleClick()}>
                
                <span ></span>
                <span ></span>
                <span ></span>

                <nav className={menuActive ? style.headerMenuNav + ' ' + style.activeNavMenu : style.headerMenuNav}>
                    <a>Features</a>
                    <a>How it Works</a>
                    <a>{'Devices & Downloads'}</a>
                    <a>{'Apps & Content'}</a>
                    <a>Pricing</a>
                    <Button title={'Login'} color={'#0460BA'} bgcColor={'#FFFFFF'} padding={'5'} margin={'0'}/>
                    <Button title={'Free Trial'} color={'#0460BA'} bgcColor={'#FFFFFF'} padding={'2'} margin={'0'}/>
                </nav>
            </div>
        
            
            

        </header>
    )
}

export default Header