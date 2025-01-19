import React from 'react';
import Contact from '../Contact/Contact.jsx';
import clsx from 'clsx';
import css from './ContactList.module.css';
import PropTypes from 'prop-types';

const ContactList = ({ ContactsPeople, onDel }) => {
  return (
    <div className="section">
      <ul className={clsx('container', css.contactList)}>
        {ContactsPeople.map(contact => {
          return (
            <li className={clsx(css.contactListItem)} key={contact.id}>
              <Contact
                user={contact.name}
                phone={contact.number}
                id={contact.id}
                onDel={onDel}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

ContactList.propTypes = {
  ContactsPeople: PropTypes.array.isRequired,
  onDel: PropTypes.func.isRequired,
};

export default ContactList;
