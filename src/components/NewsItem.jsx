import React, { Component } from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

import Badge from 'react-bootstrap/Badge';

export class NewsItem extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date } = this.props;
    return (
      <>
        <div className="my-3">
          <Card>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
              <Card.Title
                style={{
                  maxWidth: "100%",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {title}
              </Card.Title>
              <Card.Text
                style={{
                  maxWidth: "100%",
                  display: "-webkit-box",
                  WebkitBoxOrient: "vertical",
                  WebkitLineClamp: 2,
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                }}
              >
                {description}
              </Card.Text>
              <Button
                className="btn-sm btn-dark"
                href={newsUrl}
                target="_blank"
              >
                Read More
              </Button>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Source : <strong>{author === null ? "unknown" : author}</strong>, {new Date(date).toGMTString()}</small>
            </Card.Footer>
          </Card>
        </div>
      </>
    );
  }
}

export default NewsItem;
