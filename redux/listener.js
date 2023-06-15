import { createListenerMiddleware } from "@reduxjs/toolkit";
import { toggleChangeAction,toggleChangeActions, updateAction } from "./reducer";


const listenerMiddleware = createListenerMiddleware()

listenerMiddleware.startListening({
    actionCreator: toggleChangeAction,
    actionCreator: toggleChangeActions,

    effect : async (action, listenerApi) => {
        listenerApi.dispatch(updateAction(action.payload))
    }
})

export default listenerMiddleware