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
          <Route path="/" exact component={Calculator}/>
          <Route render={() => <Redirect to={{pathname: "/"}} />} />
          <Route path="/podsumowanie" component={Summary}/>
        </Layout>
    </div>
    </BrowserRouter>
  );
}

export default App;