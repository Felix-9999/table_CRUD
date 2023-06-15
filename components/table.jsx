import { BiEdit, BiTrashAlt, BiX, BiCheck } from "react-icons/bi";
import { deleteUser, getUsers } from "../lib/helper";
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux'
import { toggleChangeAction, updateAction, deleteAction, toggleChangeActions } from '../redux/reducer'
import Loading from '../pages/loading';
import styles from './table.module.css';
import Form from "./form";
import { useState } from "react";
import { useQueryClient } from "react-query"

export default function Table() {


    const [first, setfirst] = useState(true)
    const formId = useSelector(state => state.app.client.formId)
    const { isLoading, isError, data, error } = useQuery('users', getUsers)
    if (isLoading) return <Loading />
    if (isError) return <div>Got Error {error}</div>

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Salary</th>
                    <th>Birthday</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody className="bg-gray-200">
                {
                    data?.map((obj, i) => <Tr {...obj} key={i} formId={formId} />)
                }
            </tbody>
        </table >
    )
}

function Tr({ _id, name, avatar, email, salary, date, status, formId }) {
    const deleteId = useSelector(state => state.app.client.deleteId)


    const visible = useSelector((state) => state.app.client.toggleForm)
    const dispatch = useDispatch()
    const queryClient = useQueryClient()
    const onUpdate = () => {
        dispatch(toggleChangeActions(_id))
        if (visible) {
            dispatch(updateAction(_id))
        }
    }

    const onDelete = () => {
        if (!visible) {
            dispatch(deleteAction(_id))
        }
    }

    const deletehandler = async () => {
        if (deleteId) {
            dispatch(deleteAction(null))
            await deleteUser(deleteId)
            await queryClient.prefetchQuery("users", getUsers)
        }
    }

    const canclehandler = async () => {
        dispatch(deleteAction(null))
    }


    return (
        <>
            <tr>
                <td data-label="Name">{name || "Unknown"}</td>
                <td data-label="Email">{email || "Unknown"}</td>
                <td data-label="Salary">{salary || "Unknown"}</td>
                <td data-label="Birthday">{date || "Unknown"}</td>

                <td data-label="Actions">
                    <button className="cursor" onClick={onUpdate} ><BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
                    </button>
                    <button className="cursor" onClick={onDelete} ><BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
                    </button>

                    {formId && formId === _id &&
                        <div className=" w-full flex justify-center  content-center items-center">
                            {
                                visible ? <Form> </Form> : <></>
                            }
                        </div>
                    }
                    {deleteId === _id && deleteId ? (
                        <div className="">
                            <div className="">
                                {DeleteComponent({ deletehandler, canclehandler })}
                            </div>
                        </div>
                    ) : <></>}

                </td>
            </tr>
        </>
    )
}

function DeleteComponent({ deletehandler, canclehandler }) {
    return (
        <div className='flex gap-2'>
            <h1 className="text-blue-500">Are you sure?</h1>
            <button onClick={deletehandler} className='flex bg-red-500 text-white px-1 py-2 hover:border-red-500 hover:text-gray-50'>
                Yes <span className='px-1'><BiX color='rgb(255 255 255)' size={15} /></span></button>
            <button onClick={canclehandler} className='flex bg-green-500 text-white px-1 py-2 hover:border-green-500 hover:text-gray-50'>
                No <span className='px-1'><BiCheck color='rgb(255 255 255)' size={15} /></span></button>
        </div>
    )
}




// flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gree-500 hover:border-green-500 hover:text-gray-50 no
