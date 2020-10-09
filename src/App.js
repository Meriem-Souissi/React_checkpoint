import React from 'react';
import './App.css';
import photo from "./ma photo.jpg";

function App() {
  return (
    <div className="App">
      <header>
        <div className="site_description">
          <h1
            style={{
              display: "block",
              height: "120px",
              margin: 0,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              backgroundColor: "#3d5a80",
              color: "white",
            }}
          >
            Curriculum Vitæ
          </h1>
          <nav
            className="topnav"
            style={{
              height: "40px",
              display: "flex",
              justifyContent: "space-evenly",
              alignItems: "center",
              backgroundColor: "#98c1d9",
            }}
          >
            <a
              href="Index.html"
              style={{
                textDecoration: "none",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              Acceuil
            </a>
            <a
              href="Résumé.html"
              style={{
                textDecoration: "none",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              A propos
            </a>
            <a
              href="Education.html"
              style={{
                textDecoration: "none",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              Cursus
            </a>
            <a
              href="Contact.html"
              style={{
                textDecoration: "none",
                textTransform: "uppercase",
                color: "white",
              }}
            >
              Contact
            </a>
          </nav>
        </div>
      </header>
      <main
        className="apropos"
        style={{
          margin: "30px 150px 30px 100px",
        }}
      >
        <img
          src={photo}
          className="ma photo"
          alt="ma photo"
          style={{
            width: "150",
            height: "100",
            borderRadius: "50px",
            border: "5px solid #ffcdb2",
          }}
        />
        <div
          className="info"
          style={{
            borderRadius: "40px",
            border: "3px solid #98c1d9",
            margin: "10px 50px",
          }}
        >
          <span class="badge badge-info">Info</span>
          <h3>Meriem Souissi</h3>
          <h3>Ingénieure énergétique</h3>
          <h3>Né le 10/08/1991 à Ksar Hellel</h3>
          <h3>Adresse: Rue Othmen Ben Affen Ksar Hellel</h3>
          <h3>Numéro de téléphone: 55 197 576</h3>
        </div>
      </main>
    </div>
  );
}

export default App;
