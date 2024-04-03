import "./Comment.css";

function Avatar(props) {
    return (
        <div>
            <img className="avatar image"
                src={props.profile.avatarUrl}
                alt={props.profile.name}
            />
        </div>
    );
}

export default Avatar;