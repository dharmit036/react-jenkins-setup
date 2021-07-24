import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
class Intro extends Component {
  render() {
    return (
      <>
        <Container>
          <Row>
            <Col lg={12} sm={12} md={12}>
              <h2 className="center mt-3">Curriculum Vitae</h2>
            </Col>
          </Row>
          <Row>
            <Col lg={12} sm={12} md={12}>
              <table className="table mt-3">
                <thead>
                  <tr className="bg-info">
                    <td>
                      <h5>Personal Information</h5>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Name:</b> Dharmit Saradva
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Qualification:</b> B.Tech. in Computer Science and
                      Engineering with specialization of Cloud Based
                      Applications{" "}
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Nationality:</b> Indian
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Profession:</b> DevOps Engineer, Part-time Full Stack
                      Engineer
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
          <Row>
            <Col lg={12} sm={12} md={12}>
              <table className="table">
                <thead>
                  <tr className="bg-warning">
                    <td>
                      <h5>Technical Information</h5>
                    </td>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <b>Experience Level:</b> Junior Engineer
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Experience (in years):</b> 1
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Languages/Frameworks Known:</b> Python, Java, C, C++,
                      Node.js, React.js, Django
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <b>Technologies Known:</b> AWS(Mastery Level), Oracle
                      Cloud Infrastructure, Microsoft Azure, CI/CD
                      tools(Jenkins, GitLab), Ansible
                    </td>
                  </tr>
                </tbody>
              </table>
            </Col>
          </Row>
        </Container>
      </>
    );
  }
}
export default Intro;
