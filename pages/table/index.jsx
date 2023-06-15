import Head from "next/head"
import { BiUserPlus, BiX, BiCheck } from "react-icons/bi"
import Table from "../../components/table"
import Form, { Forms } from "../../components/form"
import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggleChangeAction, deleteAction } from "../../redux/reducer"
import { deleteUser, getUsers } from "../../lib/helper"
import { useQueryClient } from "react-query"

const Home = () => {

  const vidible = useSelector((state) => state.app.client.toggleForm)
  const vidibles = useSelector((state) => state.app.client.toggleForms)


  const deleteId = useSelector(state => state.app.client.deleteId)
  const queryClient = useQueryClient()
  const dispatch = useDispatch()

  const handler = () => {
    dispatch(toggleChangeAction())
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
    <section className="relative">
      <Head>
        <title>CRUD</title>
      </Head>

      {/* {deleteId ? (
        <div className="w-full h-full absolute  z-10 flex justify-center items-center">
          <div className="w-2/5 h-2/5 bg-gray-500 flex justify-center items-center rounded-lg">
            {DeleteComponent({ deletehandler, canclehandler })}
          </div>
        </div >
      ) : <></>} */}


      <main className="py-5 relative" >
        <h1 className='text-xl md:text-5xl text-center font-bold py-10'>Employ Managment</h1>
        <div className="container mx-auto flex justify-between py-5 border-b ">
          <div className="left flex gap-3">
            <button onClick={handler} className="flex bg-indigo-500 to-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-indigo-800">Add Employee <span size={23} c="true"><BiUserPlus size={23}></BiUserPlus></span></button>

          </div>

        </div>
        {/* collapsable form */}
        <div className="container mx-auto py-5  ">
          {
            vidibles ? <Forms> </Forms> : <></>
          }
        </div>
        {/* table */}
        <Table></Table>

      </main >
      {/* overflow-x-scroll md:overflow-y-hidden */}
    </section >
  )
}

export default Home

function DeleteComponent({ deletehandler, canclehandler }) {
  return (
    <div className='flex gap-5'>
      <button>Are you sure?</button>
      <button onClick={deletehandler} className='flex bg-red-500 text-white px-4 py-2 border rounded-md hover:bg-rose-500 hover:border-red-500 hover:text-gray-50'>
        Yes <span className='px-1'><BiX color='rgb(255 255 255)' size={25} /></span></button>
      <button onClick={canclehandler} className='flex bg-green-500 text-white px-4 py-2 border rounded-md hover:bg-gree-500 hover:border-green-500 hover:text-gray-50'>
        No <span className='px-1'><BiCheck color='rgb(255 255 255)' size={25} /></span></button>
    </div>
  )
}