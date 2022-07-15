import React, { useReducer } from "react";
// useReducer instead of useState

const ACTIONS = {
    INCREMENT: "increment",
    DECREMENT: "decrement"
};

function reducer(state, action) {
    switch(action.type){
        case ACTIONS.INCREMENT:
            return { count : state.count + 1 };
        case ACTIONS.DECREMENT:
            return { count : state.count - 1 };
        default :
            return state;
    }
};

export default function Counter() {

    // const [count, setCount] = useState(0);
    const [state, dispatch] = useReducer(reducer, {count : 0});      // alternative to useState that is needed for more complex state handlings involving multiple substates, also optimize the performance of components

    function incrementCount(){
        dispatch({type : ACTIONS.INCREMENT});
    }

    function decrementCount(){
        dispatch({type : ACTIONS.DECREMENT});
    }

    return (
        <div style= {{ width: "100%",display:"flex", justifyContent:"center"}}>
        <button style= {{ width: "20%"}} onClick={decrementCount}>-</button>
        <span style= {{width: "20%", display:"flex", justifyContent:"center",background:"blue"}}>{state.count}</span>
        <button style= {{ width: "20%"}} onClick={incrementCount}>+</button>
        </div>
    )
};