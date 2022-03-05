import React from "react";
import "./App.scss";
import BookForm from "./components/BookForm/BookForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MeetingSection from "./components/MeetingSection";

function App() {
  return (
    <div className="App">
      <Header />
      <MeetingSection />
      <BookForm />
      <Footer />
    </div>
  );
}

export default App;
