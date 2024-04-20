// import React from "react";
import { Field, Form, Formik, ErrorMessage } from "formik";
import styles from "../ContactForm/Form.module.css";
import { nanoid } from "nanoid";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addNewContact } from "../../redux/contacts/actions";

const ContactForm = ({ onAdd }) => {
  const dispatch = useDispatch();

  const handleSubmit = (values, { resetForm, isSubmitting }) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };
    dispatch({
      type: "contacts/addContacts",
      payload: newContact,
    });
    resetForm();
  };

  const contacts = useSelector((state) => state.contacts);
  console.log(contacts);

  const formValidate = Yup.object().shape({
    name: Yup.string().min(3).max(50).required(),
    number: Yup.string().min(3).required(),
  });

  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      onSubmit={handleSubmit}
      validationSchema={formValidate}
    >
      {({ isSubmitting }) => (
        <Form className={styles.contactForm}>
          <div className={styles.formGroup}>
            <label htmlFor="name" className={styles.label}>
              Name:
            </label>
            <Field type="text" id="name" name="name" className={styles.input} />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.errorMessage}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="number" className={styles.label}>
              Number:
            </label>
            <Field
              type="text"
              id="number"
              name="number"
              className={styles.input}
            />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.errorMessage}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            Add new Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
