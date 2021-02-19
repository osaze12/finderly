
import './App.css';
import Main from './components/main/Main';
import {Provider} from 'react-redux';
import store from './components/store/index';

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Main />
      </div>
    </Provider>
  );
}

export default App;
