import { Banner } from "./Banner"
import { Category } from "./Category"
import { Featured } from "./Featured"
import { PopularMenu } from "./PopularMenu"
import { Testimonials } from "./Testimonials"


export const Home = () => {
  return (
    <div>
      <Banner />
      <Category />
      <PopularMenu />
      <Featured />
      <Testimonials />
    </div>
  )
}
