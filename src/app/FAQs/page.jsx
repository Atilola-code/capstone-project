'use client'
import { IoIosArrowUp } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io"
import React, { useState } from 'react'


const faqs = [
  {
    question: 'What skin types are your products suitable for?',
    answer:
      'Our skincare range is formulated for all skin types, including sensitive, oily, dry, and combination skin.',
  },
  {
    question: 'Are your products cruelty-free and vegan?',
    answer:
      'Yes! All our products are cruelty-free, and most are vegan. Check individual product pages for full ingredient details.',
  },
  {
    question: 'How long does shipping take?',
    answer:
      'Orders are typically processed within 1-2 business days, with standard shipping taking 3-7 business days.',
  },
  {
    question: `Can I return a product if it doesn't suit me?`,
    answer:
      'Absolutely! We offer a 30-day return policy on all unopened or lightly used products. Visit our Returns page for more info.',
  },
]

export default function FaqSection() {
    const [openIndex, setOpenIndex] = useState(null)
  
    const toggleFaq = (index) => {
      setOpenIndex(openIndex === index ? null : index)
    }


  return (
    <div>
      <div className='max-w-3xl mx-auto mt-[80px] sm:mt-[40px] py-16 px-4'>
      <h2 className='text-3xl sm:text-2xl font-bold sm:font-semibold font-sans text-center mb-8 text-black px-6 py-10 sm:px-4 sm:py-8 rounded-2xl bg-purple-100'>FAQs</h2>
      {faqs.map((faq, index) => (
        <div
          key={index}
          className='border-b border-black py-4'
        >
          <button
            onClick={() => toggleFaq(index)}
            className='flex justify-between w-full text-left text-blue text-lg font-medium focus:outline-none'
          >
            {faq.question}
            <span>{openIndex === index ? <IoIosArrowDown /> : <IoIosArrowUp />}</span>
          </button>
          {openIndex === index && (
            <p className='mt-2 sm:mt-4 text-black/70 text-base'>{faq.answer}</p>
          )}
        </div>
      ))}
    </div>
    </div>
  )
}
