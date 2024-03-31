import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container, Loader } from "../components/index";
import parse from "html-react-parser";
import { useSelector } from "react-redux";
import { FaEdit, FaRegEdit } from "react-icons/fa";
// import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";

function Post() {
  const [post, setPost] = useState(null)
  const { slug } = useParams()
  const navigate = useNavigate()

  // console.log(post)
  const userData = useSelector(state => state.auth.userData)
  const isAuthor = post && userData ? post.userId === userData.$id : false

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post)
        else navigate('/')
      })
    } else navigate('/')
  }, [slug, navigate])

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then(async (status) => {
      if (status) {
        await appwriteService.deleteFile(post.featuredImage)
        navigate('/')
      }
    })
  }

  window.scrollTo(0, 0);

  if (!post) {
    return (
      <div className='h-[70vh] flex justify-center items-center'>
        <Loader />
      </div>
    )
  }

  return post ? (
    <div className="py-8">
      <Container>
        <div className="max-w-5xl mb-4  rounded-xl p-2">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl"
          />
        </div>
        <div className=" text-white px-3 max-w-5xl">
          <div className=" flex justify-between items-center">
              <h1 className="md:text-3xl text-2xl font-bold py-2 capitalize">{post.title}</h1>
            {isAuthor && (
              <div className=" flex gap-4">
                <Link to={`/edit-post/${post.$id}`}>
                  <FaRegEdit
                    size={22}
                    className=" cursor-pointer text-violet-600 hover:scale-110"
                  />
                </Link>
                <MdDelete
                  size={23}
                  onClick={deletePost}
                  className=" cursor-pointer text-red-600 hover:scale-110"
                />
              </div>
            )}
          </div>
          <div className="browser-css sm:text-xl text-sm text-slate-300 capitalize">
            {parse(post.content)}
          </div>
        </div>
      </Container>
    </div>
  ) : null;
}

export default Post
