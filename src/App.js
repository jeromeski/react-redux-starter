import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
import { IntlReducer as Intl, IntlProvider } from 'react-redux-multilingual';
import Vegetables from './components/layouts/vegetables/main';
import './styles.css';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Switch>
          <Route path="/" component={Vegetables} />
          <Route exact path="/vegetables">
            {<Redirect to="/" />}
          </Route>
        </Switch>
      </BrowserRouter>
    </Provider>
  );
}
