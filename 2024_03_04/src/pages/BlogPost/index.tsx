import {useParams} from "react-router-dom"
import {usePost} from "../../service/usePost.ts";
import {useComments} from "../../service/useComments.ts";
// import {useEffect, useState} from "react";
// import {Post} from "../../types";

function BlogPost() {
  const { id } = useParams<{ id?: string }>() || {}

  const {data: post, isLoading: loading, error} = usePost(id || '')
  const {data: comments, isLoading: commentsLoading, error: commentsError} = useComments(id || '')
  console.log(comments)
  /*
  const [post, setPost] = useState<Post | null>(null)
  const [loading, setLoading] = useState<boolean>(false)
  const [error, setError] = useState<boolean>(false)

  useEffect(() => {
    setLoading(true)
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(response => response.json())
      .then((post: Post) => {
        setPost(post)
      })
      .catch(() => {
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [id])
   */

  return (
      <div>
        {loading && <>Loading...</>}
        {error && <>Error</>}
        {post &&
            <div>
              <h1>{post.title}</h1>
              <p>{post.body}</p>
            </div>
        }
        {commentsLoading && <p>Comments are loading...</p>}
        {commentsError && <>Error</>}
        {comments?.map(comment => (
            <p>{comment.name} {comment.email} {comment.body}</p>
        ))}


      </div>
  )
}

export default BlogPost