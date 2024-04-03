import Avatar from "./Avatar";
import "./Comment.css";


function UserInfo(props) {
    return (
        <div className="user-info imageContainer">
            <Avatar profile={props.user} />
        </div>
    );
}

export default UserInfo;