import useEmblaCarousel from 'embla-carousel-react'
import { useEffect } from 'react'
import Autoplay from 'embla-carousel-autoplay'
import slider1 from '../images/slider1.png'
import slider2 from '../images/slider2.jpg'

const Carousel = () => {
    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false }, [Autoplay()])


    useEffect(() => {
        if (emblaApi) {
            // Embla API is ready
        }
    }, [emblaApi])
    return (
        <div className="embla" ref={emblaRef}>
            <div className="embla__container">
                <div className="embla__slide">
                    <img src={slider1} alt='slider 1' />
                </div>
                <div className="embla__slide">
                    <img src={slider2} alt='slider 2' />
                </div>
            </div>
        </div>
    )
}

export default Carousel