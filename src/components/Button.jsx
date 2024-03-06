function Button({label, iconURL, backgroundColor, borderColor, textColor, fullWidth}) {
  return (
<button className={`flex items-center justify-center gap-2 py-4 text-lg leading-none text-grey border rounded-full border-coral-red bg-coral-red px-7 font-montserrat ${backgroundColor ?`${backgroundColor} ${textColor} ${borderColor}`:'bg-coral-red rounded-full text-white border-coral-red' } 
  ${fullWidth && 'w-full'}`}>
    {label}
    {iconURL && <img src={iconURL} alt="arrowRight" className="w-5 h-5 ml-2 rounded-full" />}
</button>
  )
}

export default Button


