import GenerateProductsList from './components/GenerateProductsList';
import GenerateProductsList2 from './components/GenerateProductsList2';
import data from './data.json';
import data2 from './data.json';

const App = () => {
  return (
    <div>
      <GenerateProductsList data={data} />
      <GenerateProductsList2 data={data2} />
    </div>
  );
};

export default App;
