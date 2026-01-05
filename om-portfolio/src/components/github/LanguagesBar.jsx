const LanguagesBar = () => (
  <div className="mt-8 mb-8">
    <h3 className="text-sm font-bold text-gray-300 mb-3 uppercase tracking-widest text-[10px]">Language Distribution</h3>
    <div className="flex h-1.5 rounded-full overflow-hidden w-full bg-[#161b22]">
      <div className="bg-[#f1e05a] w-[55%]" />
      <div className="bg-[#3178c6] w-[25%]" />
      <div className="bg-[#3572A5] w-[15%]" />
      <div className="bg-[#f34b7d] w-[5%]" />
    </div>
    <div className="flex flex-wrap gap-4 mt-3 text-[10px] text-gray-500 font-mono uppercase">
      <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#f1e05a]" /> JS 55%</div>
      <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#3178c6]" /> TS 25%</div>
      <div className="flex items-center gap-2"><div className="w-1.5 h-1.5 rounded-full bg-[#3572A5]" /> Python 15%</div>
    </div>
  </div>
);

export default LanguagesBar;