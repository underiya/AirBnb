import {
  CarouselItem,
  CarouselContent,
  CarouselPrevious,
  CarouselNext,
  Carousel,
} from "@/components/ui/carousel";

export default function Component() {
  return (
    <div className="max-w-sm rounded-lg overflow-hidden shadow-lg relative">
      <div className="relative">
        <Carousel className="w-full">
          <CarouselContent>
            <CarouselItem>
              <img
                alt="Mueang Chiang Mai District, Thailand"
                className="w-full"
                height="550"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "486/550",
                  objectFit: "cover",
                }}
                width="486"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Mueang Chiang Mai District, Thailand"
                className="w-full"
                height="550"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "486/550",
                  objectFit: "cover",
                }}
                width="486"
              />
            </CarouselItem>
            <CarouselItem>
              <img
                alt="Mueang Chiang Mai District, Thailand"
                className="w-full"
                height="550"
                src="/placeholder.svg"
                style={{
                  aspectRatio: "486/550",
                  objectFit: "cover",
                }}
                width="486"
              />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious className="absolute top-1/2 left-0 transform -translate-y-1/2 p-2" />
          <CarouselNext className="absolute top-1/2 right-0 transform -translate-y-1/2 p-2" />
        </Carousel>
      </div>
      <div className="absolute top-0 right-0 p-2">
        <HeartIcon className="h-6 w-6 text-gray-500" />
      </div>
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-semibold">
            Mueang Chiang Mai District, T...
          </div>
        </div>
        <div className="flex items-center space-x-1">
          <StarIcon className="h-4 w-4 text-yellow-500" />
          <div className="text-sm text-gray-600">4.87</div>
        </div>
        <div className="text-sm text-gray-600">2,088 kilometres away</div>
        <div className="text-sm text-gray-600">12–17 Mar</div>
        <div className="text-lg font-semibold">₹1,753 night</div>
      </div>
    </div>
  );
}

function HeartIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    </svg>
  );
}

function StarIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}
