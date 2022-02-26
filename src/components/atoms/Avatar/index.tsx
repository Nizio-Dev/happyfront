import './style.scss';


type AvatarProps = {
    className?: string,
    avatarUrl: string
}

const Avatar = (props: AvatarProps) =>{

    const {className, avatarUrl} = props;

    return(
        <div className={`${className ? className : ''} avatar`}>
            <img className="avatar-image" src={avatarUrl} />      
        </div>
    )
}


export default Avatar;


