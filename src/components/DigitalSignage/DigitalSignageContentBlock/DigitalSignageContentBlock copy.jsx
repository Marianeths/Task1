import style from './digitalSignageContentBlock.module.scss'
import rightImg from '../../../assets/img/digitalSignage.png'
import checmarkCircle from '../../../assets/img/checkmarkCircle.png'
import Button from '../../Button/Button'
const DigitalSignageContentBlock = () =>{
    return(
        <div className={style.contentBlockWrapper}>
            <div className={style.contentBlockLeft}>
                <div className={style.titleLeftBlock}>
                    Digital Signage <br />
                    Made Easy
                </div>
                <div className={style.textLeftBlock}>
                    <p>Turn any screen into a digital sign in minutes with CloudShow. Trusted by businesses worldwide, see how CloudShow can help your business today.</p>
                </div>
                <div className={style.tryForFreeBlock}>
                    <Button title={'Try It Free'} color={'#FFFFFF'} bgcColor={'#0460BA'} padding={'24'} margin={'15'}/>
                    <img src={checmarkCircle} alt="checmark"/> 
                    <span className={style.checkmarkText}> 60-day Enterprise free trial</span>
                </div>
                
            </div>
            <div contentBlockRight>
                <img src={rightImg} alt=""/>
            </div>
        </div>
    )
}

export default DigitalSignageContentBlock