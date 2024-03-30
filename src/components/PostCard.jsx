import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'
import { FaHeart } from 'react-icons/fa'

function PostCard({ $createdAt, $id, title, featuredImage, status }) {
    const date = new Date($createdAt).toLocaleDateString('en-US')

    return (
        <Link to={`/post/${$id}`}>
            <div className="max-w-md shadow-xl rounded-xl overflow-hidden h-full bg-[#e1e5ef]">
                <img
                    className="w-full h-auto"
                    src={appwriteService.getFilePreview(featuredImage)}
                    alt={title}
                />

                <div className="sm:px-6 px-2 py-4 flex flex-wrap justify-between items-center">
                    <div className="font-bold text-xl mb-2 capitalize">{title}</div>
                    <p className="text-sm font-medium">{date}</p>
                </div>

                <div className="px-6 py-4 flex justify-between items-center">
                    <div className="text-sm">{status}</div>
                    <FaHeart className="w-5 h-5 text-red-500 mr-2" />
                </div>
            </div>
        </Link>
    )
}

export default PostCard
