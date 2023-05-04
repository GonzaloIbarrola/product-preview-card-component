import Cart from '../assets/icon-cart.svg'

export default function Button() {
  return(
    <button>
      <img className='w-[14.39px] h-[16px]' src={Cart} alt="" />
      <span>Add to Cart</span>
    </button>
  )
}