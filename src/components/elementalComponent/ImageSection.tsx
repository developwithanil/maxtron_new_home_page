import React from 'react';

type Props = {
  keyFeaturesImage: string[];
};

const ImageSection: React.FC<Props> = ({ keyFeaturesImage }) => {
  return (
    <div className="mx-4">
      <div className="flex flex-col  bg-white rounded-3xl w-full 2xl:mx-auto max-w-[88rem] px-[30px] md:px-[50px] lg:px-[70px] py-4 md:py-6 lg:py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full items-center">
          {keyFeaturesImage.map((src, index) => (
            <div key={index} className="w-full">
              <img
                src={src}
                alt={`Key Feature ${index + 1}`}
                className="w-full h-auto max-h-[750px] rounded-xl object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ImageSection;