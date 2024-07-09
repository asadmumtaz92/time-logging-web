import React from 'react'

import type { Metadata } from "next"
export const metadata: Metadata = {
    title: "Sign Up",
}

import SignUpPage from '@/components/signup-page/page'


const SignUp = () => <SignUpPage />

export default SignUp