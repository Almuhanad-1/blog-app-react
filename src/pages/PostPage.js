import Sidebar from '../Components/Sidebar'
import { useParams } from 'react-router-dom'
import useFetch from '../Hooks/useFetch'

const PostPage = () => {
    const { slug } = useParams()
    const { data: post, error, loading } = useFetch(`https://www.wp-course.site/wp-json/youthink/post?slug=${slug}`)

    return (
        <div className='d-flex flex-column'>
            <header className='header py-5 px-5 mb-3  bg-light' style={{ width: "100%" }}>
                {post && <h1>{post["data"].title}</h1>}
            </header>
            <div className='d-flex justify-content-center'>
                <main className='d-flex justify-content-between' style={{ width: "70%" }}>
                    {error && <div>could not fetch data of that resource</div>}
                    {loading && <div className='text-center fs-4 text-muted'>Loading...
                        <div class="spinner-border" role="status"></div>
                    </div>}
                    {post && (
                        <div className="d-flex flex-column justify-content-center align-items-center">
                            <img className='post-image' src={post["data"].thumbnail} alt="thumbnail post-thumbnail" />
                            <div className='d-flex justify-content-between px-4 pt-3 my-3 fw-bold single-post-info'>
                                <div>{post["data"].author}</div>
                                <div>
                                    <p><i className="bi bi-eye"></i> {post["data"].views} / <i className="bi bi-calendar-event"></i> {post["data"].date} / <i className="bi bi-tags"></i> {post["data"].tags.join(', ')}</p>
                                </div>
                            </div>
                            <div id='post-content' className="mx-4" dangerouslySetInnerHTML={{
                                __html: post["data"].content
                            }}>
                            </div>
                        </div>
                    )}
                </main>
                <Sidebar />
            </div>

        </div>
    )
}

export default PostPage