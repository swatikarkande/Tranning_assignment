import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';

export default class Home extends React.Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    /**
     * 
     * @param {*} values 
     * this function save student form data.
     */
    saveData = (values) => {
        console.log(values);
    }
    /**
     * this function render student form
     */
    renderStudentForm = () => {
        return (
        <div>
            <h1>StudentForm</h1>
            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    contact: ''
                }}
                validationSchema={Yup.object().shape({
                    firstName: Yup.string()
                        .required('First Name is required'),
                    lastName: Yup.string()
                        .required('Last Name is required'),
                    email: Yup.string()
                        .email('Email is invalid')
                        .required('Email is required'),
                    contact: Yup.string()
                        .required('A phone number is required')
                        .matches(/^[0-9]+$/, "Must be only digits")
                        .min(10, 'Must be exactly 10 digits')
                        .max(10, 'Must be exactly 10 digits'),
                })}

                onSubmit={values => {
                    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(fields, null, 4))
                    { this.saveData(values) }
                }}

                render={({ errors, status, touched }) => (
                    
                    <Form>
                        <div className="firstdiv">
                            <div className="form-group">
                                <label htmlFor="firstName">First Name</label>
                                <Field name="firstName" type="text" className={'form-control' + (errors.firstName && touched.firstName ? ' is-invalid' : '')} />
                                <ErrorMessage name="firstName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="lastName">Last Name</label>
                                <Field name="lastName" type="text" className={'form-control' + (errors.lastName && touched.lastName ? ' is-invalid' : '')} />
                                <ErrorMessage name="lastName" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email</label>
                                <Field name="email" type="text" className={'form-control' + (errors.email && touched.email ? ' is-invalid' : '')} />
                                <ErrorMessage name="email" component="div" className="invalid-feedback" />
                            </div>
                            <div className="form-group">
                                <label htmlFor="contact">Contact</label>
                                <Field name="contact" type="text" className={'form-control' + (errors.contact && touched.contact ? ' is-invalid' : '')} />
                                <ErrorMessage name="contact" component="div" className="invalid-feedback" />
                            </div>

                            <div className="form-group">
                                <button type="submit" className="btn btn-primary mr-2">Save</button>
                                <button type="reset" className="btn btn-secondary">Reset</button>
                            </div>
                        </div>
                    </Form>
                )}
            />
        </div>)
    }
    render() {

        return (
            <div>
                {this.renderStudentForm()}
            </div>
        )
    }
}

