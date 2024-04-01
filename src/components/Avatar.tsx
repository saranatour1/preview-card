import person from '../../public/image-avatar.webp'
function Avatar() {
  
  return (
    <div className='flex items-center w-full h-full min-w-[8.0625rem] max-h-[2rem] gap-x-3'>
      <img src={person} alt="some guy" className='h-8 w-8' />
      <span className='font-sm text-right font-extrabold'>Greg Hooper</span>
    </div>
  );
}

export default Avatar;