import React from "react";
import Comment from "./Comment"

const comments = [
    {
        name: "길동이",
        comment: "ㅎㅇ = 하이??",
    },
    {
        name: "도우너",
        comment: "ㅎㅇ = 호우?",
    },
    {
        name: "둘리",
        comment: "ㅎㅇ = 호이??",
    },
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;