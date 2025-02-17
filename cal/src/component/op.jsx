import { ACTIONS } from "../App"

export default function Op({ dispatch, operation }) {
  return (
    <button
      onClick={() =>
        dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } 
        })
      }
    >
    {operation}
    </button>
  )
}