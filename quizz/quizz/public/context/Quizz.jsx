import { createContext, useContext, useReducer } from "react";
export const QuizzContext = createContext();
import questions from "../data/questions"

const initialState = {
    gameStage: "start",
    questions: [],
    currentQuestion: 0,
    score: 0
};

const quizzReducer = (state, action) => {

    switch (action.type) {
        case "START_GAME":
            return {
                ...state,
                gameStage: "playing",
                questions,
            };
        default:
            return state;
    }

};

export function QuizzProvider({ children }) {
    const [state, dispatch] = useReducer(quizzReducer, initialState);

    return (
        <QuizzContext.Provider value={{ state, dispatch }}>
            {children}
        </QuizzContext.Provider>
    );

}