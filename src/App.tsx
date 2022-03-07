import React from "react";
import "./App.scss";
import BookForm from "./components/sections/BookForm/BookForm";
import ChartersSection from "./components/sections/ChartersSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import MeetingSection from "./components/sections/MeetingSection";
import PrivateJetSection from "./components/sections/PrivateJetSection/PrivateJetSection";
import SpecificationSection from "./components/sections/SpecificationSection";

function App() {
  return (
    <div className="App">
      <Header />
      <MeetingSection />
      <BookForm />
      <PrivateJetSection />
      <SpecificationSection />
      <ChartersSection />
      <Footer />
    </div>
  );
}

export default App;
