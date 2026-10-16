import React, { useState, useMemo } from 'react';
import { Search, Bookmark, BookmarkCheck, ArrowUpRight, CheckCircle2, ShieldCheck, Flame, Filter } from 'lucide-react';
import { MOCK_PROJECTS } from '../data/mockData';
import { Project, ProjectCategory } from '../types';
import { ProjectApplyModal } from './ProjectApplyModal';

const CATEGORIES: ProjectCategory[] = [
  'All',
  'Social Media',
  'Video Editing',
  'App & Web Testing',
  'Graphic Design',
  'Content & Writing',
  'Market Research'
];

export const ProjectMarketplace: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [difficultyFilter, setDifficultyFilter] = useState<'All' | 'Beginner Friendly' | 'Intermediate'>('All');
  const [savedProjects, setSavedProjects] = useState<string[]>([]);
  const [activeProjectForApply, setActiveProjectForApply] = useState<Project | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Filter logic
  const filteredProjects = useMemo(() => {
    return MOCK_PROJECTS.filter((proj) => {
      const matchesCategory = selectedCategory === 'All' || proj.category === selectedCategory;
      const matchesDifficulty = difficultyFilter === 'All' || proj.difficulty === difficultyFilter;
      const query = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !query ||
        proj.title.toLowerCase().includes(query) ||
        proj.company.toLowerCase().includes(query) ||
        proj.skillsRequired.some((s) => s.toLowerCase().includes(query));

      return matchesCategory && matchesDifficulty && matchesSearch;
    });
  }, [selectedCategory, difficultyFilter, searchQuery]);

  const toggleSaveProject = (id: string) => {
    setSavedProjects((prev) =>
      prev.includes(id) ? prev.filter((p) => p !== id) : [...prev, id]
    );
  };

  const handleApplySuccess = (projectTitle: string) => {
    setToastMessage(`Application for "${projectTitle}" submitted successfully!`);
    setTimeout(() => {
      setToastMessage(null);
    }, 4500);
  };

  return (
    <section id="explore" className="py-16 sm:py-24 bg-neutral-50 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
          <div>
            <div className="text-xs font-bold text-emerald-700 uppercase tracking-wider mb-2">
              Live Gig Marketplace
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-neutral-950 tracking-tight [text-wrap:balance]">
              Explore Available Paid Micro-Projects
            </h2>
            <p className="mt-2 text-base text-neutral-600 max-w-2xl">
              Verified corporate assignments open right now for teens and students. Apply in 60 seconds with 0 application fees.
            </p>
          </div>

          <div className="text-sm text-neutral-500 font-medium">
            Showing <span className="font-bold text-neutral-900 tabular-nums">{filteredProjects.length}</span> live opportunities
          </div>
        </div>

        {/* Search & Filter Toolbar */}
        <div className="space-y-4 mb-8">
          
          {/* Search Bar & Difficulty Selector */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
            <div className="md:col-span-8 relative">
              <Search className="w-5 h-5 text-neutral-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search by skill (e.g. Reels, Figma, QA, Canva) or company..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 text-sm bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent shadow-xs"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs text-neutral-400 hover:text-neutral-700"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="md:col-span-4 flex items-center gap-2">
              <label htmlFor="difficulty-select" className="text-xs font-bold text-neutral-600 whitespace-nowrap">
                Level:
              </label>
              <select
                id="difficulty-select"
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value as any)}
                className="w-full px-3 py-2.5 text-sm bg-white border border-neutral-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 shadow-xs"
              >
                <option value="All">All Skill Levels</option>
                <option value="Beginner Friendly">Beginner Friendly (Zero Exp)</option>
                <option value="Intermediate">Intermediate (Portfolio ready)</option>
              </select>
            </div>
          </div>

          {/* Category Tabs (Segmented Control) */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 scrollbar-none">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 text-xs font-semibold rounded-lg transition-all whitespace-nowrap shrink-0 ${
                  selectedCategory === cat
                    ? 'bg-neutral-900 text-white shadow-xs'
                    : 'bg-white text-neutral-600 hover:text-neutral-900 border border-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

        </div>

        {/* Project Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-2xl border border-neutral-200 p-8 space-y-3">
            <Filter className="w-10 h-10 text-neutral-400 mx-auto" />
            <h4 className="text-lg font-bold text-neutral-800">No matching projects found</h4>
            <p className="text-sm text-neutral-500 max-w-md mx-auto">
              Try adjusting your search keywords or switching category filters to view all active gigs.
            </p>
            <button
              onClick={() => {
                setSelectedCategory('All');
                setSearchQuery('');
                setDifficultyFilter('All');
              }}
              className="mt-2 px-4 py-2 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-lg hover:bg-emerald-100"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const isSaved = savedProjects.includes(project.id);

              return (
                <div
                  key={project.id}
                  className="flex flex-col justify-between bg-white rounded-2xl border border-neutral-200/90 shadow-xs hover:shadow-md hover:border-emerald-300 transition-all p-6 group"
                >
                  <div>
                    {/* Card Header: Brand info & Bookmark */}
                    <div className="flex items-start justify-between gap-3 mb-3">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-neutral-900 text-white flex items-center justify-center font-bold text-xs tracking-wider shrink-0 shadow-xs">
                          {project.companyLogoText}
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-bold text-neutral-900">{project.company}</span>
                            {project.verifiedBrand && (
                              <span title="KYC Verified Company">
                                <ShieldCheck className="w-4 h-4 text-emerald-600" />
                              </span>
                            )}
                          </div>
                          <div className="text-[11px] text-neutral-500">{project.companyIndustry}</div>
                        </div>
                      </div>

                      <button
                        onClick={() => toggleSaveProject(project.id)}
                        className="text-neutral-400 hover:text-emerald-600 p-1 transition-colors"
                        title={isSaved ? 'Remove from saved' : 'Save gig for later'}
                        aria-label={isSaved ? 'Saved' : 'Save'}
                      >
                        {isSaved ? (
                          <BookmarkCheck className="w-5 h-5 text-emerald-600" />
                        ) : (
                          <Bookmark className="w-5 h-5" />
                        )}
                      </button>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-base font-bold text-neutral-950 line-clamp-2 mb-2 group-hover:text-emerald-700 transition-colors">
                      {project.title}
                    </h3>

                    {/* Brief description */}
                    <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed mb-4">
                      {project.description}
                    </p>

                    {/* Skills list - clean text metadata with typographic separators */}
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-[11px] text-neutral-500 mb-4">
                      <span className="font-semibold text-neutral-700">{project.difficulty}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.category}</span>
                      <span aria-hidden="true">·</span>
                      <span>{project.duration}</span>
                    </div>

                    {/* Key Deliverables Bullet Preview */}
                    <div className="space-y-1.5 bg-neutral-50 p-3 rounded-xl border border-neutral-100 text-[11px] text-neutral-600 mb-5">
                      <div className="font-semibold text-neutral-800 text-[11px]">Primary Task:</div>
                      <div className="truncate">{project.deliverables[0]}</div>
                    </div>
                  </div>

                  {/* Card Footer: Stipend & Apply CTA */}
                  <div className="pt-4 border-t border-neutral-100 flex items-center justify-between gap-3">
                    <div>
                      <div className="text-[10px] uppercase font-bold text-neutral-400">Fixed Stipend</div>
                      <div className="text-lg font-extrabold text-neutral-950 tabular-nums">
                        ₹{project.stipend.toLocaleString('en-IN')}
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <span className="text-[11px] text-neutral-400 tabular-nums hidden sm:inline">
                        {project.spotsLeft} spots left
                      </span>
                      <button
                        onClick={() => setActiveProjectForApply(project)}
                        className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-700 active:scale-[0.98] transition-all rounded-lg shadow-xs"
                      >
                        <span>Apply</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        )}

      </div>

      {/* Interactive Application Modal */}
      <ProjectApplyModal
        project={activeProjectForApply}
        onClose={() => setActiveProjectForApply(null)}
        onSuccess={handleApplySuccess}
      />

      {/* Toast Feedback */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-neutral-950 text-white px-5 py-3 rounded-xl shadow-xl flex items-center gap-3 border border-neutral-800 text-sm animate-in fade-in slide-in-from-bottom-2 duration-300">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}
    </section>
  );
};
