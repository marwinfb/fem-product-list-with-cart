function QuantityIconButton({ src, alt, onClick }) {
  return (
    <button type="button" className="border border-white rounded-full bg-transparent cursor-pointer flex items-center justify-center size-[20px] shrink-0" onClick={onClick}>
      <img src={src} alt={alt} width={10} height={10} />
    </button>
  );
}
export default QuantityIconButton;
