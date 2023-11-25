
const HeadingContent = ({heading,subHeading}) => {
    return(
        <div className="w-96 z-30 text-center mx-auto mt-10 my-5">
            <p className="text-orange-400  uppercase text-lg mb-2">---{heading}---</p>
            <p className="text-4xl border-y-2 py-4 inline-block  uppercase text-gray-600 ">{subHeading}</p>
        </div>
    )}
export default HeadingContent;