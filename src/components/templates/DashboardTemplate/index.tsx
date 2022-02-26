import { ReactNode } from 'react';
import { Route, Routes } from 'react-router-dom';
import './style.scss';

type DashboardTemplateProps = {
    sidemenu: ReactNode
}

const DashboardTemplate = (props:DashboardTemplateProps) =>{

    const {sidemenu} = props;

    return(
        <div className="dashboard-wrapper">
            {sidemenu}
            <div className="content">
                <Routes>
                    <Route path="/" element={<div className="showcase">Account</div>}/>
                    <Route path="/messages" element={<div className="showcase">Messages</div>}/>
                    <Route path="/groups" element={<div className="showcase">Groups</div>}/>
                    <Route path="/statistics" element={<div className="showcase">Statistics</div>}/>
                </Routes>
            </div>
        </div>
    )
}


export default DashboardTemplate;