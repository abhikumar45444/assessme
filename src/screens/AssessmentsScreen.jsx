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
    <div className="flex-1 flex flex-col bg-[#F4F5F6] pb-24 font-sans select-none">
      {/* 1. Header */}
      <div className="px-5 pt-3.5 md:pt-12 pb-3 bg-white border-b border-[#ECECEC] flex items-center justify-between">
        <div>
          <h2 className="text-lg font-black font-cabin text-[#111518] leading-tight">
            AssessME Assessments
          </h2>
          <p className="text-[11px] text-[#696767]">
            Human Resource Tools for Churches & Ministries
          </p>
        </div>

        {/* Sort dropdown */}
        <div className="flex items-center gap-1.5 bg-slate-50 border border-slate-200 text-[#111518] px-2.5 py-1 rounded-xl text-xs font-medium">
          <select
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="bg-transparent text-[#111518] font-bold text-xs outline-none cursor-pointer"
          >
            <option value="popular">Most Popular</option>
            <option value="price-low">Price: Low to High</option>
            <option value="price-high">Price: High to Low</option>
            <option value="rating">Top Rated</option>
          </select>
        </div>
      </div>

      <div className="p-4 space-y-4">
        {/* Search bar */}
        <div className="relative">
          <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Search spiritual gifts, DISC temperament, leadership..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-9 pr-4 py-2.5 bg-white border border-[#ECECEC] rounded-2xl text-xs text-[#111518] placeholder-slate-400 outline-none focus:border-[#E17335] shadow-2xs transition-colors"
          />
        </div>

        {/* Category filter pills */}
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar scrollbar-hide pb-1">
          {CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3 py-1.5 rounded-full text-xs font-bold whitespace-nowrap transition-all cursor-pointer flex-shrink-0 ${
                  isActive
                    ? 'bg-[#E17335] text-white shadow-orange'
                    : 'bg-white text-[#565D66] border border-[#ECECEC] hover:border-slate-300'
                }`}
              >
                {cat.name}
              </button>
            )
          })}
        </div>

        {/* Assessments List */}
        <div className="space-y-3">
          {filteredAssessments.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectAssessment(item)}
              className="bg-white rounded-2xl p-3.5 border border-[#ECECEC] shadow-card hover:border-[#E17335] transition-all cursor-pointer flex gap-3.5 group"
            >
              {/* Product cover */}
              <div className="relative w-20 h-28 rounded-xl overflow-hidden bg-slate-100 flex-shrink-0 border border-slate-100">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <span className="absolute top-1 left-1 px-1 py-0.5 rounded bg-[#111518]/90 text-white text-[8px] font-black uppercase">
                  {item.badge}
                </span>
              </div>

              {/* Assessment info */}
              <div className="flex-1 min-w-0 flex flex-col justify-between py-0.5">
                <div>
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-[10px] uppercase font-black tracking-wider text-[#E17335]">
                      {item.category.replace('-', ' ')}
                    </span>
                    <div className="flex items-center gap-0.5 text-amber-500 text-[10px] font-bold">
                      <Star className="w-3 h-3 fill-amber-400 text-amber-400" />
                      <span>{item.rating}</span>
                    </div>
                  </div>

                  <h3 className="text-xs font-bold text-[#111518] line-clamp-1 group-hover:text-[#E17335] transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-[11px] text-[#696767] line-clamp-2 mt-0.5 leading-snug">
                    {item.tagline}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <span className="text-xs font-black text-[#E17335]">
                      ${item.price}
                    </span>
                    <span className="text-[10px] text-slate-400 font-normal"> / candidate seat</span>
                  </div>

                  <button
                    onClick={(e) => {
                      e.stopPropagation()
                      onAddToPlan(item)
                    }}
                    className="p-1.5 rounded-xl bg-orange-50 hover:bg-[#E17335] text-[#E17335] hover:text-white transition-all cursor-pointer shadow-2xs"
                    title="Add to Church Plan"
                  >
                    <Plus className="w-4 h-4 stroke-[2.5]" />
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filteredAssessments.length === 0 && (
            <div className="text-center py-12 bg-white rounded-3xl border border-dashed border-slate-200">
              <p className="text-xs text-[#696767]">No assessments found matching "{searchQuery}"</p>
              <button
                onClick={() => {
                  setSearchQuery('')
                  setActiveCategory('all')
                }}
                className="mt-2 text-xs font-bold text-[#E17335] hover:underline cursor-pointer"
              >
                Clear search filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
