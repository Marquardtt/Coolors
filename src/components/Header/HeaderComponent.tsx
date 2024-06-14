import { useRouter } from "next/navigation";

export const Header = () => {

  const router = useRouter();

  return (
    <>
      <div className="flex items-center w-full h-16  justify-between text-black font-montserrat bg-white">
        <div onClick={() => router.push("/home")} className="w-[80%] px-4 cursor-pointer">
          <span>Coolors</span>
        </div>
        <div className="flex justify-end w-[20%] px-4 h-8 gap-4 cursor-pointer">
          <div onClick={() => router.push("/register")} className="flex items-center justify-center h-full">
            <span>Sign in</span>
          </div>
          <div onClick={() => router.push("/login")} className="flex items-center justify-center rounded-md text-white bg-blue-600 w-[5rem] h-full cursor-pointer ">
            <span>Sign up</span>
          </div>
        </div>
      </div>
    </>
  );
};
