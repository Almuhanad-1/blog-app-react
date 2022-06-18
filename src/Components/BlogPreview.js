import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


const BlogPreview = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const [data, setData] = useState([]);
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);
    // console.log(data)
    useEffect(() => {
        loadPosts()
    }, [0]);

    const loadPosts = () => {
        setLoading(true);
        fetch(`https://www.wp-course.site/wp-json/youthink/posts?page=${currentPage + 1}`)
            .then((response) => {
                return response.json()
                    .then((json) => {
                        const newData = json?.data;
                        setData([...data, ...newData])
                        setCurrentPage(json?.meta?.current_page)
                    })
            })
            .catch(setError)
            .finally(() => setLoading(false));

    }

    return (
        <div className="d-flex flex-column">
            {error && <div>could not fetch data of that resource</div>}
            {loading && <div className='text-center fs-4 text-muted'>Loading...
            </div>}
            {(
                data.map((post, i) => (
                    <div className="post-container position-relative  d-flex justify-content-center" key={i}>
                        <img src={post.thumbnail} alt="thumbnail post-thumbnail" />
                        <div className='text-center post-info position-absolute p-3 bg-white'>
                            <Link to={`/post/${post.slug}`}><h3>{post.title}</h3></Link>
                            <p>{post.excerpt}</p>
                            <p className='fw-bold'><i className="bi bi-eye"></i> {post.views} / <i className="bi bi-calendar-event"></i> {post.date} / <i className="bi bi-tags"></i> {post.tags.join(', ')}</p>
                        </div>
                    </div>
                ))
            )}
            {!loading ? !(currentPage === 4) && <button type="button" className="btn btn-primary load-more-btn" onClick={() => loadPosts()}>Load More</button>
                : <div className='mx-auto my-4'><div className="spinner-border text-muted" role="status"></div></div>
            }
        </div>
    )
}

export default BlogPreview