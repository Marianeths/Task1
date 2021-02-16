import style from './growYourBusinnes.module.scss'
import dashboard from '../../assets/img/dashboard.png'
import calendars from '../../assets/img/calendars.png'
import weather from '../../assets/img/weather.png'
import promotional from '../../assets/img/promotional.png'




const GrowYourBusinnes = () =>{
    return(
        <div className={style.growBusinnesContainer}>
            <div className={style.growBusinnesTitle}>
                Digital Signage that grow your business
            </div>
            <div className={style.growBusinnesText}>
                Discover our unique features and learn more about them.
            </div>

            <div className={style.growBusinnesCarts}>
                <div className={style.growBusinnesCartItem}>
                    <img src={dashboard} alt=""/>
                    <div className={style.growBusinnesCartItemTitle}>
                        Dashboard
                    </div>
                </div>
                <div className={style.growBusinnesCartItem}>
                    <img src={calendars} alt=""/>
                    <div className={style.growBusinnesCartItemTitle}>
                        Calendars
                    </div>
                </div>
                <div className={style.growBusinnesCartItem}>
                    <img src={weather} alt=""/>
                    <div className={style.growBusinnesCartItemTitle}>
                        Weather
                    </div>
                </div>
                <div className={style.growBusinnesCartItem}>
                    <img src={promotional} alt=""/>
                    <div className={style.growBusinnesCartItemTitle}>
                        Promotional
                    </div>
                </div>
            </div>
        </div>
    )
}


export default GrowYourBusinnes