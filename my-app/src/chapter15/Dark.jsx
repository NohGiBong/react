import styled from "styled-components";

const Button = styled.button`
    color: ${props => props.dark ? "white" : "dark"};
    background: ${props => props.dark ? "black" : "white"};
    border: 1px solid black;
`;

function Dark() {
    return (
        <div>
            <Button>Normal</Button>
            <Button dark>Dark</Button>
        </div>
    );
}

export default Dark;