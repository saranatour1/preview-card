import { Router, Route, Link } from "kaioken"
import { Counter } from "./Counter"
import '@fontsource-variable/figtree';
import MainCard from "./Icons/MainCard";
import Label from "./components/Label";
import Avatar from "./components/Avatar";

export function App() {
  return (
  <main className="font-figtree flex flex-col items-center justify-center w-full h-full min-h-screen max-w-full bg-yellow max-sm:p-6">
    
    <div className="w-full h-full max-w-[24rem] max-h-[32.625rem] p-6 rounded-[20px] bg-white shadow-3xl border border-black-b max-sm:w-full">
      <MainCard />

      <div className="flex flex-col items-start justify-start gap-y-3">
        <Label label="Learning" />
        <span className="font-medium text-base text-black-b">Published 21 Dec 2023</span>
        <h3 className=" text-2xl  font-extrabold text-black-c hover:text-yellow transition-colors cursor-pointer">HTML & CSS foundations</h3>
        <span className="text-base text-grey font-medium">These languages are the backbone of every website, defining structure, content, and presentation.</span>
        <Avatar />
      </div>
    </div>
  
  </main>
  )
}
