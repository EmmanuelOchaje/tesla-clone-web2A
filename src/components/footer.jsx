export default function Footer() {
  return (
    <footer className="flex items-center justify-center py-10">
      <div className="flex flex-row gap-3 mx-auto justify-center w-full">
        {[
          "Tesla @ 2026",
          "Privacy & Legal",
          "Vehicle Recalls",
          "Contact",
          "News",
          "Get Updates",
          "Locations",
          "Learn",
        ].map((item, index) => (
          <a key={index} href="/" className="text-[11px] text-gray-600">
            {item}
          </a>
        ))}
      </div>
    </footer>
  );
}
