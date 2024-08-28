import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import FileUpload from './FileUpload';
import AboutUs from './AboutUs';
import BlockchainTechnique from './BlockchainTechnique';
import UseCases from './UseCases';
import DocumentVerificationCards from './DocumentVerificationCards';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <FileUpload />
        <DocumentVerificationCards/>
        <BlockchainTechnique />
        <UseCases />
        <AboutUs />

      </main>
      <Footer />
    </div>
  );
}

export default App;
