import { useReducer } from "react";

const reducer = (state, action) => {
    if(action.type === 'deposit') {
        return {amount: state.amount + 20};
    }
    if(action.type === 'withdraw') {
        return {amount: state.amount - 10};
    }
}

function ReducerHook() {
    const intialState = {'amount':100};
    const [state, dispatch] = useReducer(reducer, intialState);
    
    return (
        <div>
            <h3>Balance: {state.amount}</h3>
            <button onClick={()=>dispatch({type:'deposit'})}>Deposit</button>
            <button onClick={()=>dispatch({type:'withdraw'})}>Withdraw</button>
        </div>
    );
}

export default ReducerHook;