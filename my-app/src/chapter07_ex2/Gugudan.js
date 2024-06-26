import React from "react";

class Gugudan extends React.Component {
    state = {
        first: Math.ceil(Math.random() * 9), 
        second: Math.ceil(Math.random() * 9), 
        value: '',
        result: '',
        score: 0
    };

    submit = (e) => {
        e.preventDefault();
        if (parseInt(this.state.value) === this.state.first * this.state.second) {
            this.setState({
            first: Math.ceil(Math.random() * 9) ,
            second: Math.ceil(Math.random() * 9) ,
            result: '딩동댕!',
            value: '',
            score: this.state.score + 1
            });
        } else {
            this.setState({
            result: '땡!',
            value: '',
            score: this.state.score - 1
            });
        }
        e.target.firstChild.focus();
    };

    render() {
        return (
            <div>
                <div>{this.state.first} 곱하기 {this.state.second}는?</div>
                    <form onSubmit={this.submit}>
                        <input type="number" value={this.state.value} onChange={(e) => this.setState({value: e.target.value})} />
                        <button>입력!</button>
                    </form>
                <div>{this.state.result} 점수 : {this.state.score}</div>
            </div>
        );
    }
}

export default Gugudan;
