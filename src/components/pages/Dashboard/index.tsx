import SideMenu from "../../organisms/SideMenu";
import DashboardTemplate from "../../templates/DashboardTemplate";

const DashboardPage = () =>{

    const someFetch = "https://i.pravatar.cc/100"; // Nie implementowałem w tym projekcie żadnych helperów do fetchowania


    const sidemenu = <SideMenu avatarUrl={someFetch} />

    return(
        <DashboardTemplate sidemenu={sidemenu}/>
    )
}

export default DashboardPage;