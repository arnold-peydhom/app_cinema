import {BrowserRouter,Route,Switch} from 'react-router-dom';
import AcceuilHeader from '../vue/header/AcceuilHeader';
import AcceuilBody from '../vue/body/AcceuilBody';
import InscriptionBody from '../vue/body/InscriptionBody';
function RouteNav(){
    return(
        <BrowserRouter>
          
            <Switch>
                <Route exact path='/'component={AcceuilBody}/>
                <Route path='/InscriptionBody'component={InscriptionBody}/> 
            </Switch>
        </BrowserRouter>
    )
}

export default RouteNav;