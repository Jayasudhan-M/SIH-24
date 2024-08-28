import React from 'react';
import './BlockchainTechnique.css';

function BlockchainTechnique() {
  return (
    <div className="blockchain-technique">
      <h2>Blockchain Technique</h2>
      <p>
        Blockchain technology is a decentralized digital ledger that securely records transactions across multiple computers. This technology ensures that once a transaction is recorded, it cannot be altered retroactively, providing an immutable and transparent record.
      </p>
      <p>
        In our document upload system, blockchain technology is used to verify and record document transactions. Each document is assigned a unique hash address upon verification, which is then stored on the blockchain. This process guarantees the integrity and authenticity of the document, making it tamper-proof and easily verifiable.
      </p>
      <p>
        The blockchain system provides several benefits, including:
        <ul>
          <li><strong>Security:</strong> Cryptographic hashing and decentralized consensus mechanisms protect data from unauthorized modifications.</li>
          <li><strong>Transparency:</strong> All transactions are recorded in a public ledger, accessible to all network participants.</li>
          <li><strong>Immutability:</strong> Once recorded, transactions cannot be altered, ensuring data integrity over time.</li>
        </ul>
      </p>
    </div>
  );
}

export default BlockchainTechnique;
