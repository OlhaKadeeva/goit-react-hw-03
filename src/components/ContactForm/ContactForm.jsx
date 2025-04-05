import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const validation = Yup.object({
    name: Yup.string().min(3).max(50).required("Required"),
    number: Yup.string().min(3).max(50).required("Required"),
  });
  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validation={validation}
        onSubmit={(values, { resetForm }) => {
          onAddContact(values);
          resetForm();
        }}
      >
        <Form>
          <span>Name</span>
          <Field className={css.input} name="name" />
          <ErrorMessage name="name" component="div" />
          <span>Number</span>
          <Field className={css.input} name="number" />
          <ErrorMessage name="number" component="div" />
          <button className={css.contact} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
