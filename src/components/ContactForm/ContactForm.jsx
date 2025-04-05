import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import css from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must be at most 50 characters")
      .matches(
        /^[A-Z][a-zA-Z\s]*$/,
        "The name must start with a capital letter!"
      )
      .required("Required"),
    number: Yup.string()
      .matches(/^\d{3}-\d{2}-\d{2}$/, "Invalid phone format (e.g. 123-45-67)")
      .required("Required"),
  });
  return (
    <div className={css.formWrapper}>
      <Formik
        initialValues={{ name: "", number: "" }}
        validationSchema={validationSchema}
        validateOnBlur
        validateOnChange
        onSubmit={(values, { resetForm }) => {
          onAddContact(values);
          resetForm();
        }}
      >
        <Form>
          <span>Name</span>
          <Field className={css.input} name="name" />
          <ErrorMessage name="name" component="div" className="css.error" />
          <span>Number</span>
          <Field className={css.input} name="number" />
          <ErrorMessage name="number" component="div" className="css.error" />
          <button className={css.contact} type="submit">
            Add Contact
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default ContactForm;
