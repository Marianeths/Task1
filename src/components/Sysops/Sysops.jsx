import style from './sysops.module.scss'
import sysops from '../../assets/img/sysops.png'
import starGrey from '../../assets/img/starGrey.png'
import starYellow from '../../assets/img/starYellow.png'
import bgImg from '../../assets/img/sysopsBgImg.png'

const Sysops = () =>{

    const getStars = (rating) =>{
        return new Array(5).fill('').map((star, index)=>{
            return rating>=index+1 ? <img src={starYellow} alt={'yellow rating star'} key={index}></img> : <img src={starGrey} alt={'grey rating star'} key={index}></img>
        })
        
        
    }

    return(
        <div className={style.sysopsContainer}>
            <div className={style.sysopsWrapper}>
                <img src={bgImg} alt="" className={style.sysopsBgImg}/>
                <div><img src={sysops} alt=""/></div>
                <div className={style.sysopsText}>
                    I use CloudShow on a TV in my ice cream shop to show what flavors we’re currently scooping through a Google spreadsheet. 
                    <br/><br/>
                    I’ve worked up a system to turn each flavor on and off using an Android phone by scanning an NFC tag on the back of each specific flavor title card that sits in the ice cream display that then triggers the Tasker app to update the background color of the cell associated with that flavor using Google Sheets APIs and on/off state tracking and some limited error handling through Tasker itself. 
                    <br/><br/>
                    I also run a Google Slideshow overlaid on the spreadsheet using the picture-in-picture function to cycle in-store ads.
                </div>
                <div className={style.sysopsRating}>
                    <span className={style.sysopsRatingName}>Brandon H </span>{getStars(3)}
                </div>
            </div>
            
        </div>
    )
}

export default Sysops

