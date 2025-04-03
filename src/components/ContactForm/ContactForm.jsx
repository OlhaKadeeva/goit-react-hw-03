import { Formik, Form, Field, ErrorMessage } from "formik";
const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: "", number: "" }}
      //   validationSchema={validationSchema}
      onSubmit={(values, { resetForm }) => {
        onAddContact(values);
        resetForm();
      }}
    >
      <Form>
        <Field name="name" placeholder="Name" />
        <ErrorMessage name="name" component="div" />
        <Field name="number" placeholder="Number" />
        <ErrorMessage name="number" component="div" />
        <button type="submit">Add Contact</button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
