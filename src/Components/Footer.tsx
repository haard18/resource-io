import { AnimatedTooltipPreview } from './Tooltip'

const Footer = () => {
    return (

        <div className='bottom-0 flex items-center '>
            {/* Tooltip */}
            <div className="flex-1 flex flex-col items-center gap-4 justify-center bg-gradient-to-r from-black via-gray-900 to-black">
                <p className='text-xl text-zinc-100' style={{ fontFamily: "'Edu VIC WA NT Beginner'" }}>
                    THE TEAM
                </p>
                <AnimatedTooltipPreview />
            </div>
        </div>

    )
}

export default Footer
