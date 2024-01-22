import { useEffect, useState } from "react"
import { redirect, useParams } from "react-router-dom"
import { Post } from "../../types"

export default function BlogPost() {
  const { id } = useParams<{id: string}>()

  const [post, setPost] = useState<Post | null>(null)
  const [loadingPost, setLoadingPost] = useState<boolean>(false)
  const [errorPost, setErrorPost] = useState<string | null>(null)

  useEffect(() => {
    setLoadingPost(true)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => res.json() as Promise<Post>)
      .then((data) => {
        setPost(data)
      })
      .catch((err) => {
        setErrorPost(err.message)
      })
      .finally(() => {
        setLoadingPost(false)
      })
  }, [id])

  // if(!id) {
  //   return redirect('/blog')
  // }

  return(
    <div>
      {loadingPost ? (<p>Loading...</p>)
        : (
          errorPost || !post
            ? (<p>{errorPost || "nieznany błąd"}</p>)
            : (
              <div>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            )
        )
      }
    </div>
  )
}