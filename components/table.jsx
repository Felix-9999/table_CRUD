import { BiEdit, BiTrashAlt } from "react-icons/bi";
import { getUsers } from "../lib/helper";
import { useQuery } from 'react-query';
import { useSelector, useDispatch } from 'react-redux'
import { toggleChangeAction, updateAction, deleteAction } from '../redux/reducer'
import Loading from '../pages/loading';
import styles from './table.module.css';

export default function Table() {

    const { isLoading, isError, data, error } = useQuery('users', getUsers)
    console.log(data);
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
                    data?.map((obj, i) => <Tr {...obj} key={i} />)
                }
            </tbody>
        </table>
    )
}

function Tr({ _id, name, avatar, email, salary, date, status }) {

    const visible = useSelector((state) => state.app.client.toggleForm)
    const dispatch = useDispatch()

    const onUpdate = () => {
        dispatch(toggleChangeAction(_id))
        if (visible) {
            dispatch(updateAction(_id))
        }
    }

    const onDelete = () => {
        if (!visible) {
            dispatch(deleteAction(_id))
        }
    }

    return (
        <tr>
            <td data-label="Name">{name || "Unknown"}</td>
            <td data-label="Email">{email || "Unknown"}</td>
            <td data-label="Salary">{salary || "Unknown"}</td>
            <td data-label="Birthday">{date || "Unknown"}</td>
            <td data-label="Actions">
                <button>
                    <button className="cursor" onClick={onUpdate} ><BiEdit size={25} color={"rgb(34,197,94)"}></BiEdit>
                    </button>
                    <button className="cursor" onClick={onDelete} ><BiTrashAlt size={25} color={"rgb(244,63,94)"}></BiTrashAlt>
                    </button>
                </button></td>
        </tr>
    )
}