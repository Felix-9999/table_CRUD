import React from 'react'

const TableTest = () => {
    return (
        <div className='bg-cyan-900 flex justify-center items-center h-screen'>
            <table className='shadow-2xl font-[Popins] border-2 border-cyan-200 w-6/12 overflow-hidden'>
                <thead className='text-white'>
                    <tr>
                        <th className='py-2 bg-cyan-800'>  S.no </th>
                        <th className='py-2 bg-cyan-800'>  name</th>
                        <th className='py-2 bg-cyan-800'>  lastName </th>
                        <th className='py-2 bg-cyan-800'>  mark </th>
                    </tr>
                </thead>
                <tbody className='text-cyan-900 text-center'>
                    <tr className='bg-cyan-200 cursor-pointer duration-300'>
                        <td py-3 px-6>1</td>
                        <td py-3 px-6>John Doe</td>
                        <td py-3 px-6>Patrika</td>
                        <td py-3 px-6>78</td>
                    </tr>
                    <tr className='bg-cyan-300 cursor-pointer duration-300'>
                        <td py-3 px-6>2</td>
                        <td py-3 px-6>amazon</td>
                        <td py-3 px-6>havay</td>
                        <td py-3 px-6>77</td>
                    </tr>
                    <tr className=' hover:bg-cyan-100 hover:scale-105 bg-cyan-400 cursor-pointer duration-300'>
                        <td py-3 px-6>3</td>
                        <td py-3 px-6>hasarak</td>
                        <td py-3 px-6>hankarc</td>
                        <td py-3 px-6>79</td>
                    </tr>
                    <tr className=' hover:bg-cyan-100 hover:scale-105 bg-cyan-500 cursor-pointer duration-300'>
                        <td py-3 px-6>4</td>
                        <td py-3 px-6>hasarak</td>
                        <td py-3 px-6>hankarc</td>
                        <td py-3 px-6>79</td>
                    </tr>
                    <tr className=' hover:bg-cyan-100 hover:scale-105 bg-cyan-600 cursor-pointer duration-300'>
                        <td py-3 px-6>5</td>
                        <td py-3 px-6>hasarak</td>
                        <td py-3 px-6>hankarc</td>
                        <td py-3 px-6>79</td>
                    </tr>
                    <tr className='bg-cyan-700 cursor-pointer duration-300'>
                        <td py-3 px-6>6</td>
                        <td py-3 px-6>hasarak</td>
                        <td py-3 px-6>hankarc</td>
                        <td py-3 px-6>79</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default TableTest


//----------------

// <table className="w-full table-aut   ">
// <thead>
//     <tr className="bg-gray-800 ">
//         <th className="px-16 py-2">
//             <span className="text-gray-200">Name</span>
//         </th>
//         <th className="px-16 py-2">
//             <span className="text-gray-200">Email</span>
//         </th>
//         <th className="px-16 py-2">
//             <span className="text-gray-200">Salary</span>
//         </th>
//         <th className="px-16 py-2">
//             <span className="text-gray-200">Birthday</span>
//         </th>
//         <th className="px-16 py-2">
//             <span className="text-gray-200">Status</span>
//         </th>
//         <th className="px-16 py-2">
//             <span className="text-gray-200">Actions</span>
//         </th>
//     </tr>
// </thead>
{/* <tbody className="bg-gray-200">
    {
        data.map((obj, i) => <Tr {...obj} key={i} />)
    }
</tbody> */}
// </table>