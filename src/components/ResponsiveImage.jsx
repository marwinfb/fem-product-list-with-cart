function ResponsiveImage({ mobile, tablet, desktop, alt }) {
  return (
    <picture>
      <source media="(min-width: 1024px)" srcSet={desktop} />
      <source media="(min-width: 768px)" srcSet={tablet} />
      <img src={mobile} alt={alt} className="w-full h-auto hover:scale-110 transition" loading="lazy"/>
    </picture>
  )
}
export default ResponsiveImage