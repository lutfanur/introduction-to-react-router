import { Link, useNavigate } from "react-router-dom";


const Post = ({ post }) => {
    const { id, title } = post;

    const navigate = useNavigate();

    const userStyle = {
        border: '2px solid green',
        padding: '5px',
        borderRadius: '20px'
    }

    const handleShowDetail = () => {
        navigate(`/post/${id}`);
    }

    return (
        <div style={userStyle}>
            <h4>Post of Id: {id}</h4>
            <p>{title}</p>
            <Link to={`/post/${id}`}>Post Detail</Link>
            <Link to={`/post/${id}`}><button>Show Details</button></Link><br />
            <button onClick={handleShowDetail}>Click to see details</button>    
        </div>
    );
};

export default Post;