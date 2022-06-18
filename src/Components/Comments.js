import React from 'react'

const Comments = ({ data }) => {

    return (
        <div>
            {data.map((comment) => (
                <div className="d-flex flex-row flex-wrap" key={comment.id}>

                    <div className="" style={{ width: '6%' }}>
                        <img className='rounded-circle' src={comment.author_avatar_urls["24"]} alt="avatar" />
                    </div>
                    <div className="" style={{ width: '90%' }}>
                        <h6>{comment.author_name}</h6>
                    </div>

                    <div className="" style={{ width: '6%' }}></div>
                    <div className="col" dangerouslySetInnerHTML={{
                        __html: comment.content["rendered"]
                    }} style={{
                        width: '90%', marginTop: "-5px",
                        marginBottom: "5px"
                    }}>
                    </div>

                </div>
            ))}
        </div>
    )
}

export default Comments