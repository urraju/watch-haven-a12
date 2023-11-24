 
const TilteContent = ({img, heading}) => {
    return (
      <div className="max-w-screen-2xl mx-auto">
        <div
          className="hero h-[600px] "
          style={{
            backgroundImage:
              `url("${img}")`,
              backgroundPosition : `center`
          }}
        >
          <div className="hero-overlay   bg-opacity-40"></div>
          <div className="hero-content border border-yellow-400 border-opacity-40 bg-black/30 rounded-lg w-full py-20 text-center text-neutral-content">
            <div className=" ">
              <h1 className="mb-5 text-5xl font-bold uppercase">{heading}</h1>
              <p className="mb-5 uppercase">
              Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took <br /> a galley of type and scrambled it to make a type specimen book.
              </p>
              
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default TilteContent;
  