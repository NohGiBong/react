import React from "react";
import UserInfo from "./UserInfo";
import "./Comment.css";

function formatDate(date) {
    const current = new Date(date);
    const hour = ("0" + current.getHours()).slice(-2);
    const minute = ("0" + current.getMinutes()).slice(-2);
    const second = ("0" + current.getSeconds()).slice(-2);

    return <h2>현재 시간: {`${hour}:${minute}:${second}`}</h2>;
}

function Comment(props) {


    props = {
        author: {
          name: "티모시",
          avatarUrl: "https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png",
        },
        text: "리산 알 가입",
        date: Date.now(),
    }

    return (
        <div className="comment wrapper">
            <UserInfo user={props.author} />

            <div className="contentContainer">
                <div className="user-info-name">
                    {props.author.name}
                </div>
                <div className="comment-text commentText">
                    {props.text}
                </div>
                <div className="comment-date commentText">
                    {formatDate(props.date)}
                </div>
            </div>
        </div>
    );
}

export default Comment;