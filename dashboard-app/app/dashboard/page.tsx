'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

interface Post {
  id: number
  title: string
  body: string
}

export default function DashboardPage() {
  const router = useRouter()
  const [posts, setPosts] = useState<Post[]>([])
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([])
  const [search, setSearch] = useState('')
  const [filterId, setFilterId] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  const [error, setError] = useState('')
  const POSTS_PER_PAGE = 5

  // Check auth on mount
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (!token) {
      router.push('/login')
    }
  }, [])

  // Fetch posts
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts')
        if (!res.ok) throw new Error('Failed to fetch posts')
        const data = await res.json()
        setPosts(data)
        setFilteredPosts(data)
      } catch (err: any) {
        setError(err.message || 'An error occurred')
      }
    }

    fetchPosts()
  }, [])

  // Handle search/filter
  useEffect(() => {
    let filtered = posts

    if (search) {
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      )
    }

    if (filterId) {
      filtered = filtered.filter((post) => post.id === parseInt(filterId))
    }

    setFilteredPosts(filtered)
    setCurrentPage(1)
  }, [search, filterId, posts])

  const indexOfLastPost = currentPage * POSTS_PER_PAGE
  const indexOfFirstPost = indexOfLastPost - POSTS_PER_PAGE
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost)
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE)

  const handleLogout = () => {
    localStorage.removeItem('token')
    router.push('/login')
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-4">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <button
          onClick={handleLogout}
          className="bg-red-600 hover:bg-red-700 px-4 py-2 rounded text-sm"
        >
          Logout
        </button>
      </div>

      {/* Search & Filter */}
      <div className="flex gap-4 mb-4">
        <input
          type="text"
          placeholder="Search by title"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="px-3 py-2 rounded bg-gray-800 text-white w-1/2"
        />
        <input
          type="number"
          placeholder="Filter by ID"
          value={filterId}
          onChange={(e) => setFilterId(e.target.value)}
          className="px-3 py-2 rounded bg-gray-800 text-white w-1/4"
        />
      </div>

      {/* Error */}
      {error && <p className="text-red-500 mb-4">{error}</p>}

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full table-auto border border-gray-700">
          <thead className="bg-gray-800">
            <tr>
              <th className="px-4 py-2 border-b border-gray-700">ID</th>
              <th className="px-4 py-2 border-b border-gray-700">Title</th>
              <th className="px-4 py-2 border-b border-gray-700">Body</th>
            </tr>
          </thead>
          <tbody>
            {currentPosts.map((post) => (
              <tr key={post.id} className="hover:bg-gray-800">
                <td className="px-4 py-2 border-b border-gray-700">{post.id}</td>
                <td className="px-4 py-2 border-b border-gray-700">{post.title}</td>
                <td className="px-4 py-2 border-b border-gray-700">{post.body}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-center gap-2 mt-6">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(i + 1)}
            className={`px-3 py-1 rounded ${
              currentPage === i + 1 ? 'bg-blue-600' : 'bg-gray-700'
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  )
}
