import Image, { StaticImageData } from "next/image"
type SafeNumber = number | `${number}`;
export type SectionImg = {
    urlImg: string | StaticImageData,
    title: string,
    caption?: boolean,
    ratio?: string,
    width?: SafeNumber,
    height?: SafeNumber,
    sizes?: string
}

const SectionImg = ({ urlImg, title, caption, ratio, height, width, sizes }: SectionImg) => {
    return (
        <div className='flex flex-col items-center m-4 '>
            <figure >
                <Image width={width} sizes={sizes} height={height} className={`aspect-${ratio ? ratio : 'video'} object-contain`} src={urlImg} alt={title} />
                {caption && <figcaption>{title}</figcaption>}
            </figure>
        </div>
    )
}


export default SectionImg