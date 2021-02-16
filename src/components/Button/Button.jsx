import { Children } from 'react'
import style from './button.module.scss'

const Button = (props) =>{
    return <button className={style.button} style={{color:`${props.color}`,backgroundColor:`${props.bgcColor}`, paddingLeft:`${props.padding + 'px'}`, paddingRight:`${props.padding + 'px'}`,marginRight:`${props.margin + 'px'}`}}>
        {props.title}
    </button>
}

export default Button