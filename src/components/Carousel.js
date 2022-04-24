import { useState, useEffect, useRef, createElement } from "react"
import ReactDOM from 'react-dom'

const Carousel = () => {
    class Frame {
        src = ''
        alt = ''
        className = ''
        oldSrc = null //dummy purpose
        constructor(src, alt, className) {
            this.src = src
            this.alt = alt
            this.className = className
            this.oldSrc = ''
        }

        setSrc(newSrc) { this.src = newSrc }
        setAlt(newAlt) { this.alt = newAlt }
        setClassName(newClassName) { this.className = newClassName }
        setOldSrc(newSrc) { this.oldSrc = newSrc }

        getSrc() { return this.src }
        getAlt() { return this.alt }
        getClassName() { return this.className }
        getOldSrc() { return this.oldSrc }
    }

    const images = [ //dummy data
        {
            src: '../public/images/jpeg/hero-event.jpg',
            alt: 'Hero Event'
        },
        {
            src: '../public/images/jpeg/seamless-event.jpg',
            alt: 'Seamless Event'
        },
        {
            src: '../public/images/jpeg/experience-live.jpg',
            alt: 'Experience Live'
        }
    ]
    const ilen = images.length

    const [imageIndex, setImageIndex] = useState(0)
    const [currentImageIndex, setCurrentImageIndex] = useState(imageIndex)
    const paginationRef = useRef(null)
    const [pageDots, setPageDots] = useState(null)

    // LEFT MAIN RIGHT as Class
    // 1st. Set Props
    const leftFrame = new Frame('', '', '')
    const mainFrame = new Frame('', '', '')
    const rightFrame = new Frame('', '', '')

    // LEFT MAIN RIGHT as HTMLElement
    const leftFrameElement = useRef(null)
    const mainFrameElement = useRef(null)
    const rightFrameElement = useRef(null)

    // 2nd. Set Styles

    // 3rd. Set ImgSrc
    // Sets All
    const setImages = () => {
        const strPre = `bg${'-'}[url(`
        const strPost = `)]`
        const leftOld = `${strPre}${leftFrame.getOldSrc()}${strPost}`
        console.log(leftOld);
        const mainOld = `${strPre}${mainFrame.getOldSrc()}${strPost}`
        console.log(mainOld);
        const rightOld = `${strPre}${rightFrame.getOldSrc()}${strPost}`
        console.log(rightOld);
        const left = `${strPre}${leftFrame.getSrc()}${strPost}`
        console.log(left);
        const main = `${strPre}${mainFrame.getSrc()}${strPost}`
        console.log(main);
        const right = `${strPre}${rightFrame.getSrc()}${strPost}`
        console.log(right);
        
        leftFrameElement.current.classList.remove(leftOld)
        mainFrameElement.current.classList.remove(mainOld)
        rightFrameElement.current.classList.remove(rightOld)
        leftFrameElement.current.classList.add(left)
        mainFrameElement.current.classList.add(main)
        rightFrameElement.current.classList.add(right)
    }
    // Sets All Props
    const setImagesProps = (i) => {
        leftFrame.setSrc(images[iCheck(i - 1)].src)
        mainFrame.setSrc(images[iCheck(i)].src)
        rightFrame.setSrc(images[iCheck(i + 1)].src)
        leftFrame.setAlt(images[iCheck(i - 1)].alt)
        mainFrame.setAlt(images[iCheck(i)].alt)
        rightFrame.setAlt(images[iCheck(i + 1)].alt)
        setImages()
    }

    const setOldImagesSrc = () => {
        leftFrame.setOldSrc(leftFrame.getSrc())
        mainFrame.setOldSrc(mainFrame.getSrc())
        rightFrame.setOldSrc(rightFrame.getSrc())
    }

    // 4th. i ops
    const iCheck = (i) => {
        if (i < 0) return ilen - 1
        else if (i > ilen - 1) return 0
        return i
    }

    useEffect(() => {
        const dots = []
        paginationRef.current.innerHTML = ''
        for (let i = 0; i < ilen; i++) {
            dots[i] = createElement(
                'div',
                {
                    key: `dot${i+1}`,
                    className: "w-3 h-3 bg-neutral-50 rounded-full opacity-50 opacity-100 cursor-pointer hover:opacity-100 mx-1",
                    onClick: () => {setImageIndex(i)}
                },
                i+1
            )
        }
        setPageDots(dots)
        ReactDOM.render(
            dots,
            paginationRef.current
        )
    }, [paginationRef, pageDots])

    useEffect(() => {
        setCurrentImageIndex(iCheck(imageIndex))
    }, [imageIndex])

    useEffect(() => {
        const setActiveDot = (i) => {
            if(paginationRef.current.children.length > 0) {
                Array.from(paginationRef.current.children).forEach(pagedots => {
                    pagedots.classList.remove('opacity-100')
                });
                paginationRef.current.children[i].classList.add('opacity-100')
            }
        }

        setImagesProps(currentImageIndex)
        setActiveDot(currentImageIndex)
        setImageIndex(currentImageIndex)

        return () => {
            setOldImagesSrc()
        }
    }, [currentImageIndex])

    return (
        <>
            <div className="w-full h-52 sm:h-80 flex justify-center items-center">
                <div ref={leftFrameElement} src="" alt="" className="bg-cover bg-center absolute w-6/12 h-64 rounded-lg shadow-black hover:cursor-pointer opacity-50 left-0"></div>
                <div className="absolute w-10/12 h-80 flex items-center overflow-hidden z-10">
                    <div ref={mainFrameElement} src="" alt="" className="bg-cover bg-center w-full h-full rounded-lg shadow-black hover:cursor-pointer"></div>
                    <div className="absolute bg-neutral-900/50 text-neutral-50 text-2xl font-['Poppins'] rounded-r-full hover:bg-neutral-900 hover:cursor-pointer transition-all duration-100 p-4 -ml-3 z-20 left-0" onClick={() => setImageIndex(imageIndex - 1)}>{'<'}</div>
                    <div className="absolute bg-neutral-900/50 text-neutral-50 text-2xl font-['Poppins'] rounded-l-full hover:bg-neutral-900 hover:cursor-pointer transition-all duration-100 p-4 -mr-3 z-20 right-0" onClick={() => setImageIndex(imageIndex + 1)}>{'>'}</div>
                </div>
                <div ref={rightFrameElement} src="" alt="" className="bg-cover bg-center absolute w-6/12 h-64 rounded-lg shadow-black hover:cursor-pointer opacity-50 right-0"></div>
                <div ref={paginationRef} className="absolute flex z-20 bottom-5"></div>
            </div>
        </>
    )
}

export default Carousel