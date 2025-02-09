import React, { Component } from 'react';
import Footer from '../components/Footer';
import Navbar from "../components/Navbar";

class AboutPage extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <h1>Биздин дарек Баткен облусу Лейлек району Кайрагач айылы А.Файзиев мектеби</h1>
       <p>AboutPage</p> 
       <Footer/>
      </div>
    );
  }
}

export default AboutPage;