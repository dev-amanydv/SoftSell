// In your layout.tsx or top-level component
import { Poppins, Outfit, Inter } from 'next/font/google'

export const poppins = Poppins({
  subsets: ['latin'],
  weight: ['100','200', '300','400','500', '600','700'], // choose weights you need
  display: 'swap',
})

export const outfit = Outfit({
  subsets: ['latin'],
  weight: ['100','200', '300','400','500', '600','700'], // choose weights you need
  display: 'swap',
})

export const inter = Inter({
  subsets: ['latin'],
  weight: ['100','200', '300','400','500', '600','700'],
  display: 'swap',
})