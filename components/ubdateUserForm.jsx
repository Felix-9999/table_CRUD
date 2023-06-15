import { useReducer } from "react"
import { BiBrush } from 'react-icons/bi'
import Success from "./success"
import Bug from "./bug"
import { useQuery, useMutation, useQueryClient } from "react-query"
import { getUser, getUsers, updateUser } from "../lib/helper"
import Loading from "../pages/loading"

export default function UpdateUserForm({ formId, formData, setFormData }) {


    const queryClient = useQueryClient()
    const { isLoading, isError, data, error } = useQuery(['users', formId], () => getUser(formId))
    const UpdateMutation = useMutation((newData) => updateUser(formId, newData), {
        onSuccess: async (data) => {
            // queryClient.setQueryData('users', (old) => [data])
            queryClient.prefetchQuery('users', getUsers)
        }
    })

    if (isLoading) return <Loading />
    if (isError) return <div>Error</div>

    const { name, avatar, salary, date, email, } = data;
    const [firstname, lastname] = name ? name.split(' ') : formData;



    const handleSubmit = async (e) => {
        e.preventDefault();
        let userName = `${formData.firstname ?? firstname} ${formData.lastname ?? lastname}`;
        let updated = Object.assign({}, data, formData, { name: userName })
        UpdateMutation.mutate(updated)
    }

    return (
        <form className="grid lg:grid-cols-2 w-6/7 gap-6" onSubmit={handleSubmit}>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={firstname} name="firstname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="FirstName" />
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={lastname} name="lastname" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="LastName" />
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={email} name="email" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Email" />
            </div>
            <div className="input-type">
                <input type="text" onChange={setFormData} defaultValue={salary} name="salary" className="border w-full px-5 py-3 focus:outline-none rounded-md" placeholder="Salary" />
            </div>
            <div className="input-type">
                <input type="date" onChange={setFormData} defaultValue={date} name="date" className="border px-5 py-3 focus:outline-none rounded-md" placeholder="Salary" />
            </div>

            <button className="flex justify-center text-md w-3/6 bg-yellow-400 text-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-green-500 hover:text-green-500">
                Update.... <span className="px-1"><BiBrush size={24}></BiBrush></span>
            </button>

        </form>
    )
}