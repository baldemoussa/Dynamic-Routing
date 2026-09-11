
import { blogPosts } from '../data/posts'
import { NavLink } from 'react-router-dom'


function BlogsPage() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-center">List Blog Posts</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {blogPosts.map((post) => (
          <NavLink to={`/blog/${post.slug}`} key={post.id} className="border rounded-lg p-4 block">

            <img src={post.imageUrl} alt={post.title} className="w-full h-48 object-cover rounded-md" />
            <h3 className="text-xl font-bold mt-2">{post.title}</h3>
            <p className="text-gray-600 mt-2 line-clamp-2">{post.content}</p>
          
          </NavLink>
        ))}
      </div>
    </div>
  )
}

export default BlogsPage