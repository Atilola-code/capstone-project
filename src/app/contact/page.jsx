"use client";
import { useFormik } from 'formik';
import React from 'react'
import * as Yup from "yup";
import emailjs from "emailjs-com";

const ContactForm = () => {

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string()
        .email("Invalid email address")
        .required("Email is required"),
      message: Yup.string().required("Message is required"),
    }),
    onSubmit: (values, { resetForm, setSubmitting }) => {
      emailjs
        .send(
          "service_nso48zo",
          "template_7ds7oco",
          {
          name: values.name,
          email: values.email,
          time: values.time,
          message: values.message
        },
          "BpDJB_JWUIS41JOh-"
        )
        .then(
          (result) => {
            alert("Message sent successfully!");
            resetForm();
            setSubmitting(false);
          },
          (error) => {
            alert("Failed to send message, please try again.");
            console.error(error.text);
            setSubmitting(false);
          }
        );
    },
  });

  return (
   <form onSubmit={formik.handleSubmit} className="max-w-md bg-[#dbcbfcc5] shadow-2xl mt-14  rounded-md m-auto p-4 space-y-4">
      <div>
        <label className="block text-[#5106e6c5] text-sm mt-8 font-medium mb-1">Name</label>
        <input
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="w-full border p-2 text-[#5106e6c5] rounded"
        />
        {formik.touched.name && formik.errors.name && (
          <div className="text-red-500 text-sm">{formik.errors.name}</div>
        )}
      </div>

      <div>
        <label className="block text-[#5106e6c5] text-sm font-medium mb-1">Email</label>
        <input
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="w-full border text-[#5106e6c5] p-2 rounded"
        />
        {formik.touched.email && formik.errors.email && (
          <div className="text-red-500 text-sm">{formik.errors.email}</div>
        )}
      </div>

      <div>
        <label className="block text-sm text-[#5106e6c5] font-medium mb-4">Message</label>
        <textarea
          name="message"
          rows="4"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className="w-full border p-2 rounded"
        />
        {formik.touched.message && formik.errors.message && (
          <div className="text-red-500 text-sm">{formik.errors.message}</div>
        )}
      </div>

      <button
        type="submit"
        disabled={formik.isSubmitting}
        className="bg-[#5106e6c5] text-white  px-4 py-2 mb-8 rounded mr-28 border-2 hover:bg-neutral-100 hover:text-[#5106e6c5] cursor-pointer shadow-2xl"
      >
        {formik.isSubmitting ? "Sending..." : "Send Message"}
      </button>
    </form>
  )
}

export default ContactForm

