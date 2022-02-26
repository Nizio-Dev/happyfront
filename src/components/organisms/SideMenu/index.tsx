import { NavLink } from 'react-router-dom';
import Avatar from '../../atoms/Avatar';
import Icon from '../../atoms/Icon';
import '../../utility/_spacing.scss';
import './style.scss';

type SideMenuProps = {
    className?: string,
    avatarUrl: string
}

const SideMenu = (props: SideMenuProps) =>{

    const {className, avatarUrl} = props;

    return(
        <div className={`${className ? className : ''}side-menu`}>

            <Avatar className="mt-4 mb-4" avatarUrl={avatarUrl}/>

            <div className="links">
                <NavLink end to="">
                    <Icon icon="account"/>
                    Account
                </NavLink>
                <NavLink to="messages">
                    <Icon icon="messages"/>
                    Messages
                </NavLink>
                <NavLink to="groups">
                    <Icon icon="groups"/>
                    Groups
                </NavLink>
                <NavLink to="statistics">
                 <Icon icon="statistics"/>
                    Statistics
                </NavLink>
                <NavLink to="/">
                    <Icon icon="logout"/>
                    Logout
                </NavLink>
            </div>

            <div className="decoration-bottom-left-triangle"/>
            <div className="decoration-top-right-triangle"/>
        </div>
    )
}


export default SideMenu;