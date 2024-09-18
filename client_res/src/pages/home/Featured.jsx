import { SectionTitle } from "../shared/SectionTitle"
import featuredImg from '../../assets/home/featured.jpg'
export const Featured = () => {
  return (
    <div style={{ backgroundImage: `url(${featuredImg})` }}
      className="relative text-white pt-8 my-20 bg-fixed "
    >
      {/* <div className="absolute bg-black inset-0 opacity-50"></div> */}
      <SectionTitle subHeading="Check It Out" heading="Featured Item" />
      <div className="md:flex justify-center items-center pt-16 pb-24 px-36">
        <div>
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20,2014</p>
          <p className="uppercase">where can i get some?</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit culpa commodi deserunt, id unde ea exercitationem corrupti perspiciatis vero quam hic saepe, expedita inventore libero eveniet, doloribus consequatur rem suscipit modi aperiam temporibus! Adipisci non quos tempore sint. Vel sit assumenda a fuga at tempore provident explicabo quam, adipisci nisi.</p>
          <button className="btn btn-outline border-0 border-b-4 mt-10">Order Now</button>
        </div>
      </div>
    </div>
  )
}
