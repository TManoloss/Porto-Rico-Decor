import Image, { StaticImageData } from "next/image";

interface ServiceCardProps {
    image: StaticImageData;
    title: string;
    description: string;
  }

  export function ServiceCard({ image, title, description }: ServiceCardProps) {
    return (
      <div className="bg-white p-8 rounded-lg shadow-sm hover:shadow-md transition-shadow">
        <div className="flex justify-center mb-6">
          <div className="w-20 h-20 flex items-center justify-center">
            <Image
              src={image}
              alt={title}
              width={100}
              height={100}
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        <h3 className="text-xl font-bold text-gray-900 text-center mb-4">
          {title}
        </h3>

        <p className="text-gray-600 text-center text-sm leading-relaxed">
          {description}
        </p>

        <div className="mt-6 pt-4 border-t-2 border-[#C4A574]"></div>
      </div>
    );
  }