
import { HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux'
import Routes from './components/Routes';
import store from './state/store';


function App() {
  return (
    <Provider store={store}>

    
    <Routes/>
    
    </Provider>
   
  );
}

export default App;
