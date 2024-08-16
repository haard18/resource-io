import { CardHoverEffectDemo } from '../Components/Cards'
import Navbar from '../Components/Navbar'
import { AnimatedTooltipPreview } from '../Components/Tooltip'

const Home = () => {
    return (
        <div>
            <Navbar />
            <CardHoverEffectDemo />
            <Footer />
        </div>
    )
}

export default Home

export const Footer = () => {
    return (
        <div className='bottom-0  flex items-center '>

            <div className="flex-1 ml- flex flex-col items-center gap-4 justify-center bg-gradient-to-r from-black via-gray-900 to-black">
                <p className='text-3xl mt-5 text-zinc-100' style={{ fontFamily: "'Baloo Bhai 2', sans serif" }}>
                    THE TEAM
                </p>
                <AnimatedTooltipPreview />
            </div>
        </div>
    )
}