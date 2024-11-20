'use client';

import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TextField from '@/components/FormikFields/TextField';
import SelectField from '@/components/FormikFields/SelectField';
import CheckField from '@/components/FormikFields/CheckField';
import { BiLoaderAlt } from 'react-icons/bi';
import countries from '../Countries';
import { BASE_URL } from '@/constants';

const ContactUsForm = () => {
  const [loading, setLoading] = useState(false);

  const initialValues = {
    name: '',
    email: '',
    job_title: '',
    company: '',
    industry: '',
    country: '',
    is_verified: false,
  };

  const validationSchema = yup.object({
    name: yup.string().required('Required'),
    email: yup.string().email('Invalid email format').required('Required'),
    job_title: yup.string().required('Required'),
    company: yup.string().required('Required'),
    industry: yup.string().required('Required'),
    // country: yup.string().required('Required'),
    is_verified: yup.boolean().oneOf([true], 'Required'),
  });

  const handleSubmit = async (values) => {
    setLoading(true);
    const payload = {
      name: values.name,
      email: values.email,
      job_title: values.job_title,
      company: values.company,
      industry: values.industry,
      country: values.country.value,
    };
    try {
      const response = await axios.post(`${BASE_URL}api/contact`, payload);
      console.log('API Response:', payload);
      toast.success('Form submitted successfully!', {
        style: { backgroundColor: '#1d1d1d', color: 'white' }, 
      });
    } catch (error) {
      console.error('API Error:', error);
      toast.error('There was an error submitting the form.', {
        style: { backgroundColor: '#1d1d1d', color: 'white' }, 
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-[70%] mx-auto">
      <ToastContainer
        position="bottom-right" // Set the position to bottom-right
        autoClose={5000} // Auto close after 5 seconds
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(form) => (
          <form>
            <div className="grid sm:grid-cols-2 gap-5">
              <TextField field="name" form={form} placeholder="Full Name" />
              <TextField field="email" form={form} placeholder="Email" />
              <TextField field="job_title" form={form} placeholder="Job title" />
              <TextField field="company" form={form} placeholder="Company" />
              <TextField field="industry" form={form} placeholder="Industry" />
              <SelectField
                form={form}
                field="country"
                options={countries}
                placeholder="Country"
              />
            </div>

            <div className="flex flex-col space-y-2 mt-10">
              <div className="flex space-x-2 items-start justify-start">
                <CheckField
                  field="is_verified"
                  label_text="Is Email Verified?"
                  form={form}
                />
                <div className="text-sm text-[#3F3F3F]">
                  By submitting this form, I hereby consent to the given personal data being used by
                  Viseven to send me information materials defined in the Privacy Policy, which I
                  have read and agree to. I understand that I can change my communication preferences
                  at any time.
                </div>
              </div>
              {form.errors.is_verified && form.touched.is_verified && (
                <div className="text-xs text-red-500">{form.errors.is_verified}</div>
              )}
            </div>

            <div className="flex items-center mt-10">
              <button
                type="submit"
                onClick={form.handleSubmit}
                disabled={loading}
                className="block mx-auto btn btn-primary"
              >
                {loading ? (
                  <BiLoaderAlt className="animate-spin text-white text-3xl mx-auto" />
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default ContactUsForm;
