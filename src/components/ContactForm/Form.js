'use client';

import React, { useState } from 'react'
import SelectField from '@/components/FormikFields/SelectField'
import TextField from '@/components/FormikFields/TextField'
import { BiLoaderAlt } from 'react-icons/bi'
import { Formik } from 'formik';
import * as yup from "yup";
import { BOOLEAN_OPTIONS } from '@/constants';
import { stringNotEmpty } from '@/utils';
import CheckField from '@/components/FormikFields/CheckField';


const ContactUsFrom = () => {
  const [loading, setLoading] = useState(false)

  const initialValues = {
    title: "",
    description: "",
    location: "",
    job_type: "",
    position: "",
    is_publish: "",
    department: ""

  }

  const YupInitialValues = initialValues


  yup.addMethod(yup.string, 'stringNotEmpty', stringNotEmpty)

  const validationSchema = yup.object({
    title: yup.string().stringNotEmpty(),
    location: yup.string().stringNotEmpty(),
    job_type: yup.object().nullable().required("Required"),
    department: yup.object().nullable().required("Required"),
    description: yup.string().stringNotEmpty(),
    position: yup.number().min(0, "Please enter a positive number").typeError("Valid Integer Required").required("Required"),
    is_publish: yup.object().required("Required"),
  })

  const handleSubmit = () => {

  }

  return (
    <div className='w-[70%] mx-auto'>
      <Formik
        initialValues={YupInitialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {
          form => (
            <form>
              <div className=''>
                <div className=' grid grid-cols-2 gap-5'>
                  <div className=''>
                    <TextField
                      field="title"
                      form={form}
                      placeholder={"Full Name"}
                    />
                  </div>

                  {/* <SelectField
                      form={form}
                      field={"is_publish"}
                      options={BOOLEAN_OPTIONS}
                    /> */}

                  <TextField
                    field="position"
                    form={form}
                    placeholder={"Email"}
                  />
                  <TextField
                    field="location"
                    form={form}
                    placeholder={"Job title"}
                  />
                  <TextField
                    field="location"
                    form={form}
                    placeholder={"Company"}
                  />
                  <TextField
                    field="location"
                    form={form}
                    placeholder={"Industry"}
                  />
                  <TextField
                    field="location"
                    form={form}
                    placeholder={"Country"}
                  />
                </div>

                <div className='flex space-x-2 items-start justify-start mt-10'>
                  <CheckField
                    field={'is_verified'}
                    // label_text={"Email & Phone Number is Verified? "}
                    label_text={"is Email Verified? "}
                    form={form} />
                  <div className='text-sm text-[#3F3F3F]'>
                    By submitting this form, I hereby consent to the given personal data being used by Viseven to send me information materials defined in the Privacy Policy, which I have read and agree to. I understand that I can change my communication preferences at anytime.
                  </div>
                </div>

                <div className="flex items-center mt-10">
                  <button
                    type='submit'
                    onClick={form.handleSubmit} disabled={loading} className='block mx-auto btn btn-primary'>
                    {
                      loading ?
                        <BiLoaderAlt className="animate-spin text-white text-3xl mx-auto" />
                        :
                        "Submit"
                    }
                  </button>
                </div>

              </div>
            </form>
          )
        }
      </Formik>
    </div>
  )
}

export default ContactUsFrom