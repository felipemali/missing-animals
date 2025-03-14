import { AreaCards } from "../AreaCards";
import { AreaInfo } from "../AreaInfo";
import { MyPosts } from "../MyPosts";

export const ContentHome = () => {
  // bg-gradient-to-b from-gray-[#a1571799] bg-orange-500
  return (
    <main className="min-h-screen rounded-t-[25px] p-6  pt-40 pl-5 pb-20">
      <AreaInfo />
      <AreaCards />
      <MyPosts />
    </main>
  );
};
