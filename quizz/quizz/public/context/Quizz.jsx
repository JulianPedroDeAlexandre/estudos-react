import { createContext, useContext, useReducer } from "react";
export const QuizzContext = createContext();

const initialState ={
    gameStage: "start",
    questions: [],
    currentQuestion: 0,
    score:0
};

const quizzReducer = (state, action) => {
    switch(action.type){
        default:
            return state;
    }
};

export function QuizzProvider({children}){
const [state, dispatch] = useReducer(quizzReducer, initialState);

return(
    <QuizzContext.Provider value={{ state, dispatch}}>
        {children}
    </QuizzContext.Provider>
);

}