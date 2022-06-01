import { useState } from 'react'
import { motion } from 'framer-motion'
import { Items } from '../Items'
const FilteredItem = () => {
    const [FilteredItem, setFilteredItem] = useState(Items)
    const filterTheItemsArray = (name: string) => {
        const updatedFilterdItems = Items.filter((item) => item.name === name)
        setFilteredItem(updatedFilterdItems)
    }
    return (
        <section id='services' className='flex flex-col my-20'>
            <h1 className='text-center text-gray-800 text-4xl font-bold'>This is what we can do for you
            </h1>
            <p className='text-center text-gray-600 my-4'>Who are in extremely love with eco friendly system..
            </p>
            <div className=' flex space-x-16 font-semibold text-gray-800 text-md justify-center my-16'>
                <button className='hover:text-[#8ab92d] border-b-0 border-black hover:border-b-2 transition' onClick={() => setFilteredItem(Items)}>ALL</button>
                <button className='hover:text-[#8ab92d] border-b-0 border-black hover:border-b-2 transition' onClick={() => filterTheItemsArray('Agency')}>Agency</button>
                <button className='hover:text-[#8ab92d] border-b-0 border-black hover:border-b-2 transition' onClick={() => filterTheItemsArray('Personal')}>Personal</button>
                <button className='hover:text-[#8ab92d] border-b-0 border-black hover:border-b-2 transition' onClick={() => filterTheItemsArray('Portal')}>Portal</button>
                <button className='hover:text-[#8ab92d] border-b-0 border-black hover:border-b-2 transition' onClick={() => filterTheItemsArray('Corporate')}>Corporat</button>
            </div>
            <motion.div
                className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 place-items-center gap-y-4 my-8'>
                {FilteredItem.map((item, i) => (
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1, 1.1, 1] }}
                        transition={{}}
                        key={i} >
                        <div className='rounded-lg space-y-2'>
                            <img src={item.image} alt={item.name} />
                            <h1 className='text-center text-gray-700 text-md font-bold'>{item.description}</h1>
                            <p className='text-center text-gray-500 text-sm'>{item.name}</p>
                        </div>
                    </motion.div>
                ))}
            </motion.div>
        </section>
    )
}

export default FilteredItem