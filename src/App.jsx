import React, { useState } from "react";
import Home from "./pages/homePage/Home";
import Courses from "./pages/coursePage/Courses";
import Colleges from "./pages/collagePage/Colleges";
import Testimonials from "./pages/testimonialsPage/Testimonials";
import Footer from "./pages/FooterPage/Footer";
import "./App.css";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

  return (
    <div className="app">
     

      {isLoggedIn ? (
        <main className="scroll-container">
          <section id="home" className="full-page-section">
            <Home />
          </section>

          <section id="courses" className="full-page-section">
            <Courses />
          </section>

          <section id="colleges" className="full-page-section">
            <Colleges />
          </section>

          <section id="testimonials" className="full-page-section">
            <Testimonials />
          </section>

          {/* We wrap the Footer in a section so it also snaps into place */}
          <section id="footer" className="full-page-section">
            <Footer />
          </section>
        </main>
      ) : (
        <div className="login-wrapper">
          <h1>Login to University Portal</h1>
        </div>
      )}
    </div>
  );
}

export default App;