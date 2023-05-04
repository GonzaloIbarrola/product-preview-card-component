import ImageMobile from '../assets/image-product-mobile.jpg'
import Text from './Text'

export default function Container() {
  return (
    <main>
      <section className='desktop:bg-imageDesktop desktop:w-3/6 desktop:bg-no-repeat desktop:bg-contain'>
        <img className='desktop:hidden' src={ImageMobile} alt="image" />
      </section>
      <Text />
    </main>
  )
}