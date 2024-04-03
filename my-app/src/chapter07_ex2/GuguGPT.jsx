import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Form, Container, Row, Col } from 'react-bootstrap';


function GuguGPT() {
  const [num1, setNum1] = useState(Math.ceil(Math.random() * 9));
  const [num2, setNum2] = useState(Math.ceil(Math.random() * 9));
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (parseInt(value) === num1 * num2) {
      setResult('정답입니다!');
      setNum1(Math.ceil(Math.random() * 9));
      setNum2(Math.ceil(Math.random() * 9));
      setValue('');
    } else {
      setResult('땡!');
      setValue('');
    }
  };

  return (
    <Container>
      <Row>
        <Col>
          <h1>구구단 게임</h1>
          <div>
            {num1} 곱하기 {num2}는?
          </div>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.Control
                type="number"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="답을 입력하세요"
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              정답 확인
            </Button>
          </Form>
          <div>{result}</div>
        </Col>
      </Row>
    </Container>
  );
}

export default GuguGPT;