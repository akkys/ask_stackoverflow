import React from "react";
import { Row, Col, Container } from "react-bootstrap";

const TopQuestions = props => {
  return (
    <div>
      <Container>
        {props.questions.map(item => {
          return (
            <Row key={item.question_id} className="sub-container">
              <Col sm={1}>
                <div className="tabs">
                  <a href={item.link}>
                    <span className="tabs-count">{item.score}</span>
                    <br />
                    votes
                  </a>
                </div>
              </Col>
              <Col sm={1}>
                <div className="tabs">
                  <a href={item.link}>
                    <span className="tabs-count">{item.answer_count}</span>
                    <br />
                    answers
                  </a>
                </div>
              </Col>
              <Col sm={1}>
                <div className="tabs">
                  <a href={item.link}>
                    <span className="tabs-count">{item.view_count}</span>
                    <br />
                    views
                  </a>
                </div>
              </Col>
              <Col sm={9}>
                <a href={item.link} className="title">
                  {item.title}
                </a>
                <br />
                <p>
                  {item.tags.map((tag, i) => {
                    return (
                      <span key={i} className="tag">
                        {tag}
                      </span>
                    );
                  })}
                </p>
              </Col>
            </Row>
          );
        })}
      </Container>
      <br />
    </div>
  );
};

export default TopQuestions;
