import { Clock, Star, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Skill } from '@/app/data/mockData';

interface SkillCardProps {
  skill: Skill;
}

export function SkillCard({ skill }: SkillCardProps) {
  return (
    <Link to={`/skills/${skill.id}`} className="group block">
      <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(37,99,235,0.12)] border border-slate-100 hover:border-blue-500/20 transition-all duration-300 overflow-hidden h-full flex flex-col transform hover:-translate-y-1">
        {/* Image */}
        <div className="relative h-48 overflow-hidden bg-slate-100">
          <img
            src={skill.image}
            alt={skill.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 rounded-full text-xs font-semibold tracking-wide border shadow-sm ${
                skill.category === 'soft-skill'
                  ? 'bg-purple-50 text-purple-700 border-purple-100'
                  : 'bg-blue-50 text-blue-700 border-blue-100'
              }`}
            >
              {skill.category === 'soft-skill' ? 'Soft Skill' : 'Hard Skill'}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="text-lg font-bold text-slate-800 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-300">
            {skill.title}
          </h3>
          <p className="text-slate-500 text-sm mb-5 line-clamp-2 flex-1 leading-relaxed">
            {skill.description}
          </p>

          <div className="space-y-4">
            {/* Stats */}
            <div className="flex items-center justify-between text-xs text-slate-500">
              <div className="flex items-center space-x-1.5 bg-slate-50 px-2.5 py-1.5 rounded-lg border border-slate-100">
                <Star className="h-3.5 w-3.5 text-amber-500 fill-current" />
                <span className="font-bold text-slate-700">{skill.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Users className="h-3.5 w-3.5 text-slate-400" />
                <span>{skill.students.toLocaleString()} siswa</span>
              </div>
              <div className="flex items-center space-x-1">
                <Clock className="h-3.5 w-3.5 text-slate-400" />
                <span>{skill.duration}</span>
              </div>
            </div>

            {/* Instructor & Level */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100">
              <div className="flex items-center space-x-2">
                <div className="w-6 h-6 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                  {skill.instructor.charAt(0)}
                </div>
                <span className="text-sm font-medium text-slate-600 truncate max-w-[120px]">{skill.instructor}</span>
              </div>
              <span className="text-xs font-semibold px-2.5 py-1 bg-slate-100 border border-slate-200 text-slate-600 rounded-lg">
                {skill.level}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}
