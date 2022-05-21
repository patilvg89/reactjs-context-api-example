import './App.css';
import LongItemList from './components/LongItemList';
import {DataProvider} from './utils/DataContext';

function App() {
  return (
    <div className="App">
      <DataProvider>
        {/* A context consumer expects a single child that is a function */}
        <LongItemList />
     </DataProvider>
    </div>
  );
}

export default App;
