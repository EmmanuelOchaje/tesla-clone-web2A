import image1 from "../../public/assets/image1.jpg";
import image2 from "../../public/assets/image2.jpg";

const data = [
  {
    header: "Current Offers",
    text: "Explore limited-time offers on Tesla vehicles.",
    src: image1,
  },
  {
    header: "American Heros",
    text: "$500 off for military, first responders, healthcare, teachers and students",
    src: image2,
  },
];

const Tile = () => {
  return (
    <div className="flex flex-col md:flex-row justify-evenly gap-4 w-full px-4">
      {data.map((item, index) => (
        <div
          key={index}
          className="flex bg-[#f4f4f4] rounded-lg w-full md:w-[48%]"
        >
          <div className="flex px-5 py-6 flex-col justify-center flex-1">
            <h2 className="text-xl text-left font-medium">{item.header}</h2>
            <p className="text-sm mt-2">{item.text}</p>
            <button className="rounded px-8 mt-6 bg-white py-2 w-fit text-xs">
              Learn More
            </button>
          </div>
          <img
            src={item.src}
            alt=""
            className="w-40 md:w-52 object-cover rounded-r-lg"
          />
        </div>
      ))}
    </div>
  );
};

export default Tile;
