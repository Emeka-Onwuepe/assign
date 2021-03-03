import PropTypes from 'prop-types';
import { Route, BrowserRouter, HashRouter, Switch } from 'react-router-dom';
import Cart from './cart/cart';
import Cartcounter from './cart/cartcounter';
import Products from './product/products';
import PageNotFound from "./pageNotFound"

const Routes = ({ component: component, ...rest }) => {
    return ( <HashRouter >
        <Switch >
        <Route exact path = '/' >
        <Cartcounter />
        <Products />
        </Route>
         <Route exact path = "/cart" >
        <Cart />
        </Route> 
        <Route> <PageNotFound/> </Route> 
        </Switch> 
        </HashRouter>
    );
};


Routes.propTypes = {

};


export default Routes;