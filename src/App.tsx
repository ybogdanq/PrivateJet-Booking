import React from "react";
import "./App.scss";
import BookForm from "./components/BookForm/BookForm";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MeetingSection from "./components/MeetingSection";
import PrivateJetSection from "./components/PrivateJetSection/PrivateJetSection";
import SpecificationSection from "./components/SpecificationSection";
import Title from "./components/ui/title/Title";

function App() {
  return (
    <div className="App">
      <Header />
      <MeetingSection />
      <BookForm />
      <PrivateJetSection />
      <SpecificationSection />
      <Footer />
    </div>
  );
}

export default App;
