import { Tilt_Prism, Poppins } from "next/font/google"

const tiltPrism = Tilt_Prism({
  subsets: ["latin"]
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["500"]
})

export default function FunkyFont() {
  return (
    <div>
      <h2>Funky Font Page</h2>
      <p className={tiltPrism.className}>This font is Tilt Prism</p>
      <p className={poppins.className}>This font is Poppins</p>
    </div>
  )
}