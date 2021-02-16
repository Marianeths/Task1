import style from './logosBlock.module.scss'
import instagram from '../../assets/img/instagram.png'
import twitter from '../../assets/img/twitter.png'
import cnn from '../../assets/img/cnn.png'
import facebook from '../../assets/img/facebook.png'



const LogosBlock = () =>{
    return(
        <div className={style.logosBlockContainer}>
            <div className={style.logoItem}>
                <img src={instagram} alt=""/>
            </div>
            <div className={style.logoItem}>
                <img src={twitter} alt=""/>
            </div>
            <div className={style.logoItem}>
                <img src={cnn} alt=""/>
            </div>
            <div className={style.logoItem}>
                <img src={facebook} alt=""/>
            </div>
            
            
            
        </div>
    )
}

export default LogosBlock