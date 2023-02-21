import React, { useState, useEffect } from "react";
import "../App.css";
/* Delar som behövs för routing */
import { Link } from "react-router-dom";

/* Här har vi logiken som hämtar data från externt API */
function Lista() {
  const [posterna, setPosts] = useState([]);

  useEffect(() => {
    /* Själva fetchen med endpoint */
    fetch("http://localhost:9000/bilar")
    /* Gör om till vänligt json-format */
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        setPosts(json);
      });
  }, []);

  return (
    <div className="App">
      <div className="lankar">
        <Link to={"/"}>Hem</Link>
      </div>
      <section>
        {/* Här snurras array igenom med posterna */}
        {posterna.map((post) => (
          <div className="card">
            <h2>Brand: {post.brand}</h2>
            <h3>Model: {post.model}</h3>
            <p>Color: {post.color}</p>
            <p>Regnr: {post.reg}</p>
          </div>
        ))}
        ;
      </section>
    </div>
  );
}

export default Lista;