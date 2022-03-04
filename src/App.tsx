import React from "react";
import "./App.css";
import BookForm from "./components/BookForm/BookForm";
import Header from "./components/Header";
import MeetingSection from "./components/MeetingSection";

function App() {
  return (
    <div className="App">
      <Header />
      <MeetingSection />
      <BookForm />
    </div>
  );
}

export default App;
