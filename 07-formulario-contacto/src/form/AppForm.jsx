import { Field, Form, Formik, ErrorMessage } from "formik";

function AppForm() {
    return(
      <Formik
        initialValues={{ message:"Hola, te contacto por..." }}
        validate={ values=>{
          let errors = {};
          if(!values.name){
            errors.name = "Este campo es obligatorio";
          } else if (!values.email){
            errors.email = "Este campo es obligatorio";
          } else if(
            /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(values.mail)
          ){
            errors.mail = "El correo no es válido";
          }

          return errors;
        }}
        onSubmit={
          (values, { setSubmitting } ) => {
            let url = "https://formspree.io/f/xlevlbqb";
            let formData = new FormData();
            formData.append("name", values.name);
            formData.append("email", values.email);
            formData.append("message", values.message);

            fetch(url,{
              method: "POST",
              body: formData,
              headers: {
                'Accept': 'application/json'
              }
            }).then(response => {
              setSubmitting(false);
              alert("Gracias por contactarme");
            })
          }
        }
      >
        {
          ({ isSubmitting, values }) => (
            <Form className="form">
              <div className="">
                <label htmlFor="name">Nombre:</label>
                <Field type="text" name="name"></Field>
                <ErrorMessage name="name" className="error-message" component="p" />
              </div>
              <div className="">
                <label htmlFor="email">Correo electrónico:</label>
                <Field type="email" name="email"></Field>
                <ErrorMessage name="email" className="error-message" component="p" />
              </div>
              <div className="">
                <label htmlFor="message">Mensaje:</label>
                <Field component="textarea" value={values.message} name="message"></Field>
              </div>
              <button type="submit" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar mensaje"}
              </button>
            </Form>
          )
        }
      </Formik>
    )
}

export default AppForm;