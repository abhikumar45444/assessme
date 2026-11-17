import { useState } from 'react'
import { Search, Star, Plus, ChevronRight } from 'lucide-react'
import { ASSESSMENTS, CATEGORIES } from '../data'

export default function AssessmentsScreen({ onSelectAssessment, onAddToPlan }) {
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [sortBy, setSortBy] = useState('popular')

  const filteredAssessments = ASSESSMENTS.filter((item) => {
    const matchesCategory =
      activeCategory === 'all' || item.category === activeCategory
    const matchesSearch =
      !searchQuery ||
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  }).sort((a, b) => {
    if (sortBy === 'price-low') return a.price - b.price
    if (sortBy === 'price-high') return b.price - a.price
    if (sortBy === 'rating') return b.rating - a.rating
    return (b.reviewsCount || 0) - (a.reviewsCount || 0)
  })

  return (
    <div className="flex-1 flex flex-col bg-[#F8FAFC] pb-6 font-sans select-none">
      {/* 1. Header: Bold title "Ministry Assessments" & subtitle on left; Sort dropdown on right */}
      <div className="px-5 pt-3.5 md:pt-12 pb-3 bg-white border-b border-slate-100 flex items-center justify-between">
        <div>
          <h2 className="text-lg font-black text-[#0F172A] leading-tight">
            Ministry Assessments
          </h2>
          <p className="text-[11px] text-[#64748B]">
            AssessME Certified Discipleship Catalogue
          </p>
        </div>

        {/* Sort dropdown */}
        <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200/60 text-[#0F172A] px-2.5 py-1 rounded-xl text-xs font-medium">
          <span className="text-[#64748B] text-[11px]">Sort:</span>
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent font-bold text-[#0284C7] text-xs outline-none cursor-pointer"
          >
            <option value="popular">Popular</option>
            <option value="rating">Top Rated</option>
            <option value="price-low">Price: Low-High</option>
            <option value="price-high">Price: High-Low</option>
          </select>
        </div>
      </div>

      {/* 2. Search Bar */}
      <div className="p-5 pb-3">
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search spiritual gifts, personality, leadership..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-white border border-slate-200/80 rounded-2xl text-xs text-[#0F172A] placeholder-slate-400 focus:outline-none focus:border-[#0284C7] shadow-2xs transition-all"
          />
        </div>
      </div>

      {/* 3. Horizontal Filter Chip Pills */}
      <div className="px-5 pb-3 overflow-x-auto no-scrollbar scrollbar-hide flex items-center gap-2">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.id

          return (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer shadow-2xs flex-shrink-0 ${
                isActive
                  ? 'bg-[#0284C7] text-white shadow-sky-900/20'
                  : 'bg-white text-slate-600 border border-slate-200/80 hover:bg-slate-50'
              }`}
            >
              {cat.name}
            </button>
          )
        })}
      </div>

      {/* 4. Subheader Row: Showing X Systems on left, ChMS Certified on right */}
      <div className="px-5 pb-2.5 flex items-center justify-between text-[11px] text-[#64748B]">
        <span>Showing {filteredAssessments.length} Assessments</span>
        <span className="font-semibold text-[#0284C7]">ChMS Auto-Sync Ready</span>
      </div>

      {/* 5. 2-Column Product Card Grid */}
      <div className="px-5 grid grid-cols-2 gap-3 pb-24">
        {filteredAssessments.map((item) => (
          <div
            key={item.id}
            onClick={() => onSelectAssessment(item)}
            className="bg-white rounded-2xl border border-slate-100 p-2.5 shadow-xs hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer"
          >
            {/* Image with top-left star pill & bottom-right circular + button */}
            <div className="relative aspect-video rounded-xl overflow-hidden bg-slate-100 mb-2">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <span className="absolute top-1.5 left-1.5 bg-black/60 backdrop-blur-xs text-white px-2 py-0.5 rounded-full text-[9px] font-bold flex items-center gap-0.5 shadow-xs">
                ★ {item.rating}
              </span>
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  if (onAddToPlan) onAddToPlan(item)
                }}
                className="absolute bottom-1.5 right-1.5 w-7 h-7 rounded-full bg-[#0284C7] hover:bg-[#0369A1] active:scale-90 text-white flex items-center justify-center shadow-md transition-all cursor-pointer"
                title="Add to Church Plan"
                aria-label="Add to Church Plan"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            {/* Title & 1-line Subtitle */}
            <div className="mb-2">
              <h4 className="text-xs font-bold text-[#0F172A] leading-tight line-clamp-1 group-hover:text-[#0284C7] transition-colors">
                {item.name}
              </h4>
              <p className="text-[10px] text-[#64748B] line-clamp-1 mt-0.5">
                {item.tagline}
              </p>
            </div>

            {/* Card Footer: Light-blue tag pill on left, Details > link on right */}
            <div className="flex items-center justify-between pt-1.5 border-t border-slate-50 mt-auto">
              <span className="text-[9px] font-black text-[#0284C7] bg-[#F0F9FF] px-2 py-0.5 rounded-full border border-sky-100">
                {item.badge}
              </span>
              <span className="text-[11px] font-bold text-[#0284C7] flex items-center gap-0.5">
                <span>${item.price}</span>
                <span className="text-slate-300 ml-1">/ seat</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
