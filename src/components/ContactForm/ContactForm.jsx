import React from 'react';
import clsx from 'clsx';
import css from './ContactForm.module.css';
import PropTypes from 'prop-types';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { nanoid } from 'nanoid';
import { useId } from 'react';

const ContactFormSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .matches(
      /^\d{3}-\d{2}-\d{2}$/,
      'Phone number is not valid. Format requared: 123-68-90'
    )
    .required('Required'),
});

const initialValues = {
  name: '',
  number: '',
};

const ContactForm = ({ onAdd }) => {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const handleSubmit = (values, actions) => {
    values.id = nanoid();
    onAdd(values);
    actions.resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={ContactFormSchema}
    >
      <Form className={clsx(css.dataContactForm)}>
        <div className={clsx(css.fieldForm)}>
          <label htmlFor={nameFieldId}>Name</label>
          <Field type="text" name="name" id={nameFieldId} />
          <ErrorMessage name="name" component="span" />
        </div>

        <div className={clsx(css.fieldForm)}>
          <label htmlFor={numberFieldId}>Number:</label>
          <Field type="tel" name="number" id={numberFieldId} />
          <ErrorMessage name="number" component="span" />
        </div>

        <button type="submit" className={clsx(css.btnForm)}>
          Add contact
        </button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  onAdd: PropTypes.func.isRequired,
};

export default ContactForm;
