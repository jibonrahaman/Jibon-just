

function MixiButton({className,text,onclick}) {
  return (
    <button onClick={onclick} className={`md:px-4 px-2 text-[11px] md:text-[16px]  py-1 rounded-md text-[#0171cd] relative after:absolute after:top-0 after:left-0 after:content-[' '] after:bg-[#0171cd] after:w-full after:h-full border border-[#0171cd] after:-z-10 after:translate-x-[-150px] overflow-hidden hover:after:translate-x-0 hover:text-white hover:after:duration-500 ${className}`}>{text}</button>
  )
}

export default MixiButton
