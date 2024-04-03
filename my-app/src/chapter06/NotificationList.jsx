import React from "react";
import Notification from "./Notification";

const reservedNotification = [
    {
        id: 1,
        message: "ㅎㅇ, 일정 말해줌",
    },
    {
        id: 2,
        message: "2교시 남음",
    },
    {
        id: 3,
        message: "집에 가고 싶다",
    },
];

var timer;

class NotificationList extends React.Component {
    constructor(props) {
        super(props);

            this.state = {
                notifications: []
            };
    }

    // mount 시 호출
    componentDidMount() {
        const { notifications } = this.state;
        timer = setInterval(() => {
            if (notifications.length < reservedNotification.length) {
                const index = notifications.length;
                notifications.push(reservedNotification[index]);
                this.setState({
                    notifications: notifications
                });
            } else {
                this.setState ({
                    notifications: []
                });
                clearInterval(timer);
            }
        }, 1000);
    }

    // unmount 시 호출
    componentWillUnmount() {
        if (timer) {
            clearInterval(timer);
        }
    }

    render() {
        return (
            <div>
                {this.state.notifications.map((notificaion) => {
                    return <Notification 
                                        key = {notificaion.id}
                                        id = {notificaion.id}
                                        message={notificaion.message} />;
                })}
            </div>
        );
    }
}

export default NotificationList;