'use client';
import { useTheme } from '@/components/ThemeContext';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import PostTable from '@/components/PostTable';
import Spinner from '@/components/ui/spinner';

export default function DashboardClient() {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const { dark, toggleDark } = useTheme();
  const postsPerPage = 5;

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      router.push('/login');
    }
  }, [router]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await res.json();
        setPosts(data);
      } catch (error) {
        alert('Failed to fetch data.');
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const filtered = posts.filter((post) => {
    const title = post?.title?.toString().toLowerCase() || '';
    const id = post?.id?.toString() || '';
    return title.includes(search.toLowerCase()) || id.includes(search);
  });

  const totalPages = Math.ceil(filtered.length / postsPerPage);
  const currentPosts = filtered.slice((page - 1) * postsPerPage, page * postsPerPage);

  return (
    <div className={dark ? 'dark' : ''}>
      <div className="flex min-h-screen bg-white text-black dark:bg-gray-900 dark:text-white transition-colors duration-300 overflow-hidden">
        {/* Sidebar */}
        <Sidebar />

        {/* Main content area */}
        <div className="flex flex-col flex-1 w-full h-screen overflow-hidden">
          {/* Header */}
          <Header dark={dark} toggleDark={toggleDark} />


          {/* Page content */}
          <main className="flex-1 p-6 overflow-y-auto">
            <div className="mb-4 flex justify-between items-center flex-wrap gap-4">
              <input
                type="text"
                placeholder="Search by title or ID"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="p-2 border rounded w-full sm:w-1/2 text-black dark:text-black"
              />
            </div>

            {loading ? (
              <Spinner />
            ) : (
              <>
                <PostTable posts={currentPosts} />
                <div className="mt-4 flex flex-wrap gap-2">
                  {Array.from({ length: totalPages }, (_, i) => (
                    <button
                      key={i}
                      onClick={() => setPage(i + 1)}
                      className={`px-3 py-1 rounded border ${
                        page === i + 1
                          ? 'bg-blue-500 text-white'
                          : 'bg-white text-black dark:bg-gray-700 dark:text-white'
                      }`}
                    >
                      {i + 1}
                    </button>
                  ))}
                </div>
              </>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
