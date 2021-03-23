
import AppRouter from './routers/AppRouter'
import { Provider } from 'react-redux';
import { store } from './store/store';
import './css/App.css';

export const App = () => {
  return (
    <Provider store={ store }>
      <AppRouter />
    </Provider>
  )
}
