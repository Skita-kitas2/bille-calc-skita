import './App.css';
import Layout from './components/Layout/Layout'
import Calculator from './containers/Calculator'
import Summary from './containers/Summary'
import {Route} from 'react-router-dom'
import { BrowserRouter, Redirect } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
    <div className='container'>
        <Layout >
          <Route path="/bille-calc-skita" exact component={Calculator}/>
          <Route path="/bille-calc-skita/podsumowanie" component={Summary}/>
          <Route render={() => <Redirect to={{pathname: "/bille-calc-skita"}} />} />
        </Layout>
    </div>
    </BrowserRouter>
  );
}

export default App;
