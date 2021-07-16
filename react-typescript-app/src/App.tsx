import './App.css';
import {PassProps} from './components/PassProps';
import {TsInUseState} from './components/TsInUseState';
import {TsInUseRef} from './components/TsInUseRef';
import {TsInUseReducer} from './components/TsInUseReducer';
import {TsInTypeProps} from './components/TsInTypeProps';

const App: React.FC = () => {
  return (
    <div>
      {/* how to pass props */}
      <PassProps text='Ram' objPerson={{firstName: 'Nidhi', lastName: 'Verma'}} ok={true}/>
      {/* Hooks */}

      {/* useState */}
      <TsInUseState/>
      {/* useRef */}
      <TsInUseRef handleChange={e => {e.target}}/>
      {/* useReducer */}
      <TsInUseReducer/>
      {/*  */}
      <TsInTypeProps>
        {
          (count, setCount) => (
          <div>
            {count}
            <button onClick={() => setCount(count + 1)}>
              +
            </button>
          </div>
            )
        }
        </TsInTypeProps>
    </div>
  );
}

export default App;


//ctr + shift : know what props u have to pass


//userSnippets > add own snippets