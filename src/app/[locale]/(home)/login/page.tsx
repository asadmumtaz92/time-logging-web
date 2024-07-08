import React from 'react'

import type { Metadata } from "next"
export const metadata: Metadata = {
    title: "Log In",
}

import LoginPage from '@/components/login-page/page'


const Login = () => <LoginPage />

export default Login