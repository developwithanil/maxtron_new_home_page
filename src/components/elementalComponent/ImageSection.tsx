import React from 'react'

type Props={
    keyFeaturesImage: string;
    mobileImage : string;
}

const ImageSection :React.FC<Props> = ({keyFeaturesImage,mobileImage}) => {
  return (
    <div className='mx-4'>

    <div className='flex flex-col bg-white   rounded-3xl md:flex-row w-full  2xl:mx-auto max-w-[88rem] items-center gap-5 px-[30px] md:px-[50px] lg:px-[70px] py-4 md:py-6 lg:py-8'>

        <div className='lg:w-1/2 w-full'>
<img src={keyFeaturesImage} alt="IMAGE" />
        </div>
        <div className='lg:w-1/2 w-full'>
        <img src={mobileImage} alt="IMAGE" />
        </div>
    </div>
    </div>
  )
}

export default ImageSection