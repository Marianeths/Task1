import style from './footer.module.scss'
import cloudShowFooter from '../../assets/img/cloudShowFooter.png'
import facebookFooter from '../../assets/img/facebookFooter.png'
import linkedinFooter from '../../assets/img/linkedinFooter.png'
import instagramFooter from '../../assets/img/instagramFooter.png'
import twitterFooter from '../../assets/img/twitterFooter.png'
import Button from '../Button/Button'




const Footer = () =>{
    return(
        <footer className={style.footerWrapper}>
            <div className={style.footerContainer}>
                <div className={style.footerLogoBlock}>
                    <img src={cloudShowFooter} alt=""/>
                </div>
                <div className={style.footerNavBlock}> 
                    <div className={style.footerNavItem}>
                        <div className={style.footerNavItemTitle}>
                            Product
                        </div>
                        <div>
                            Features
                        </div>
                        <div>
                            How it Works
                        </div>
                        <div>
                            Devices & Downloads
                        </div>
                        <div>
                            Apps & Content
                        </div>
                        <div>
                            Pricing
                        </div>
                    </div>
                    <div className={style.footerNavItem}>
                        <div className={style.footerNavItemTitle}>
                            Others
                        </div>
                        <div>
                            Support
                        </div>
                        <div>
                            FAQ
                        </div>
                        <div>
                            Status
                        </div>
                        <div>
                            Privacy Policy
                        </div>
                        <div>
                            Terms of Service
                        </div>
                    </div>
                    <div className={style.footerNavItem}>
                        <div className={style.footerNavItemTitle}>
                            <p>Social Media</p>
                        
                        </div>
                        <div>
                            <img src={facebookFooter}/>
                            <span>Facebook</span>
                            
                        </div>
                        <div>
                            <img src={linkedinFooter}/>
                            <span>Linkedin</span>
                            
                        </div>
                        <div>
                            <img src={instagramFooter}/>
                            <span>Instagram</span>
                        </div>
                        <div>
                            <img src={twitterFooter}/>
                            <span>Twitter</span>
                        </div>
                    
                    </div>
                </div>
                <div>
                    <div className={style.footerButtons}>
                            <span className={style.footerFirstButton}><Button title={'Login'} color={'#0460BA'} bgcColor={'#FFFFFF'} padding={'40'} margin={'0'}/></span>
                        <Button title={'Free Trial'} color={'#FFFFFF'} bgcColor={'#0460BA'} padding={'27'} margin={'0'}/>
                    </div>
                

                </div>
            </div>
        </footer>
    )
}

export default Footer