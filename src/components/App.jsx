import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      <p>
        {notes.map((noteObj) => (
          <Note
            key={noteObj.key}
            title={noteObj.title}
            content={noteObj.content}
          />
        ))}
      </p>
      <Footer />
    </div>
  );
}

export default App;
