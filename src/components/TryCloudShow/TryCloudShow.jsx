import style from './tryCloudShow.module.scss'
import tryCloudShowImg from '../../assets/img/tryCloudShowImg.png'
import checkmark from '../../assets/img/checkmarkCircle.png'
import Button from '../Button/Button'

const TryCloudShow = () =>{
    return (
        <div className={style.tryCloudShowWrapper}>
            <div className={style.tryCloudShowContainer}>
                <img src={tryCloudShowImg} alt="" className={style.tryCloudShowImg}/>
                <div className={style.tryCloudShowTitle}>Try CloudShow Today!</div>
                <div className={style.tryCloudShowText}>
                    Try CloudShow today, it's completely free for one device! 
                </div>
                <div className={style.tryCloudShowText}>
                    Need more devices?  
                </div>
                <div className={style.tryCloudShowButtons}>
                    <span className={style.viewDemoBtn}><Button title={'View Demo'} color={'#FFFFFF'} bgcColor={'#0460BA'} padding={'50'} margin={'0'}/></span>
                    <Button title={'Create Free Account'} color={'#0460BA'} bgcColor={'#FFFFFF'} padding={'20'} margin={'0'}/>
                </div>
                <div className={style.checkmarkBlock}>
                    <div className={style.checkmarkImgBgc}>
                        <div ></div>
                        <img src={checkmark} alt=""  className={style.checkmarkImg}/> 
                    </div>
                    <span className={style.checkmarkText}>
                        60-day Enterprise free trial
                    </span>
                </div>
                
                
                
            </div>  
        </div>
    )
}

export default TryCloudShow