import style from './cloudShowBlock.module.scss'
import flexible from '../../assets/img/flexible.png'
import apps from '../../assets/img/apps.png'
import scheduling from '../../assets/img/scheduling.png'
import templates from '../../assets/img/templates.png'
import widgets from '../../assets/img/widgets.png'
import realtime from '../../assets/img/realtime.png'




const CloudShowBlock = () =>{
    return(
        <div className={style.cloudShowBlockContainer}>
            <div className={style.titleBlock}>
                <div className={style.title}>
                    CloudShow Features
                </div>
                <div className={style.text}>
                    Discover our unique features and learn more about them.
                </div>
            </div>
            <div className={style.cloudShowCards}>
                <div className={style.cloudShowCardItem}> 
                    <div className={style.cloudShowCardItemTitle}>
                        <img src={flexible} alt=""/>
                        <p>Flexible & Easy to Setup</p>
                    </div>
                    <div className={style.cloudShowCardItemText}>
                        Use CloudShow to power a menu board at your restaurant, a promo screen in reception, an analytics dashboard for production, or anything else you can think of.
                    </div>
                </div>
                <div className={style.cloudShowCardItem}> 
                    <div className={style.cloudShowCardItemTitle}>
                        <img src={apps} alt=""/>
                        <p>60+ Apps and Counting</p>
                    </div>
                    <div className={style.cloudShowCardItemText}>
                        Choose from over 60 apps to get started in no time. Pick from image slideshows, video streaming, social apps, and much more!                    </div>
                </div>
                <div className={style.cloudShowCardItem}> 
                    <div className={style.cloudShowCardItemTitle}>
                        <img src={scheduling} alt=""/>
                        <p>Scheduling</p>
                    </div>
                    <div className={style.cloudShowCardItemText}>
                        Use detailed schedules to show different content at different times of the day, or different days of the week.                    </div>
                </div>
                <div className={style.cloudShowCardItem}> 
                    <div className={style.cloudShowCardItemTitle}>
                        <img src={templates} alt=""/>
                        <p>Templates</p>
                    </div>
                    <div className={style.cloudShowCardItemText}>
                     Use templates to simplify your device management. Create a template and use it on multiple devices with one-click.                    </div>
                </div>
                <div className={style.cloudShowCardItem}> 
                    <div className={style.cloudShowCardItemTitle}>
                        <img src={widgets} alt=""/>
                        <p>Widgets</p>
                    </div>
                    <div className={style.cloudShowCardItemText}>
                        Extend your sign's layout with widgets. Widgets can overlay extra information on your sign, like the time, date, weather, and more!                    </div>
                </div>
                <div className={style.cloudShowCardItem}> 
                    <div className={style.cloudShowCardItemTitle}>
                        <img src={realtime} alt=""/>
                        <p>Realtime Sign Updates</p>
                    </div>
                    <div className={style.cloudShowCardItemText}>
                        Update your device's configuration and your digital sign is updated automatically. There's nothing to update or install each time, it works like magic!                    </div>
                </div>
                
            </div>

            <div className={style.allFeaturesLink}> <a href="#">View all features </a></div>
        </div>
    )
}

export default CloudShowBlock