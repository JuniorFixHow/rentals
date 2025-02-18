
const Map = () => {
  return (
    <div className="flex p-1 md:p-4 rounded md:rounded-xl flex-col gap-4 shadow grow">
        <span>Our Location</span>
        <iframe width="100%" height="600" frameBorder="0" scrolling="no" marginHeight={0} marginWidth={0} src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Ejisu,%20Last%20Floor,%20Nasona%20Filling%20Station+(Lysander%20Auto%20Rentals)&amp;t=&amp;z=17&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          <a target='_blank' className="hover:underline" href="https://diamondtoursghana.com/">Visit Diamond Tours</a>
        </iframe>
        {/* <iframe className="rounded md:rounded-xl h-[19rem] md:h-[25rem]"   src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Accra+(Our%20Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.gps.ie/">gps systems</a>
        </iframe> */}

    </div>
  )
}

export default Map