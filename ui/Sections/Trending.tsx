import React from 'react'
import CollectCard from 'ui/Cards/CollectCard'
import SearchInput from 'ui/Misc/SearchInput'
function Trending() {
  return (
    <div className='max-w-7xl mx-auto w-full mt-24'>
 <div className='max-w-4xl mx-auto py-8 px-12 md:px-8 '>
      <SearchInput/></div>
<div className="text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:text-gray-400 dark:border-gray-700 mb-8">
    <ul className="flex flex-wrap -mb-px">
        <li className="mr-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">Today</a>
        </li>
        <li className="mr-2">
            <a href="#" className="inline-block p-4 text-blue-600 border-b-2 border-blue-600 rounded-t-lg active dark:text-blue-500 dark:border-blue-500" aria-current="page">This Week</a>
        </li>
        <li className="mr-2">
            <a href="#" className="inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300">This Month</a>
        </li>
       
    </ul>
</div>

        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8'>
            <CollectCard/>
            <CollectCard/>
            <CollectCard/>
            <CollectCard/>
            <CollectCard/>
            <CollectCard/>
            <CollectCard/>
            <CollectCard/>
            <CollectCard/>
            <CollectCard/>
            <CollectCard/>
            <CollectCard/>
            <CollectCard/>
            <CollectCard/>
            <CollectCard/>
            <CollectCard/>
        </div>
    </div>
  )
}

export default Trending