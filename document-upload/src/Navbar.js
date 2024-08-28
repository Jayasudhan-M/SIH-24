import React from 'react';
import './Navbar.css';
import logo from './logo.png'; // Adjust the path to your logo file

function Navbar() {
  const handleConnectWallet = async () => {
    try {
      if (window.ethereum) {
        // Request account access
        await window.ethereum.request({ method: 'eth_requestAccounts' });
      } else {
        alert('MetaMask is not installed. Please install MetaMask.');
      }
    } catch (error) {
      console.error('Error connecting wallet:', error);
      alert('An error occurred while connecting to MetaMask.');
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <img src={logo} alt="Logo" className="navbar-logo" />
        <button className="connect-wallet" onClick={handleConnectWallet}>
          Connect Wallet
        </button>
      </div>
    </nav>
  );
}

export default Navbar;
