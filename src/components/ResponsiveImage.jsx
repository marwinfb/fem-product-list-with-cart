
function ResponsiveImage({ image, alt }) {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={image.desktop} />
      <source media="(min-width: 768px)" srcSet={image.tablet} />
      <img src={image.mobile} alt={alt} className="w-full h-auto hover:scale-110 transition-transform" loading="lazy"/>
    </picture>
  )
}
export default ResponsiveImage