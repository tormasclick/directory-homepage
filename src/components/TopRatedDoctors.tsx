'use client';

import Image from 'next/image';

interface Doctor {
  id: number;
  image: string;
  name: string;
  verified: boolean;
  availableToday: boolean;
  acceptsInsurance: boolean;
  location: string;
  rating: number;
  reviews: number;
}

const doctors: Doctor[] = [
  {
    id: 1,
    image: '/images/doctors/smith.png',
    name: 'Dr. Sam Smith',
    verified: true,
    availableToday: true,
    acceptsInsurance: true,
    location: '1st Floor Rwaka Landmark Plaza',
    rating: 5,
    reviews: 124,
  },
  {
    id: 2,
    image: '/images/doctors/siyo.png',
    name: 'Dr. Samuel Siyo',
    verified: true,
    availableToday: true,
    acceptsInsurance: true,
    location: '1st Floor Rwaka Landmark Plaza',
    rating: 5,
    reviews: 124,
  },
  {
    id: 3,
    image: '/images/doctors/kamala.png',
    name: 'Dr. Joseph Kamala',
    verified: true,
    availableToday: true,
    acceptsInsurance: true,
    location: '1st Floor Rwaka Landmark Plaza',
    rating: 5,
    reviews: 124,
  },
];

const TopRatedDoctors: React.FC = () => {
  return (
    <section className="w-full py-12 bg-white top-rated-doctors">
      <div className="container mx-auto px-6 sm:px-8">
        <h2 className="text-center text-[38px] font-semibold leading-[57px] font-campton">
          <span className="text-[#5E59FC]">Top Rated</span>{' '}
          <span className="text-[#10106D]">Doctors</span>
        </h2>
        <p
          className="text-center text-black text-[24px] font-normal leading-[36px] font-campton"
          style={{ letterSpacing: '-0.48px' }}
        >
          Verified Excellence, Backed by Patient Trust
        </p>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="top-rated-doctor-card flex flex-col w-full sm:w-[380px] mx-auto bg-white rounded-lg overflow-hidden p-6"
            >
              <div className="top-rated-doctor-image-wrapper w-full h-[240px] self-stretch relative">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="top-rated-doctor-image object-cover rounded-lg"
                  sizes="(max-width: 768px) 100vw, 33vw"
                  onError={() =>
                    console.error(
                      `Failed to load doctor image in TopRatedDoctors: ${doctor.image}`
                    )
                  }
                />
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/doctors/verified-icon.svg"
                    alt="Verified"
                    width={16}
                    height={16}
                    onError={() =>
                      console.error(
                        'Failed to load verified-icon.svg in TopRatedDoctors'
                      )
                    }
                  />
                  <span
                    className="text-[#9A9A9A] text-[14px] font-normal font-campton"
                    style={{ lineHeight: '29.016px', letterSpacing: '-0.28px' }}
                  >
                    Verified
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span
                    className="text-[#0057C0] text-[24px] font-medium font-campton"
                    style={{ lineHeight: '36px', letterSpacing: '-0.48px' }}
                  >
                    {doctor.name}
                  </span>
                  <Image
                    src="/images/doctors/arrow-icon.svg"
                    alt="View Profile"
                    width={16}
                    height={16}
                    className="pt-1"
                    onError={() =>
                      console.error(
                        'Failed to load arrow-icon.svg in TopRatedDoctors'
                      )
                    }
                  />
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/doctors/tick-icon.svg"
                    alt="Available"
                    width={16}
                    height={16}
                    onError={() =>
                      console.error(
                        'Failed to load tick-icon.svg in TopRatedDoctors'
                      )
                    }
                  />
                  <span
                    className="text-black text-[14px] font-normal font-campton"
                    style={{ lineHeight: '21px', letterSpacing: '-0.28px' }}
                  >
                    Available Today
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/doctors/tick-icon.svg"
                    alt="Insurance"
                    width={16}
                    height={16}
                    onError={() =>
                      console.error(
                        'Failed to load tick-icon.svg in TopRatedDoctors'
                      )
                    }
                  />
                  <span
                    className="text-black text-[14px] font-normal font-campton"
                    style={{ lineHeight: '21px', letterSpacing: '-0.28px' }}
                  >
                    Accepts Insurance Only
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <Image
                    src="/images/doctors/location-icon.png"
                    alt="Location"
                    width={16}
                    height={16}
                    onError={() =>
                      console.error(
                        'Failed to load location-icon.png in TopRatedDoctors'
                      )
                    }
                  />
                  <span
                    className="text-black text-[14px] font-normal font-campton"
                    style={{ lineHeight: '21px', letterSpacing: '-0.28px' }}
                  >
                    {doctor.location}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Image
                        key={i}
                        src="/images/doctors/star-icon.svg"
                        alt="Star"
                        width={14.86}
                        height={16}
                        onError={() =>
                          console.error(
                            'Failed to load star-icon.svg in TopRatedDoctors'
                          )
                        }
                      />
                    ))}
                  </div>
                  <span
                    className="text-black text-[14px] font-normal font-campton"
                    style={{ lineHeight: '21px', letterSpacing: '-0.28px' }}
                  >
                    ({doctor.reviews})
                  </span>
                </div>
                <div className="flex gap-4 mt-4">
                  <button
                    className="flex justify-center items-center w-[273px] h-[48px] px-6 py-4 border border-[#10106D] rounded-lg text-[#5E59FC] text-[17px] font-semibold font-chillax"
                  >
                    Book Appointment
                  </button>
                  <button
                    className="flex justify-center items-center w-[48px] h-[48px] p-[15px_17px] border-2 border-[#00F5C1] bg-[#10106D] rounded-xl"
                  >
                    <Image
                      src="/images/doctors/call-icon.svg"
                      alt="Call"
                      width={15}
                      height={15}
                      onError={() =>
                        console.error(
                          'Failed to load call-icon.svg in TopRatedDoctors'
                        )
                      }
                    />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedDoctors;