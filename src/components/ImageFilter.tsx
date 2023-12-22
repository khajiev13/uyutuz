import { useState } from 'react';

import { filterableData } from '../config/filterData';
import Button from './Button';
import { Image } from './Image';

const ImageFilter = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const buttonCaptions = [
    'Hammasi',
    'Bolalar',
    'Oshxona',
    'Mexmonxona',
    'Yotoqxona',
    'Hammom',
    'Koridor',
  ];

  const handleFilterClick = (filter: string) => {
    setActiveFilter(filter);
  };
  return (
    <section className="w-full flex flex-col gap-12 py-16 lg:px-16 md:px-10 px-5">
      <div className="flex w-full md:justify-center items-start md:gap-6 gap-3 flex-wrap">
        {buttonCaptions.map((filter) => (
          <Button
            key={filter}
            onClick={() => handleFilterClick(filter)}
            type="button"
            className={`focus:outline-none border-2 border-secondary hover:bg-primary font-medium rounded-lg text-sm px-5 text-black hover:text-white py-2.5 mb-2 capitalize ${
              activeFilter === filter ? 'bg-primary ' : ' '
            }`}
          >
            {filter === 'Hammasi' ? 'Hammasi' : filter}
          </Button>
        ))}
        {/* filtered cards display */}
        <main className="w-full grid lg:grid-cols-4 md:grid-cols-2 gap-x-5 gap-y-8 md:mt-8">
          {filterableData.map((item, index) => (
            <div
              key={index}
              className={`w-full cursor-pointer transition-all duration-200 rounded-lg shadow bg-primary border border-gray-600 ${
                activeFilter === 'Hammasi' || activeFilter === item.name
                  ? 'block'
                  : 'hidden'
              }`}
            >
              <Image
                className="rounded-t-lg w-full h-[200px] overflow-hidden"
                image={item.src}
                alt={item.name}
                objectCover="object-cover"
              />
              <div className="p-5">
                {/* <Text as="h5" className="mb-2 text-2xl font-bold tracking-tight text-white">
                                        {item.title}
                                    </Text>
                                    <Text as="p" className="mb-3 font-normal text-white">
                                        {item.text}
                                    </Text> */}
                <a
                  href="tel:+998944068080"
                  className={`w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-background bg-black hover:bg-border hover:text-primary md:py-4 md:text-lg md:px-10`}
                >
                  Заказать
                </a>
              </div>
            </div>
          ))}
        </main>
      </div>
    </section>
  );
};

export default ImageFilter;
