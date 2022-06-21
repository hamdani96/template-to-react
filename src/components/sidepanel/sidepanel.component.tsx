import { NavigationComponent } from "./navigationmenu";
import { ProfileSectionComponent } from "./profilesection";

const SidePanelComponent = () => {
    return (
        <>
            <i className="bi bi-list mobile-nav-toggle d-xl-none"></i>
            <header id="header">
                <div className="d-flex flex-column">

                <ProfileSectionComponent /> 
                <NavigationComponent />
                
                </div>
            </header>
        </>
    );
}

export default SidePanelComponent;