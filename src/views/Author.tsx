import * as React from 'react';
import { Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthorPage, AuthorTimeline } from '../components/Author/';

class Author extends React.Component {
  title: string;
  name: string;

  constructor(props: Readonly<{}>) {
    super(props);
    this.title = 'Mr.';
    this.name = 'Ronnie';
  }

  render() {
    return (
      <Container className="content">
        <h3>Author Page</h3>
        <Nav.Link as={Link} to="/list">
          Back to Author List
        </Nav.Link>
        <AuthorPage id={1} />
        <AuthorTimeline id={1} />
      </Container>
    );
  }
}

export default Author;
