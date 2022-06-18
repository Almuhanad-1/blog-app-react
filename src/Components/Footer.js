import { useRef, useState } from 'react'

const Footer = () => {

    const email = useRef()
    const [loading, setLoading] = useState()
    const [response, setResponse] = useState({})

    const submitHandler = (e) => {
        e.preventDefault();
        setLoading(true)
        fetch('https://www.wp-course.site/wp-json/youthink/subscribe', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email.current.value })
        }).then((res) => {
            res.json().then((data) => {
                setResponse(data)
                setLoading(false)
            })
        })
        response && setTimeout(() => setResponse({}), 5000);
    }




    return (
        <div>
            <footer className='pt-5 bg-light'>
                <div className='container'>
                    <div className='row'>
                        <div className="col-md-2">
                            <h4>Section</h4>
                            <p>Home</p>
                            <p>Features</p>
                            <p>Pricing</p>
                            <p>FAQs</p>
                            <p>About</p>
                        </div>
                        <div className="col-md-2">
                            <h4>Section</h4>
                            <p>Home</p>
                            <p>Features</p>
                            <p>Pricing</p>
                            <p>FAQs</p>
                            <p>About</p>
                        </div>
                        <div className="col-md-2">
                            <h4>Section</h4>
                            <p>Home</p>
                            <p>Features</p>
                            <p>Pricing</p>
                            <p>FAQs</p>
                            <p>About</p>
                        </div>
                        <div className="col-md-6">
                            <form onSubmit={submitHandler}>
                                <h4>Subscribe to our newsletter</h4>
                                <h6>Monthly digest of whats new and exciting from us.</h6>
                                <div className="d-flex flex-row mt-3">
                                    <input type="email" className="form-control" placeholder="Enter your email" aria-label="Email"
                                        aria-describedby="basic-addon1" ref={email} />
                                    <button type="submit" className="btn btn-primary ms-3" disabled={loading}>
                                        {loading ? <span className="spinner-border spinner-border-sm"></span> : <>Subscribe</>}</button>
                                </div>
                                {response.message && <p className='mt-2' style={{ color: response.success ? "green" : "red" }}>
                                    {response.message}</p>}
                            </form>
                        </div>
                    </div>
                    <div className='row'>
                        <div className=" col-auto py-5">
                            <h6 className='pb-4'>&#169; 2021 Company, Inc. All Rights Reserved</h6>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Footer