const Astronaut = () => {
  return (
    <svg
      width="20"
      height="24"
      viewBox="0 0 20 24"
      className="astronaut"
    >
      {/* Helmet */}
      <rect x="4" y="0" width="12" height="10" rx="1" fill="#E5E7EB" />
      {/* Visor */}
      <rect x="7" y="3" width="6" height="4" fill="#020617" />

      {/* Body */}
      <rect x="7" y="10" width="6" height="8" fill="#E5E7EB" />

      {/* Legs */}
      <rect x="8" y="18" width="4" height="6" fill="#E5E7EB" />
    </svg>
  );
};

export default Astronaut;
