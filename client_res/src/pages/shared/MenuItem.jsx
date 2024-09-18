/* eslint-disable react/prop-types */


export const MenuItem = ({ item }) => {
  const { name, image, price, recipe } = item;
  return (
    <div className="flex space-x-4">
      <img className="w-[80px] h-[70px] rounded-full rounded-tl-none" src={image} alt="" />
      <div>
        <h3 className="uppercase">{name}----</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  )
}
