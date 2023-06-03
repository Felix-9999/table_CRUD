import { useSelector } from "react-redux";
import AdduserForm from "./addUserForm";
import UpdateUserForm from "./ubdateUserForm";
import { useReducer } from "react";
const formReducer = (state, event) => {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}

export default function Form() {
    const [formData, setFormData] = useReducer(formReducer, {})
    const formId = useSelector(state => state.app.client.formId)

    return (
        <div className="container mx-auto">
            {formId ? UpdateUserForm({ formId, formData, setFormData }) : AdduserForm({ formData, setFormData })}
        </div>
    )

}