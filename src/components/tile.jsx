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
    <div className="flex justify-evenly relative w-full">
      {data.map((item, index) => (
        <div key={index} className="flex bg-[#f4f4f4] rounded-lg">
          <div className="flex px-5 flex-col justify-center">
            <h2 className="text-xl text-left font-medium">{item.header}</h2>
            <p className="text-sm w-75">{item.text}</p>
            <button className="rounded px-8 mt-6 bg-white py-2 w-fit text-xs">
              Learn More
            </button>
          </div>
          <img
            src={item.src}
            alt=""
            className="w-62.5 flex-1 rounded-r-lg h-50"
          />
        </div>
      ))}
    </div>
  );
};

export default Tile;
