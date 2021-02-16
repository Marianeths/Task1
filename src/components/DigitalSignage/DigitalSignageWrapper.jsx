import Header from "./Header/Header"
import style from './digitalSignageWrapper.module.scss'
import DigitalSignageContentBlock from "./DigitalSignageContentBlock/DigitalSignageContentBlock copy"

const DigitalSignageWrapper = () =>{
    return(
        <div className={style.bgc}>
            <div className={style.digitalSignageContainer}>
                <Header/>
                <DigitalSignageContentBlock/>
            </div>
        </div>
            
      
    )
}

export default DigitalSignageWrapper