import EventImage from '../assets/eventPage.svg';
import calender from '../assets/calender.svg'
import location from '../assets/location.svg'
import arrow from '../assets/arrow.svg'
const EventDetail = () => {
  return (
    <div className="min-h-screen flex flex-col p-0 m-0 sm:justify-center md:flex-row-reverse md:items-center md:justify-evenly">
      <img src={EventImage} alt="event page" className='w-100 sm:w-[400px] mx-auto' />

      <div className="p-3 font-helvetica sm:w-[420px] sm:mx-auto">
        <p className='text-3xl md:text-5xl font-bold text-primary'>Birthday Bash</p>
        <p className='text-muted text-sm md:text-xl'>Hosted by <span className='font-bold'>Elysia</span></p>

        <div className="flex items-center mt-8 mb-2 md:mt-[60px] md:mb-[40px]">
          <img src={calender} alt="calender" className='mr-3' />
          <div>
            <p className="text-base md:text-xl text-primary font-bold">
              18 August 6:00PM
            </p>
            <p className="text-base text-muted text-sm md:text-xl">
              to <span className="font-bold">19 August 1:00PM</span> UTC +10
              <img src={arrow} alt="arrow" className='float-right relative left-[20px] md:left-[45px]' />
            </p>
          </div>
        </div>
        <div className="flex items-center mb-2 md:mb-[40px]">
          <img src={location} alt="location" className='mr-3' />
          <div>
            <p className="text-base md:text-xl text-primary font-bold">
              Street Name
            </p>
            <p className="text-muted text-sm md:text-xl">
              suburb, State, PostCode
              <img src={arrow} alt="arrow" className='float-right relative left-[60px] md:left-[102px]' />
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EventDetail;