import styleAvatar from './Avatar.module.css'

export function Avatar(props){
    let className = `${styleAvatar.avatar} ${props.outline ? styleAvatar.outline: ''} 
                     ${props.border ? styleAvatar.border: ''}` 
    return(
        <img
            className={className}
            src={props.src}  />
    );
}