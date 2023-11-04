import './Formstyle.css';
import React, { useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc } from 'firebase/firestore';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTStNcPDEdrmCZZBITu4MN2h_0T4ifLps",
  authDomain: "portfolio-92698.firebaseapp.com",
  projectId: "portfolio-92698",
  storageBucket: "portfolio-92698.appspot.com",
  messagingSenderId: "623839047927",
  appId: "1:623839047927:web:8cab97196a66e25ea063f2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const Form = () => {
  const [name, setName] = useState(' ');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log('Submit button clicked');
    console.log(name)
    // Access Firestore
    const db = getFirestore(app);
    try {
      // Add the submitted data to Firebase Firestore
      const docRef = await addDoc(collection(db, 'contacts'), {
        name: name,
        email: email,
        message: message,
      });

      console.log('Document written with ID: ', docRef.id);
      alert('Message Subimtted');

      setName('');
      setEmail('');
      setMessage('');

      
    } catch (error) {
      console.error('Error adding document: ', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      
      <input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <textarea
        placeholder="Message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Form;
