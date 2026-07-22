import LiveEvents from "../Components/LiveEvents"
import BannerSlider from "../Components/Shared/BannerSlider"
import Recommended from "../Components/Shared/Recommended"

const Home = () => {
    return(
        <div>
        <BannerSlider/>
        <Recommended/>
        <LiveEvents/>
        </div>
    )
}
export default Home 