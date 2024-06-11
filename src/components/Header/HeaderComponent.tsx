export const Header = () => {
  return (
    <>
      <div className="flex items-center w-full h-16  justify-between text-black font-montserrat bg-white">
        <div className="w-[80%] px-4 cursor-pointer">
          <span>Coolors</span>
        </div>
        <div className="flex justify-end w-[20%] px-4 h-8 gap-4 cursor-pointer">
          <div className="flex items-center justify-center h-full">
            <span>Sign in</span>
          </div>
          <div className="flex items-center justify-center rounded-md text-white bg-blue-600 w-[5rem] h-full cursor-pointer ">
            <span>Sign up</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-400 w-full h-[1px] opacity-30"></div>
    </>
  );
};
