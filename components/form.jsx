import AdduserForm from "./addUserForm";
import UpdateUserForm from "./ubdateUserForm";


export default function Form() {

    const flag = true
    return (
        <div className="container mx-auto">
            {flag ? <AdduserForm /> : <UpdateUserForm />}
        </div>
    )

}