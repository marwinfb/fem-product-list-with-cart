function Container({children, className}) {
  return (
    <div className={`max-w-[90rem] mx-auto w-full p-6 md:p-10 lg:px-[7rem] lg:py-[5.5rem] ${className}`}>
      {children}
    </div>
  )
}
export default Container