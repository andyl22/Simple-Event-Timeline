import './App.css';
import TextSearch from './components/TextSearch';
import SelectBox from './components/SelectBox';
import GridItem from './components/GridItem';

function App() {

  return (
    <div className="App">
      <header>
        <h1>Ocean Visibility</h1>
        <section className='input-section'>
          <TextSearch className='text-search' placeholder='Enter Container ID*' info='You can copy/paste multiple container IDs at once.'/>
          <SelectBox placeholder={'Select Terminal Group'} options={['Terminal One', 'Terminal Two']}/>
          <SelectBox placeholder={'Select Terminal Name'} options={['Terminal One', 'Terminal Two']}/>
        </section>
      </header>
      <main>
        <GridItem type='RecentRequests'/>
        <GridItem type='ContainerDetails'/>
      </main>
    </div>
  );
}

export default App;
