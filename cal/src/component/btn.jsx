import { ACTIONS } from "../App"

export default function Btn({ dispatch, digit }) {
  return (
    <button
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } 
    })
}
    >
    {digit}
    </button>
  )
}