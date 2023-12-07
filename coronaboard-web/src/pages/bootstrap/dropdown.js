import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Dropdown } from 'react-bootstrap';

export default function DropdownPage() {
  return (
    <Container className="pt-3">
      <Dropdown>
        <Dropdown.Toggle>국가 선택</Dropdown.Toggle>
        <Dropdown.Menu>
          <Dropdown.Item href="https://coronaboar.kr">한국</Dropdown.Item>
          <Dropdown.Item href="https://coronaboar.fr">프랑스</Dropdown.Item>
          <Dropdown.Item href="https://coronaboar.nl">네덜란드</Dropdown.Item>
          <Dropdown.Item href="https://coronaboar.com">미국</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </Container>
  );
}
