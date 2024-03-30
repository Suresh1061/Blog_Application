import { useEffect, useState } from 'react'
import appwriteService from '../appwrite/config'
import { Container, PostCard, Loader, Button } from '../components'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

function Home() {
  const [posts, setPosts] = useState([])

  const authStatus = useSelector(state => state.auth.status)

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents)
      }
    })
  }, [])

  if (!authStatus) {
    return (
      <div className='w-full py-8 mt-4 text-center'>
        <Container>
          <div className='min-h-[50vh] flex flex-wrap'>
            <div className='p-2 w-full'>
              <h1 className='text-2xl sm:text-3xl font-bold mb-4 font-mono text-white'>
                SignUp / Login to read posts
              </h1>
              <div className='flex gap-4 justify-center mt-16'>
                <Link to='/signup'>
                  <Button className=' w-[100px] hover:bg-blue-500'>
                    Signup
                  </Button>
                </Link>
                <Link to='/login'>
                  <Button className=' w-[100px] hover:bg-blue-500'>
                    Login
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    )
  }

  if (posts.length === 0 && authStatus) {
    return (
      <div className='h-[70vh] flex justify-center items-center '>
        <h1 className=' text-white text-2xl sm:text-3xl'>No post available, please add your post</h1>
      </div>
    )
  }

  return (
    <div className='w-full py-2 bg-background md:pt-10'>
      <div className='w-full max-w-8xl mx-auto px-4'>
        <div className='w-full flex flex-wrap justify-center'>
          {
            posts.map((post) => (
              <div key={post.$id} className='p-2 hover:scale-95 transition-all duration-200'>
                <PostCard {...post} />
              </div>
            ))}
        </div>
      </div>
    </div>
  )
}

export default Home
