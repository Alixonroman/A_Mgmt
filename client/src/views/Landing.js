import Apartments from "../components/Apartments";
import { Footer } from "react-daisyui";
import { useState, useEffect } from "react";
import ReviewForm from "../components/ReviewForm";
import Navbar from "../components/Navbar";
import ReviewList from "../components/ReviewList";
import SignUp from "../components/Signup";

function Landing() {
  const [apartments, setApartments] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/apartments")
    .then((res) => res.json())
    .then((apartments) => setApartments(apartments));
  }, []);

  return (
    <>
    
      <Navbar />
      <div className="hero min-h-screen bg-base-200 bg-secondary-content">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-7xl font-bold">Welcome to A_Managment</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button href="/login" className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full">
        <div className="divider"></div>
      </div>
      <div className="container mx-auto"></div>

      <div>
        <Apartments apartments={apartments} />
      </div>
      <div className="divider"></div>

      <ReviewForm></ReviewForm>
      <div className="divider"></div>
      <ReviewList></ReviewList>

      <Footer className="p-10 bg-neutral text-neutral-content">
        <div>
          <Footer.Title>Services</Footer.Title>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </div>
        <div>
          <Footer.Title>Company</Footer.Title>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <Footer.Title>Legal</Footer.Title>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </div>
      </Footer>
    </>
  );
}

export default Landing;
