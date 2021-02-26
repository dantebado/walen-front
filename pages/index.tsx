import HomeProductsList from '../components/home/HomeProductsList'
import DefaultLayout from '../components/layouts/DefaultLayout'
import FeaturedProductCarrousel from '../components/products/FeaturedProductCarrousel'

export default function Home(props) {
  return (
    <DefaultLayout>
      <div className="container">
        <FeaturedProductCarrousel />
        <HomeProductsList/>
      </div>
    </DefaultLayout>
  )
}