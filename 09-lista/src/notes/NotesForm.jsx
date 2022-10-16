import { Formik, Form, Field, ErrorMessage } from "formik";
import { useContext } from "react";
import { NotesContext } from "../contexts/NotesContext";

function NotesForm(){
  const { add } = useContext(NotesContext);
  return(
    <Formik
      initialValues={{ title: "", message: "" }}
      validate={ values => {
         const errors = {};
         if(!values.title){
           errors.title = "El título es oblgatorio"
         } else if(!values.message) {
          errors.message = "La tarea es oblgatoria"
         }
         return errors;
      }}
      onSubmit={
        (values, { setSubmitting}) => {
          add(values.title, values.message);
          setSubmitting(false);
          values.title="";
          values.message="";
        }
      }
    >
      {
        ({ isSubmitting })=>(
          <Form className="form">
            <div>
              <label htmlFor="title">Título</label>
              <Field type="text" name="title" />
              <ErrorMessage name="title" component="p" />
            </div>
            <div>
              <label htmlFor="message">¿Qué quieres guardar?</label>
              <Field as="textarea" name="message" />
              <ErrorMessage name="message" component="p" />
            </div>
            <button type="submit" disabled={isSubmitting}>
              {isSubmitting ? "Guardando tu tarea..." : "Guardar tarea"}
            </button>
          </Form>
        )
      }
    </Formik>
  )
}

export default NotesForm;