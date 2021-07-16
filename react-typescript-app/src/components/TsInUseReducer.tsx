import React, {useReducer} from 'react';

//hooks 

type Actions = 
      | {type: 'add'; text: string}
      | {
          type: 'remove'; 
          idx: number;
      };

interface Todo{
    text: String;
    complete: boolean;
}

type State = Todo[];

const TodoReducer = (state: State, action: Actions) => {
    switch (action.type) {
        case 'add':
            return [...state, {text: action.text, complete: false}];
        case 'remove':
            return state.filter((_, i) => action.idx !== i);
        default:
            return state;    
    }
};


export const TsInUseReducer: React.FC = () => {

    const [todos, dispatch] = useReducer(TodoReducer, []);

    return (
        <div>
            <button onClick={() => {
                 dispatch({type: 'add', text: 'Nidhi'});
                 dispatch({type: 'remove', idx: 5})}}>
                +
            </button>
        </div>
    );
};


