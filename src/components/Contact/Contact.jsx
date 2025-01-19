import React from 'react';
import clsx from 'clsx';
import css from './Contact.module.css';
import PropTypes from 'prop-types';

const Contact = ({ user, phone, id, onDel }) => {
  return (
    <>
      <div className={clsx(css.dataContact)}>
        <p>{user}</p>
        <p>{phone}</p>
      </div>
      <button
        className={clsx(css.btnContact)}
        onClick={() => {
          onDel(id);
        }}
      >
        Delete
      </button>
    </>
  );
};

Contact.propTypes = {
  user: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  onDel: PropTypes.func.isRequired,
};

export default Contact;
