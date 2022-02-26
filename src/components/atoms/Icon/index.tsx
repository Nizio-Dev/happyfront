import './style.scss';

type IconProps = {
    icon: string;
}

const Icon = (props: IconProps) => {

    const {icon} = props;
    
    return (
        <img className="icon" alt={`${icon}-icon`} src={`images/svg/${icon}.svg`}/>
    )

}

export default Icon;