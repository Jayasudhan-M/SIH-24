import React, { useState } from 'react';
import './FileUpload.css';

function FileUpload() {
  const [fileType, setFileType] = useState('png');
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [isVerified, setIsVerified] = useState(false);
  const [fileList, setFileList] = useState([]);

  const maxFileSizeMB = 10; // Maximum file size in MB

  const handleFileChange = (selectedFile) => {
    if (selectedFile) {
      const validExtensions = ['image/png', 'image/jpeg', 'application/pdf'];
      if (validExtensions.includes(selectedFile.type)) {
        if (selectedFile.size > maxFileSizeMB * 1024 * 1024) {
          setMessage('File is too large. Maximum size is 10MB.');
          setFile(null);
        } else {
          setFile(selectedFile);
          setMessage('');
        }
      } else {
        setMessage('Invalid file type. Only PNG, JPG, and PDF are allowed.');
        setFile(null);
      }
    }
  };

  const generateRandomAddress = () => {
    return '0x' + [...Array(40)].map(() => Math.floor(Math.random() * 16).toString(16)).join('');
  };

  const handleUpload = () => {
    if (!file) {
      setMessage('Please select a valid file first.');
      return;
    }
    setMessage('Sending file for verification...');
    setTimeout(() => {
      const randomAddress = generateRandomAddress(); // Generate a random address
      setMessage(`File is added to blockchain with address: ${randomAddress}`);
      setFileList(prevFiles => [
        ...prevFiles,
        { name: file.name, type: file.type, verifiedAddress: randomAddress }
      ]);
      setFile(null);
      setIsVerified(false);
    }, 2000);
  };

  const handleFileTypeChange = (event) => {
    setFileType(event.target.value);
    setFile(null);
    setMessage('');
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const droppedFile = e.dataTransfer.files[0];
    handleFileChange(droppedFile);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="file-upload-container">
      <div
        className="file-upload"
        onDrop={handleDrop}
        onDragOver={handleDragOver}
      >
        <div className="file-upload-header">
          <select value={fileType} onChange={handleFileTypeChange} className="file-type-select">
            <option value="png">PNG</option>
            <option value="jpg">JPG</option>
            <option value="pdf">PDF</option>
          </select>
        </div>
        <div className="file-dropzone">
          <p>Drag & drop your file here, or click to select a file.</p>
          <input
            type="file"
            accept={`.${fileType}`}
            onChange={(e) => handleFileChange(e.target.files[0])}
            className="file-input"
          />
        </div>
        <button
          onClick={handleUpload}
          className="upload-button"
          disabled={!file}
        >
          Upload and Verify
        </button>
        {message && <div className="message">{message}</div>}
      </div>
      <div className="file-list">
        <table>
          <thead>
            <tr>
              <th>File Name</th>
              <th>Upload Type</th>
              <th>Verified Address</th>
            </tr>
          </thead>
          <tbody>
            {fileList.map((file, index) => (
              <tr key={index}>
                <td>{file.name}</td>
                <td>{file.type.split('/')[1]}</td>
                <td>{file.verifiedAddress}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FileUpload;
