import Button from "./Button"

export default function Text() {
  return (
    <section className="p-6 desktop:w-3/6">
      <span className="text-Overline font-montserrat text-Aurometal-Saurus uppercase">Perfume</span>
      <h1>Gabrielle Essence Eau De Parfum</h1>
      <p>
      A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.
      </p>
      <div className="flex flex-row gap-[19px] desktop:mb-[30px] items-center mb-[18px]">
        <span className="text-Display font-fraunces text-Deep-Aquamarine">$149.99</span>
        <span className="text-Aurometal-Saurus text-[13px] font-montserrat line-through">$169.99</span>
      </div>
      <Button />
    </section>
  )
}