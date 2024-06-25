import React from 'react'

import type { Metadata } from "next"
export const metadata: Metadata = {
    title: "Contact Us"
}

import ContactPage from '@/components/contact-page/page'


const Contact = () => {

    return <ContactPage />

}

export default Contact
