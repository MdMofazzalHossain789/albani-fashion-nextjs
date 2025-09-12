import { HomeIcon } from "lucide-react";

const SitePathSkeleton = () => {
  return (
    <div className="w-full bg-slate-100 py-4">
      <MainSection>
        <div className="flex items-center gap-x-2 font-medium text-gray-600 animate-pulse px-4">
          <HomeIcon className="w-5 h-5" />
          Home
          <p>/</p>
        </div>
      </MainSection>
    </div>
  );
};

export default SitePathSkeleton;
