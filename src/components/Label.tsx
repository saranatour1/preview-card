interface Props{
  label:string;
}
function Label({label}:Props) {
  return (
    <div className="bg-yellow w-full h-full max-w-[5.125rem] max-h-[1.8125rem] rounded-[4px] flex justify-center items-center py-1 px-3">
      <span className="font-extrabold text-black-c text-base">{label}</span>
    </div>
  );
}

export default Label;