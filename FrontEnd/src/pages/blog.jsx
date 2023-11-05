import "./blog.css";

function Blog({allData}) {
    
    return (
        <div className="services page">
            <h1>Current Blog Posts</h1>
            <div className="m-auto">
                <div className='w-100 d-flex flex-wrap justify-content-center'>
                {allData.map(item =>
                    <div className="blog-post border p-2 rounded shadow" key={item.id} >  
                        <div className="w-100 d-flex justify-content-end">
                            <img src="https://picsum.photos/75/75" alt="" className="rounded-circle" />
                        </div>                 
                        <h5>{item.title}</h5> 
                        <p>{item.content}</p>
                    </div>
                )}
                </div>

            </div>
    </div>

        
    )
}

export default Blog;