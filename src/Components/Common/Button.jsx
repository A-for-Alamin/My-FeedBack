import { twMerge } from "tailwind-merge";

function MyButton({ className, children }) {
  return (
    <>
      <button
        className={twMerge(
          "text-[19px] text-white py-2 px-5 rounded-full bg-[#1677BD]",
          className
        )}
      >
        {children}
      </button>
    </>
  );
}

export default MyButton;
