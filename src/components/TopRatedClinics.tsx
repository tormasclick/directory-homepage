'use client';

import Image from 'next/image';

interface Clinic {
  id: number;
  logo: string;
  name: string;
  location: string;
  specialty: string;
  insurances: string[];
  rating: number;
  reviews: number;
}

const clinics: Clinic[] = [
  {
    id: 1,
    logo: '/images/clinics/aar.png',
    name: 'AAR Healthcare Clinics',
    location: 'Nationwide',
    specialty: 'General Practice, Telehealth',
    insurances: ['NHIF', 'AAR'],
    rating: 5,
    reviews: 124,
  },
  {
    id: 2,
    logo: '/images/clinics/mater.png',
    name: 'Mater Hospital',
    location: 'Nairobi, Thika',
    specialty: 'Maternity, Childcare, Specialist Clinics',
    insurances: ['NHIF', 'AAR'],
    rating: 5,
    reviews: 124,
  },
  {
    id: 3,
    logo: '/images/clinics/mater.png',
    name: 'Mater Hospital',
    location: 'Nairobi, Thika',
    specialty: 'Maternity, Childcare, Specialist Clinics',
    insurances: ['NHIF', 'AAR'],
    rating: 5,
    reviews: 124,
  },
  {
    id: 4,
    logo: '/images/clinics/aar.png',
    name: 'Bliss Medical Centre',
    location: 'Nairobi, Kisumu, Eldoret',
    specialty: 'Multi-specialty Clinics',
    insurances: ['NHIF', 'AAR'],
    rating: 5,
    reviews: 124,
  },
  {
    id: 5,
    logo: '/images/clinics/mp.png',
    name: 'MP Shah Hospital',
    location: 'Nairobi',
    specialty: 'Oncology, Diagnostics, Pharmacy',
    insurances: ['NHIF', 'AAR'],
    rating: 5,
    reviews: 124,
  },
  {
    id: 6,
    logo: '/images/clinics/mp.png',
    name: 'MP Shah Hospital',
    location: 'Nairobi',
    specialty: 'Oncology, Diagnostics, Pharmacy',
    insurances: ['NHIF', 'AAR'],
    rating: 5,
    reviews: 124,
  },
];

const TopRatedClinics: React.FC = () => {
  return (
    <section className="w-full py-12 bg-white top-rated-clinics">
      <div className="container mx-auto px-6 sm:px-8">
        {/* Header */}
        <h2 className="top-rated-clinics-title font-campton">
          <span className="text-[#5E59FC]">Top Rated</span>{' '}
          <span className="text-[#10106D]">Clinics</span>
        </h2>
        <p className="top-rated-clinics-subtitle font-campton">
          View list of clinics verified and trusted
        </p>

        {/* Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {clinics.map((clinic) => (
            <div
              key={clinic.id}
              className="top-rated-clinic-card flex flex-col bg-white rounded-lg shadow-md p-6"
            >
              {/* Logo */}
              <div className="flex justify-start">
                <Image
                  src={clinic.logo}
                  alt={clinic.name}
                  width={100.804}
                  height={100.804}
                  className="object-contain"
                  onError={() =>
                    console.error(
                      `Failed to load clinic logo in TopRatedClinics: ${clinic.logo}`
                    )
                  }
                />
              </div>

              {/* Name */}
              <div className="flex items-center justify-between mt-4">
                <span className="top-rated-clinic-name font-chillax">
                  {clinic.name}
                </span>
                <Image
                  src="/images/clinics/arrow-icon.svg"
                  alt="View Clinic"
                  width={16}
                  height={16}
                  className="pt-1"
                  onError={() =>
                    console.error(
                      'Failed to load arrow-icon.svg in TopRatedClinics'
                    )
                  }
                />
              </div>

              {/* Location */}
              <div className="flex items-center gap-2 mt-3">
                <Image
                  src="/images/clinics/location-icon.svg"
                  alt="Location"
                  width={24.941}
                  height={24.941}
                  onError={() =>
                    console.error(
                      'Failed to load location-icon.svg in TopRatedClinics'
                    )
                  }
                />
                <span className="top-rated-clinic-location font-campton">
                  {clinic.location}
                </span>
              </div>

              {/* Specialty */}
              <div className="mt-2">
                <span className="top-rated-clinic-specialty font-campton">
                  {clinic.specialty}
                </span>
              </div>

              {/* Insurances */}
              <div className="flex gap-2 mt-3">
                {clinic.insurances.map((insurance, index) => (
                  <button
                    key={index}
                    className="top-rated-clinic-insurance font-campton flex justify-center items-center w-[57.157px] px-[8.314px] py-[4.157px] bg-gray-100 rounded-md"
                  >
                    {insurance}
                  </button>
                ))}
              </div>

              {/* Rating */}
              <div className="flex items-center gap-2 mt-3">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Image
                      key={i}
                      src="/images/clinics/star-icon.svg"
                      alt="Star"
                      width={15.443}
                      height={16.627}
                      onError={() =>
                        console.error(
                          'Failed to load star-icon.svg in TopRatedClinics'
                        )
                      }
                    />
                  ))}
                </div>
                <span className="top-rated-clinic-reviews font-campton">
                  ({clinic.reviews})
                </span>
              </div>

              {/* Buttons */}
              <div className="flex gap-4 mt-4">
                <button className="top-rated-clinic-book-button font-chillax flex justify-center items-center w-[303.451px] h-[49.882px] px-[24.941px] py-[16.627px] border border-[#00F5C1] bg-[#10106D] rounded-[8.314px] text-[#00F5C1] text-[17.667px] font-semibold">
                  Book Visit
                </button>
                <button className="top-rated-clinic-call-button flex justify-center items-center w-[49.882px] h-[49.882px] p-[15.588px_17.667px] border border-[#161462] bg-[#F9F9F9] rounded-[12.471px]">
                  <Image
                    src="/images/clinics/call-icon.svg"
                    alt="Call"
                    width={15}
                    height={15}
                    onError={() =>
                      console.error(
                        'Failed to load call-icon.svg in TopRatedClinics'
                      )
                    }
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedClinics;