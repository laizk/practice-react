import logo from './logo.svg';
// import './App.css';
import Table from './components/Table';
import Expressions from './components/Expressions';
import BlockofCode from './components/BlockofCode';
import Fragment from './components/Fragment';
import Conditions from './components/Conditions';
import SimpleProps from './components/SimpleProps';
import ClassExample from './components/ClassExample';
import ClassState from './components/ClassState';
import ChangeState from './components/ChangeState';
import ComponentMount from './components/ComponentMount';
import ComponentUpdate from './components/ComponentUpdate';
import ComponentGetSnapshotBeforeUpdate from './components/ComponentGetSnapshotBeforeUpdate';

function App() {
  return (
    <div className="App">

      {/* <ComponentGetSnapshotBeforeUpdate favcol='yellow' /> */}
      {/* <ComponentUpdate favcol='yellow' /> */}
      {/* <ComponentMount /> */}
      {/* <ComponentMount favcol='yellow' /> */}
      {/* <ChangeState /> */}
      {/* <ClassState /> */}
      {/* <ClassExample type='solid' /> */}
      {/* <SimpleProps color='Blue'></SimpleProps> */}
      {/* <Conditions /> */}
      <Fragment />
      {/* <BlockofCode /> */}
      {/* <Expressions /> */}
      {/* <Table /> */}
      {/* <h1>Hello World!</h1> */}
    </div>
  );
}

export default App;
