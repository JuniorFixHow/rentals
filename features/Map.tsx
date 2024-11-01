
const Map = () => {
  return (
    <div className="flex p-1 md:p-4 rounded md:rounded-xl flex-col gap-4 shadow grow">
        <span>Our Location</span>
        <iframe className="rounded md:rounded-xl h-[19rem] md:h-[25rem]"   src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Accra+(Our%20Location)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
            <a href="https://www.gps.ie/">gps systems</a>
        </iframe>

    </div>
  )
}

export default Map