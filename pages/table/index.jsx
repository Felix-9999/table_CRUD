import Head from "next/head"
import { BiUserPlus } from "react-icons/bi"
import Table from "../../components/table"
import Form from "../../components/form"
import { useState } from "react"
const Home = () => {

  const [vidible, setvidible] = useState(false)


  const handler = () => {
    setvidible(vidible ? false : true)
    // setvidible(vidible) // or 
  }

  return (
    <section>
      <Head>
        <title>CRUD</title>
      </Head>

      <main className="py-5  ">
        <h1 className='text-xl md:text-5xl text-center font-bold py-10'>Employ Managment</h1>
        <div className="container mx-auto flex justify-between py-5 border-b">
          <div className="left flex gap-3">
            <button onClick={handler} className="flex bg-indigo-500 to-white px-4 py-2 border rounded-md hover:bg-gray-50 hover:border-indigo-500 hover:text-indigo-800">Add Employee <span size={23}><BiUserPlus size={23}></BiUserPlus></span></button>
          </div>



        </div>
        {/* collapsable form */}
        <div className="container mx-auto py-5">
          {
            vidible ? <Form> </Form> : <></>

          }

        </div>
        {/* table */}
        <Table></Table>

      </main>

    </section >
  )
}

export default Home