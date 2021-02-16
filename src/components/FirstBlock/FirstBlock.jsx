import style from './firstBlock.module.scss'
import binary from '../../assets/img/binaryFortress.png'
import arrowDown from '../../assets/img/arrowDown.png'
import displayFusion from '../../assets/img/displayFusion.png'
import check from '../../assets/img/checkCentral.png'
import clipboard from '../../assets/img/clipboardFusion.png'
import fileSeek from '../../assets/img/fileSeek.png'
import voiceBot from '../../assets/img/voiceBot.png'
import wallpaper from '../../assets/img/wallpaperFusion.png'








const FirstBlock = () =>{
    return(
        <div className={style.firstBlockWrapper}>
            <div className={style.firstBlockContainer}>
                <div className={style.firstBlockItem}>
                    <img src={binary} alt="" className={style.firstBlockImg}/>
                    <span>Binary Fortress</span>
                    <img className={style.arrowDown} src={arrowDown} alt=""/>
                </div>
                <div className={style.firstBlockItem}>
                    <img src={displayFusion} alt="" className={style.firstBlockImg}/>
                    <span>DisplayFusion</span>
                </div>
                <div className={style.firstBlockItem}>
                    <img src={check} alt="" className={style.firstBlockImg}/>    
                    <span>CheckCentral</span>
                </div>
                <div className={style.firstBlockItem}>
                    <img src={clipboard} alt="" className={style.firstBlockImg}/>    
                    <span>ClipboardFusion</span>
                </div>
                <div className={style.firstBlockItem}>
                    <img src={fileSeek} alt="" className={style.firstBlockImg}/>
                    <span>FileSeek</span>
                </div>
                <div className={style.firstBlockItem}>
                    <img src={voiceBot} alt="" className={style.firstBlockImg}/>
                    <span>VoiceBot</span>
                </div>
                <div className={style.firstBlockItem}>
                    <img src={wallpaper} alt="" className={style.firstBlockImg}/>
                    <span>WallpaperFusion</span>
                </div>
            </div>
        </div>
    )
}

export default FirstBlock