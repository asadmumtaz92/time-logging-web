import { Jost } from "next/font/google"
import localFont from 'next/font/local'

const jost = Jost({
    style: 'normal',
    variable: '--font-jost',
    subsets: ['latin']
})

const impact = localFont({
    src: './fonts/impact.ttf',
    variable: '--font-impact',
})

export const Fonts = {
    'jost': jost.className,
    'impact': impact.variable,
}
