import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutComponent } from "../about";
import { HomeComponent } from "../home";
import { ContactInfoComponent } from "../contact";
import { PortofolioComponent } from "../portofolio";
import { ResumeComponent } from "../resume";
import { ServicesComponent } from "../services";
import { SidePanelComponent } from "../sidepanel";

const MainComponent = () => {
    return (
        <Router> 
            <Switch> 
                <Route path ="/" exact >
                    <>
                        <SidePanelComponent />
                        <main id="main">
                            <HomeComponent />      
                        </main>
                        
                    </>
                </Route>

                <Route path ="/about" exact >
                    <>
                        <SidePanelComponent />
                        <main id="main">
                            <AboutComponent />   
                        </main> 
                    </>
                </Route>

                <Route path ="/resume" exact >
                    <>
                        <SidePanelComponent />
                        <main id="main">
                            <ResumeComponent /> 
                        </main> 
                    </> 
                </Route>

                <Route path ="/portfolio" exact >
                    <>
                        <SidePanelComponent />
                        <main id="main">
                            <PortofolioComponent /> 
                        </main> 
                    </>
                </Route>

                <Route path ="/services" exact >
                    <>
                        <SidePanelComponent />
                        <main id="main">
                            <ServicesComponent/> 
                        </main> 
                    </>  
                </Route>

                <Route path ="/contact" exact >
                    <>
                        <SidePanelComponent />
                        <main id="main">
                            <ContactInfoComponent /> 
                        </main> 
                    </>
                </Route>

            </Switch>   
        </Router>
    );
}

export default MainComponent;