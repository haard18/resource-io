import { CardHoverEffectDemo } from '../Components/Cards'
import Navbar from '../Components/Navbar'
import { AnimatedTooltipPreview } from '../Components/Tooltip'

const Home = () => {
    return (
        <div>
            <Navbar />
            <CardHoverEffectDemo />
            <div className='bottom-0 flex items-center '>
                {/* Tooltip */}
                <div className="flex-1 flex justify-center bg-gradient-to-r from-black via-gray-900 to-black">
                    <AnimatedTooltipPreview />
                </div>
            </div>
        </div>
    )
}

export default Home
