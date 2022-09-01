import React, { useState, useMemo, useEffect } from "react";
import "./App.css";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Pagination from "./components/Pagination";
//import data from "./components/mock.json";
import { getUsers } from "./redux/actions/Users";
import { useDispatch, useSelector } from "react-redux";

let PageSize = 10;

const App = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const [usersFetched, setUsersFetched] = useState(false);

  const { users } = useSelector(({ usersReducer }) => usersReducer);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      getUsers(() => {
        setUsersFetched(true);
      })
    );
  }, [dispatch]);

  const currentCardData = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * PageSize;
    const lastPageIndex = firstPageIndex + PageSize;
    return users.slice(firstPageIndex, lastPageIndex);
  }, [currentPage]);

  return (
    <div>
      <Container>
        <Row xs={6} md={5} className="g-3">
          {currentCardData.map(({ body, title, id }) => {
            return (
              <Col key={id}>
                <CardGroup>
                  <Card
                    border="primary"
                    className="text-center"
                    style={{ width: "16rem" }}
                  >
                    <Card.Header class="small">{id}</Card.Header>
                    <Card.Body>
                      <Card.Title></Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {title}
                      </Card.Subtitle>
                      <Card.Text class="small">{body}</Card.Text>
                    </Card.Body>
                  </Card>
                </CardGroup>
              </Col>
            );
          })}
        </Row>
      </Container>
      <br></br>
      <Pagination
        className="pagination-bar"
        currentPage={currentPage}
        totalCount={users.length}
        pageSize={PageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </div>
  );
};
export default App;
