import React from 'react'
import { Field, ErrorMessage } from "formik";

const CheckField = ({ form, field, label_text }) => {
    return (
        <>

            <Field type="checkbox" className="w-8 h-8 " name={field} />

            <p className="text-xs text-red-500">
                <ErrorMessage name={field} />
            </p>
        </>
    )
}

export default CheckField