import React from 'react'
import useFetch from '../Hooks/useFetch'
import Comments from './Comments';

const Sidebar = () => {

    const { data, error, loading } = useFetch('https://www.wp-course.site/wp-json/wp/v2/comments');

    return (
        <aside >
            <h3>Latest Comments</h3>
            {error && <div>could not fetch data of that resource</div>}
            {loading && <div className='text-center fs-4 text-muted'>Loading...</div>}
            {data && <Comments data={data} />}
        </aside>
    )
}

export default Sidebar