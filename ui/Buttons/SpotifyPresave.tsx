import Link from 'next/link'
import React from 'react'

function SpotifyPresave() {
  return (
    <div>
        <Link href="/api/auth/signin">
        <button type="button" 
                className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800">Pre-Save on Spotify</button>
</Link>
    </div>
  )
}

export default SpotifyPresave