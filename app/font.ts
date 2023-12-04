import { Roboto, Plus_Jakarta_Sans } from 'next/font/google'
 
export const roboto = Roboto({
    subsets: ["latin"],
weight: ["300", "400", "500", "700", "900"],
variable: "--font-roboto"
})
 
export const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ["300", "400", "500", "700"],
  display: 'swap',
  variable: "--font-plus-jakarta-sans"
})