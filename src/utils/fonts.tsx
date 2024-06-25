import { Epilogue, } from "next/font/google"
import localFont from 'next/font/local'

const impact = localFont({
    src: './fonts/impact.ttf',
    variable: '--font-impact',
});

const epilogue = Epilogue({
    subsets: ["latin"],
    variable: '--font-epilogue',
})

export const Fonts = {
    'epilogue': epilogue.className,
    'impact': impact.variable,
}
