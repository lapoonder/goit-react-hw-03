import React from 'react';
import ContactForm from '../ContactForm/ContactForm.jsx';
import SearchBox from '../SearchBox/SearchBox.jsx';
import ContactList from '../ContactList/ContactList.jsx';
import BaseContacts from '../../contacts.json';
import { useState, useEffect } from 'react';
import clsx from 'clsx';
import css from './App.module.css';

function App() {
  const [ContactsPeople, setContactsPeople] = useState(
    () => JSON.parse(localStorage.getItem('baseContactsUsers')) ?? BaseContacts
  );

  useEffect(() => {
    localStorage.setItem('baseContactsUsers', JSON.stringify(ContactsPeople));
  }, [ContactsPeople]);

  const [searchText, setSearchText] = useState('');

  const searchResult = ContactsPeople.filter(contact =>
    contact.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const addContact = newContact => {
    setContactsPeople(prev => [...prev, newContact]);
  };

  const delContact = ContactId => {
    setContactsPeople(prev => {
      return prev.filter(Contact => Contact.id !== ContactId);
    });
  };

  return (
    <>
      <header className="header">
        <div className="container">
          <h1 className={clsx(css.siteHeader)}>Phonebook</h1>
        </div>
      </header>
      <div className="section">
        <div className="container">
          <ContactForm onAdd={addContact} />
        </div>
      </div>
      <SearchBox value={searchText} setSearchText={setSearchText} />
      <ContactList ContactsPeople={searchResult} onDel={delContact} />
    </>
  );
}

export default App;
