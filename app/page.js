import React from 'react'

const page = () => {
  return (
    <div className='h-screen w-full flex flex-col items-center justify-center gap-9'>
      <h1 className='text-4xl font-bold text-gray-900'>FORM HANDLER</h1>
      <form className='flex gap-5'>
        <input className='border border-gray-400 p-4 rounded-xl' type='text' placeholder='Actual Cost' name='actual_cost'/>
        <input className='border border-gray-400  p-4 rounded-xl' type='text' placeholder='Supplier Cost' name='supplier_cost'/>
        <button type='submit' className='p-4 bg-orange-600 rounded-xl text-white font-semibold'>Submit</button>
      </form>
    </div>
  )
}

export default page