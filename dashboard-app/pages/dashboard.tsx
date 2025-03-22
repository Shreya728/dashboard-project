import { useState, useEffect } from 'react';
import { Loader2 } from 'lucide-react';

interface Post {
  id: number;
  title: string;
  body: string;
}

interface DashboardProps {
  initialPosts: Post[];
}

export default function Dashboard({ initialPosts }: DashboardProps) {
  const [posts, setPosts] = useState<Post[]>(initialPosts);
  const [search, setSearch] = useState('');
  const [filteredPosts, setFilteredPosts] = useState<Post[]>(initialPosts);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(true);
  const postsPerPage = 5;

  useEffect(() => {
    setLoading(true);

    const timer = setTimeout(() => {
      const filtered = posts.filter((post) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );
      setFilteredPosts(filtered);
      setCurrentPage(1);
      setLoading(false);
    }, 500); // simulate loading delay

    return () => clearTimeout(timer);
  }, [search, posts]);

  const paginatedPosts = filteredPosts.slice(
    (currentPage - 1) * postsPerPage,
    currentPage * postsPerPage
  );

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-900 text-white">
        <Loader2 className="h-12 w-12 animate-spin text-blue-500" />
      </div>
    );
  }

  return (
    <div className="p-4 sm:p-8 text-white bg-gray-900 min-h-screen">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6">Dashboard</h1>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search by title..."
        className="mb-4 p-2 w-full sm:w-1/2 rounded bg-gray-800 border border-gray-700 transition-all duration-300"
      />

      <table className="w-full border-collapse text-left">
        <thead>
          <tr>
            <th className="border-b border-gray-700 p-2">ID</th>
            <th className="border-b border-gray-700 p-2">Title</th>
          </tr>
        </thead>
        <tbody>
          {paginatedPosts.map((post) => (
            <tr
              key={post.id}
              className="hover:bg-gray-800 transition-colors duration-300 ease-in-out"
            >
              <td className="p-2 border-b border-gray-800">{post.id}</td>
              <td className="p-2 border-b border-gray-800">{post.title}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="flex flex-wrap gap-2 mt-4">
        {Array.from({ length: Math.ceil(filteredPosts.length / postsPerPage) }).map((_, i) => (
          <button
            key={i}
            className={`px-3 py-1 rounded transition-colors duration-300 ease-in-out ${
              currentPage === i + 1
                ? 'bg-blue-600'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data: Post[] = await res.json();
    return {
      props: {
        initialPosts: data,
      },
    };
  } catch (error) {
    return {
      props: {
        initialPosts: [],
      },
    };
  }
}
