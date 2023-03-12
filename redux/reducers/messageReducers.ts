import { TOGGLE_SIDEBAR, SHOW_MODAL_BOX } from "../actions/action";

const InitialState = {
  messages: [
    {
      id: "1a",
      author: "Peace",
      message: "Hello everybody ?",
    },
    {
      id: "1c",
      author: "Blyncnov",
      message: "I dey daddy mi ?",
    },
  ],
};

export const modeReducers = (state = InitialState, action: any) => {
  switch (action.type) {
    case "SEND_MESSAGE":
      return {
        ...state,
        messages: state.messages.push(action.payload),
      };
    default:
      return state;
  }
};

export default modeReducers;
