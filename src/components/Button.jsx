function Button({ label, iconURL, backgroundColor, textColor, borderColor }) {
  return (
    <button
      className={`flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red rounded-full border-coral-red ${
        backgroundColor
          ? `${backgroundColor} ${textColor} ${borderColor}`
          : "bg-coral-red text-white"
      }`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="button icon"
          className="ml-2 rounded-full w-5 h-5"
        />
      )}
    </button>
  );
}

export default Button;
