import React, { useState } from "react";
import { partnerItems, CIcon, DoubleArrowIcon } from "./PartnerData";

interface ItemData {
  id: number;
  tabLabel: string;
  description: string;
  bgColor: string;
  textColor: string;
  arrowColor: string;
}

const SelectableItem: React.FC<{
  itemData: ItemData;
  isActive: boolean;
  isAnyActive: boolean;
  onSelect: () => void;
}> = ({ itemData, isActive, isAnyActive, onSelect }) => {
  let containerClasses =
    "transition-all duration-500 ease-in-out overflow-hidden ";
  let contentOpacityClass = "opacity-0 ";

  if (!isAnyActive) {
    containerClasses += "h-[calc((100%-0px)/3)] ";
  } else {
    if (isActive) {
      containerClasses += "flex-grow ";
      contentOpacityClass = "opacity-100 delay-300 duration-500";
    } else {
      containerClasses += "h-0 opacity-0 pointer-events-none ";
    }
  }

  return (
    <div
      className={`${containerClasses} ${itemData.bgColor} ${itemData.textColor} rounded-tr-2xl rounded-br-2xl relative group`}
    >
      <div
        className="flex justify-between items-center p-6 py-5 sm:py-6 h-[70px] sm:h-[80px] cursor-pointer "
        onClick={onSelect}
      >
        <h3 className="text-lg sm:text-xl md:text-2xl font-semibold [font-family:Switzer,sans-serif]">
          {itemData.tabLabel}
        </h3>
        {(!isActive || !isAnyActive) && (
          <div className="shrink-0">
            {" "}
            <DoubleArrowIcon colorClass={itemData.arrowColor} />
          </div>
        )}
      </div>

      <div className={`px-6 pb-6 ${contentOpacityClass} transition-opacity`}>
        <p className="text-sm md:text-base leading-relaxed font-openSansHebrew">
          {itemData.description}
        </p>
      </div>
    </div>
  );
};

const WhoPartner = () => {
  const [activeItemId, setActiveItemId] = useState<number | null>(null);

  const handleSelect = (itemId: number) => {
    if (activeItemId === itemId) {
      // Optional: Clicking an already active item's header closes it and shows tab list
      // setActiveItemId(null);
    } else {
      setActiveItemId(itemId);
    }
  };

  const resetView = () => {
    setActiveItemId(null);
  };

  return (
    <section className="py-12 md:py-16 ">
      {" "}
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row min-h-[480px] md:min-h-[500px] shadow-xl rounded-2xl">
          <div
            className="w-full md:w-[35%] lg:w-[40%] bg-indigo-600 text-white p-8 sm:p-10 md:p-12 flex flex-col justify-center items-center text-center rounded-t-2xl md:rounded-tr-none md:rounded-l-2xl cursor-pointer"
            onClick={resetView}
          >
            <CIcon />
            <h2 className="text-3xl lg:text-4xl font-bold [font-family:Switzer,sans-serif]">
              Who should partner with us?
            </h2>
          </div>

          <div className="w-full md:w-[65%] lg:w-[60%] flex flex-col rounded-b-2xl md:rounded-bl-none md:rounded-r-2xl overflow-hidden">
            {partnerItems.map((item) => (
              <SelectableItem
                key={item.id}
                itemData={item}
                isActive={activeItemId === item.id}
                isAnyActive={activeItemId !== null}
                onSelect={() => {
                  if (activeItemId === null) {
                    handleSelect(item.id);
                  } else if (activeItemId === item.id) {
                    // Optional: allow clicking active item's header to return to tab list
                    // setActiveItemId(null);
                  }
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhoPartner;
