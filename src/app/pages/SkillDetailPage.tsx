import { useState, useEffect } from 'react';
import { 
  ArrowLeft, BookOpen, Clock, Star, Users, Check, Play, 
  ChevronDown, ChevronUp, Award, FileText, Lock, 
  Unlock, Tv, RotateCcw, Sparkles, Download, X, 
  MessageSquare, FolderOpen, Send
} from 'lucide-react';
import { Link, useParams } from 'react-router-dom';
import { skills } from '@/app/data/mockData';

// Syllabus and Lesson Data for the LMS
const syllabusData = [
  {
    title: 'Pengenalan dan Dasar-dasar',
    lessons: [
      { id: '1.1', title: 'Pengenalan Instruktur & Silabus Kelas', duration: '08:45', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: '1.2', title: 'Mengapa Skill Ini Sangat Penting?', duration: '12:30', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: '1.3', title: 'Persiapan Mental & Mindset Sukses', duration: '10:15', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: '1.4', title: 'Instalasi Alat & Konfigurasi Lingkungan Belajar', duration: '15:20', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
    ]
  },
  {
    title: 'Konsep Fundamental',
    lessons: [
      { id: '2.1', title: 'Pilar Utama Teori Dasar', duration: '20:10', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: '2.2', title: 'Memahami Alur Kerja Praktis', duration: '18:40', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: '2.3', title: 'Analisis Studi Kasus Sederhana', duration: '22:15', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
    ]
  },
  {
    title: 'Praktek dan Studi Kasus',
    lessons: [
      { id: '3.1', title: 'Sesi Praktek Langsung Bagian I', duration: '25:30', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
      { id: '3.2', title: 'Menghindari Kesalahan Umum Pemula', duration: '15:45', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: '3.3', title: 'Sesi Praktek Langsung Bagian II (Kompleks)', duration: '30:00', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
    ]
  },
  {
    title: 'Teknik Lanjutan',
    lessons: [
      { id: '4.1', title: 'Optimalisasi Efisiensi Kerja', duration: '18:20', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: '4.2', title: 'Integrasi dan Kolaborasi Tim', duration: '14:50', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
    ]
  },
  {
    title: 'Project Akhir',
    lessons: [
      { id: '5.1', title: 'Briefing Project & Kriteria Penilaian', duration: '10:30', videoUrl: 'https://www.w3schools.com/html/mov_bbb.mp4' },
      { id: '5.2', title: 'Panduan Langkah demi Langkah Penyerahan Tugas', duration: '12:15', videoUrl: 'https://www.w3schools.com/html/movie.mp4' },
    ]
  }
];

export function SkillDetailPage() {
  const { id } = useParams();
  const skill = skills.find((s) => s.id === Number(id));

  // Generate syllabus dynamically with relevant video URLs based on skill.id
  const getSyllabusForSkill = (skillId: number) => {
    const videoMap: Record<number, string> = {
      1: 'https://assets.mixkit.co/videos/preview/mixkit-woman-explaining-something-during-a-video-call-40088-large.mp4', // Public Speaking
      2: 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-developer-typing-on-a-keyboard-40089-large.mp4', // Web Dev
      3: 'https://assets.mixkit.co/videos/preview/mixkit-business-people-meeting-around-a-table-41716-large.mp4', // Leadership
      4: 'https://assets.mixkit.co/videos/preview/mixkit-graphic-designer-drawing-on-a-tablet-41221-large.mp4', // Graphic Design
      5: 'https://assets.mixkit.co/videos/preview/mixkit-writing-on-a-blackboard-3023-large.mp4', // Critical Thinking
    };
    const activeVideo = videoMap[skillId] || 'https://assets.mixkit.co/videos/preview/mixkit-hands-of-a-developer-typing-on-a-keyboard-40089-large.mp4';
    
    return syllabusData.map(module => ({
      ...module,
      lessons: module.lessons.map(lesson => ({
        ...lesson,
        videoUrl: activeVideo
      }))
    }));
  };

  const currentSyllabus = skill ? getSyllabusForSkill(skill.id) : [];

  // Flatten all lessons for easy navigation
  const flatLessons = currentSyllabus.flatMap((module, mIdx) => 
    module.lessons.map(lesson => ({ ...lesson, moduleIdx: mIdx, moduleTitle: module.title }))
  );

  // LMS Interactive States
  const [isEnrolled, setIsEnrolled] = useState<boolean>(false);
  const [completedLessons, setCompletedLessons] = useState<Record<string, boolean>>({});
  const [activeTab, setActiveTab] = useState<'desc' | 'resources' | 'discussion'>('desc');
  const [expandedModules, setExpandedModules] = useState<Record<number, boolean>>({ 0: true });
  const [currentLesson, setCurrentLesson] = useState(flatLessons[0]);
  const [studentName, setStudentName] = useState<string>('Ahmad Fauzi');
  const [showCertModal, setShowCertModal] = useState<boolean>(false);
  const [discussionComment, setDiscussionComment] = useState<string>('');
  const [discussionList, setDiscussionList] = useState<Array<{ name: string; text: string; time: string }>>([
    { name: 'Siti Hajar', text: 'Penjelasan di modul pertama sangat mudah dipahami. Terima kasih instruktur!', time: '1 jam lalu' },
    { name: 'Budi Hartono', text: 'Apakah ada grup telegram untuk kelas ini? Saya ingin berdiskusi lebih lanjut.', time: '3 jam lalu' },
  ]);

  // Sync completion states
  const totalLessons = flatLessons.length;
  const completedCount = Object.keys(completedLessons).filter(k => completedLessons[k]).length;
  const progressPercentage = Math.round((completedCount / totalLessons) * 100);

  // Auto expand active module's index
  useEffect(() => {
    if (currentLesson) {
      setExpandedModules(prev => ({ ...prev, [currentLesson.moduleIdx]: true }));
    }
  }, [currentLesson]);

  // Sync current lesson and enrollment states when navigating to another class
  useEffect(() => {
    if (flatLessons.length > 0) {
      setCurrentLesson(flatLessons[0]);
    }
    setCompletedLessons({});
    setIsEnrolled(false);
  }, [id]);

  if (!skill) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Skill Tidak Ditemukan</h2>
          <Link to="/skills" className="text-blue-600 hover:text-blue-700">
            Kembali ke Daftar Skill
          </Link>
        </div>
      </div>
    );
  }

  const toggleModuleExpand = (index: number) => {
    setExpandedModules(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const handleLessonSelect = (lesson: typeof flatLessons[0]) => {
    setCurrentLesson(lesson);
  };

  const toggleLessonComplete = (lessonId: string, e?: React.MouseEvent) => {
    if (e) e.stopPropagation(); // Prevent choosing lesson when clicking checkbox
    setCompletedLessons(prev => ({
      ...prev,
      [lessonId]: !prev[lessonId]
    }));
  };

  const handleCompleteAndNext = () => {
    // 1. Complete current lesson
    setCompletedLessons(prev => ({
      ...prev,
      [currentLesson.id]: true
    }));

    // 2. Find next lesson index
    const currentIndex = flatLessons.findIndex(l => l.id === currentLesson.id);
    if (currentIndex < flatLessons.length - 1) {
      setCurrentLesson(flatLessons[currentIndex + 1]);
    } else {
      // Completed last lesson
      setShowCertModal(true);
    }
  };

  const handlePostComment = (e: React.FormEvent) => {
    e.preventDefault();
    if (!discussionComment.trim()) return;
    setDiscussionList(prev => [
      { name: studentName || 'Siswa SkillMU', text: discussionComment, time: 'Baru saja' },
      ...prev
    ]);
    setDiscussionComment('');
  };

  return (
    <div className="min-h-screen bg-slate-50/50">
      
      {/* 1. LAYOUT SEBELUM ENROLLED (PROMOSI & CHECKOUT) */}
      {!isEnrolled ? (
        <>
          {/* Hero Section */}
          <div className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-zinc-950 text-white overflow-hidden py-12 border-b border-slate-900">
            <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
              <Link
                to="/skills"
                className="inline-flex items-center text-slate-400 hover:text-blue-400 mb-8 transition-colors text-sm font-semibold"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Kembali ke Daftar Skill
              </Link>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <div className="flex items-center gap-3">
                    <span
                      className={`px-3 py-1.5 rounded-full text-xs font-semibold tracking-wide border ${
                        skill.category === 'soft-skill'
                          ? 'bg-purple-500/10 text-purple-300 border-purple-500/25'
                          : 'bg-blue-500/10 text-blue-300 border-blue-500/25'
                      }`}
                    >
                      {skill.category === 'soft-skill' ? 'Soft Skill' : 'Hard Skill'}
                    </span>
                    <span className="px-3 py-1.5 bg-white/10 text-slate-200 border border-white/10 rounded-full text-xs font-semibold">
                      {skill.level}
                    </span>
                  </div>
                  <h1 className="text-3xl lg:text-5xl font-extrabold mb-4 tracking-tight leading-tight">{skill.title}</h1>
                  <p className="text-base text-slate-300 leading-relaxed max-w-xl">{skill.description}</p>

                  {/* Stats */}
                  <div className="flex flex-wrap gap-6 text-sm pt-2">
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                      <Star className="h-4 w-4 text-amber-400 fill-current" />
                      <span className="font-bold">{skill.rating}</span>
                      <span className="text-slate-400">Rating</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                      <Users className="h-4 w-4 text-blue-400" />
                      <span className="font-bold">{skill.students.toLocaleString()}</span>
                      <span className="text-slate-400">Siswa</span>
                    </div>
                    <div className="flex items-center gap-2 bg-white/5 border border-white/10 px-3 py-1.5 rounded-xl">
                      <Clock className="h-4 w-4 text-blue-400" />
                      <span className="font-bold">{skill.duration}</span>
                      <span className="text-slate-400">Durasi</span>
                    </div>
                  </div>
                </div>

                <div className="hidden lg:block relative">
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl blur opacity-15" />
                  <img
                    src={skill.image}
                    alt={skill.title}
                    className="relative rounded-2xl shadow-2xl w-full h-auto object-cover max-h-[360px] border border-slate-800"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-10">
                {/* Tentang Kelas */}
                <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 p-8 space-y-4">
                  <h2 className="text-xl font-bold text-slate-800 tracking-tight">Tentang Kelas Ini</h2>
                  <p className="text-slate-600 leading-relaxed text-sm">{skill.description}</p>
                  <p className="text-slate-600 leading-relaxed text-sm">
                    Kelas ini dirancang khusus untuk membantu Anda menguasai {skill.title.toLowerCase()} 
                    dengan pendekatan yang terstruktur dan praktis. Anda akan belajar langsung dari 
                    instruktur berpengalaman dengan metode pembelajaran yang interaktif.
                  </p>
                </div>

                {/* Yang Akan Anda Pelajari */}
                <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 p-8 space-y-6">
                  <h2 className="text-xl font-bold text-slate-800 tracking-tight">Yang Akan Anda Pelajari</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {skill.benefits.map((benefit, index) => (
                      <div key={index} className="flex items-start gap-3.5">
                        <div className="flex-shrink-0 w-5 h-5 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mt-0.5 border border-blue-100">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        <span className="text-slate-600 text-sm leading-relaxed">{benefit}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Kurikulum Preview */}
                <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 p-8 space-y-6">
                  <h2 className="text-xl font-bold text-slate-800 tracking-tight">Kurikulum Belajar</h2>
                  <div className="space-y-4">
                    {currentSyllabus.map((module, index) => (
                      <div
                        key={index}
                        className="flex items-center justify-between border border-slate-100 rounded-xl p-4.5 bg-slate-50/20 hover:border-blue-500/20 hover:bg-white hover:shadow-[0_4px_20px_-4px_rgba(0,0,0,0.02)] transition-all duration-300"
                      >
                        <div className="space-y-1.5">
                          <h3 className="font-bold text-slate-800 text-sm md:text-base">
                            Modul {index + 1}: {module.title}
                          </h3>
                          <div className="flex items-center gap-4 text-xs text-slate-500">
                            <span className="flex items-center gap-1">
                              <BookOpen className="h-3.5 w-3.5 text-slate-400" />
                              {module.lessons.length} pelajaran
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="h-3.5 w-3.5 text-slate-400" />
                              Durasi Terintegrasi
                            </span>
                          </div>
                        </div>
                        <div className="p-2.5 bg-blue-50 text-blue-600 rounded-xl">
                          <Lock className="h-4 w-4" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Instruktur */}
                <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 p-8 space-y-6">
                  <h2 className="text-xl font-bold text-slate-800 tracking-tight">Instruktur</h2>
                  <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 text-white rounded-2xl flex items-center justify-center text-xl font-bold flex-shrink-0 shadow-md shadow-blue-500/10">
                      {skill.instructor.charAt(0)}
                    </div>
                    <div className="space-y-3">
                      <div>
                        <h3 className="text-lg font-bold text-slate-800 leading-snug">{skill.instructor}</h3>
                        <p className="text-blue-600 text-xs font-semibold mt-0.5">Instruktur Senior • 10+ tahun pengalaman</p>
                      </div>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        Berpengalaman dalam mengajar dan mengembangkan berbagai program pelatihan. 
                        Memiliki track record yang proven dalam membantu ribuan siswa mencapai 
                        tujuan pembelajaran mereka secara praktis.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Sidebar Purchase Box */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] border border-slate-100 p-6 sticky top-24 space-y-6">
                  <div>
                    <img
                      src={skill.image}
                      alt={skill.title}
                      className="w-full h-44 object-cover rounded-xl border border-slate-100"
                    />
                    <div className="mt-6 space-y-3.5 text-sm">
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500 font-medium">Instruktur:</span>
                        <span className="font-semibold text-slate-700">{skill.instructor}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500 font-medium">Durasi:</span>
                        <span className="font-semibold text-slate-700">{skill.duration}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500 font-medium">Level:</span>
                        <span className="font-semibold text-slate-700">{skill.level}</span>
                      </div>
                      <div className="flex justify-between border-b border-slate-100 pb-2">
                        <span className="text-slate-500 font-medium">Siswa terdaftar:</span>
                        <span className="font-semibold text-slate-700">{skill.students.toLocaleString()}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500 font-medium">Rating kelas:</span>
                        <span className="font-semibold text-slate-700 flex items-center gap-1">
                          <Star className="h-4 w-4 text-amber-500 fill-current" />
                          {skill.rating}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <button
                      onClick={() => setIsEnrolled(true)}
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white py-3.5 px-4 rounded-xl font-bold shadow-md shadow-blue-500/10 hover:shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300"
                    >
                      Ikuti Kelas
                    </button>
                    <button className="w-full border border-slate-200 text-slate-700 py-3 px-4 rounded-xl font-semibold hover:bg-slate-50 transition-colors">
                      Tambah ke Wishlist
                    </button>
                  </div>

                  <div className="pt-6 border-t border-slate-100 space-y-4">
                    <h3 className="font-bold text-slate-800 text-sm tracking-wide uppercase">Termasuk kelas ini:</h3>
                    <ul className="space-y-3 text-sm text-slate-500 font-medium">
                      <li className="flex items-center gap-3">
                        <div className="p-0.5 bg-blue-50 rounded-full text-blue-600">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        Video pembelajaran HD
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="p-0.5 bg-blue-50 rounded-full text-blue-600">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        Materi downloadable
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="p-0.5 bg-blue-50 rounded-full text-blue-600">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        Akses selamanya
                      </li>
                      <li className="flex items-center gap-3">
                        <div className="p-0.5 bg-blue-50 rounded-full text-blue-600">
                          <Check className="h-3.5 w-3.5" />
                        </div>
                        Sertifikat digital kelulusan
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      ) : (
        
        /* 2. LAYOUT SETELAH ENROLLED (LMS INTERACTIVE CLASSROOM) */
        <div className="min-h-screen bg-slate-900 text-slate-100">
          {/* LMS Top Header Bar */}
          <div className="bg-slate-950 border-b border-slate-800 sticky top-16 z-30 px-4 py-3 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div className="flex items-center gap-4">
                <button 
                  onClick={() => setIsEnrolled(false)} 
                  className="p-2 bg-slate-850 hover:bg-slate-800 rounded-xl text-slate-400 hover:text-white transition-colors"
                  title="Kembali ke Info Kelas"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xxs font-bold bg-blue-500/15 text-blue-400 border border-blue-500/30 px-2 py-0.5 rounded uppercase">Kelas Aktif</span>
                    <span className="text-xs text-slate-500 font-semibold">{skill.level}</span>
                  </div>
                  <h1 className="text-base sm:text-lg font-bold text-white truncate max-w-md">{skill.title}</h1>
                </div>
              </div>
              
              {/* Progress Tracker */}
              <div className="flex items-center gap-4">
                <div className="text-right">
                  <p className="text-xs text-slate-400 font-medium">Progres Belajar Anda</p>
                  <p className="text-sm font-bold text-white">{progressPercentage}% Selesai ({completedCount}/{totalLessons} Pelajaran)</p>
                </div>
                <div className="w-24 bg-slate-800 h-2.5 rounded-full overflow-hidden border border-slate-700/50">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 h-full rounded-full transition-all duration-300" style={{ width: `${progressPercentage}%` }} />
                </div>
                {progressPercentage === 100 && (
                  <button 
                    onClick={() => setShowCertModal(true)}
                    className="flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-extrabold text-xs px-3.5 py-2 rounded-xl shadow-lg shadow-amber-500/20 animate-bounce transition-all"
                  >
                    <Award className="h-4 w-4" />
                    Klaim Sertifikat
                  </button>
                )}
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              
              {/* LMS Main Screen: Player & Tabs */}
              <div className="lg:col-span-2 space-y-6">
                
                {/* HTML5 Video Player Frame */}
                <div className="bg-slate-950 aspect-video rounded-3xl overflow-hidden relative border border-slate-800 shadow-2xl">
                  <video 
                    key={currentLesson.id}
                    src={currentLesson.videoUrl} 
                    controls 
                    className="w-full h-full object-cover"
                    autoPlay
                  />
                  <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-slate-800/80 text-xs font-semibold text-slate-200">
                    Materi {currentLesson.id}
                  </div>
                </div>

                {/* Lesson Info Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-950 border border-slate-800 p-6 rounded-3xl">
                  <div className="space-y-1">
                    <p className="text-xs text-blue-400 font-bold uppercase tracking-wider">{currentLesson.moduleTitle}</p>
                    <h2 className="text-xl font-extrabold text-white">{currentLesson.title}</h2>
                    <p className="text-xs text-slate-400 font-medium">Durasi Pembelajaran: {currentLesson.duration} menit</p>
                  </div>
                  
                  <button
                    onClick={handleCompleteAndNext}
                    className={`flex items-center justify-center gap-2 py-3 px-5 rounded-xl font-bold text-sm shadow-md transition-all duration-300 ${
                      completedLessons[currentLesson.id]
                        ? 'bg-emerald-600/10 text-emerald-400 border border-emerald-500/25'
                        : 'bg-blue-600 hover:bg-blue-500 text-white shadow-blue-500/10 hover:-translate-y-0.5 active:translate-y-0'
                    }`}
                  >
                    {completedLessons[currentLesson.id] ? (
                      <>
                        <Check className="h-4 w-4" />
                        Selesai dipelajari
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 fill-current" />
                        Selesai & Lanjutkan
                      </>
                    )}
                  </button>
                </div>

                {/* Tab Controls */}
                <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden">
                  <div className="flex border-b border-slate-800">
                    <button
                      onClick={() => setActiveTab('desc')}
                      className={`flex-1 py-4 text-center font-bold text-xs sm:text-sm transition-colors border-b-2 ${
                        activeTab === 'desc' 
                          ? 'border-blue-500 text-white bg-slate-900/50' 
                          : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/20'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <Tv className="h-4 w-4" />
                        Materi Pelajaran
                      </div>
                    </button>
                    <button
                      onClick={() => setActiveTab('resources')}
                      className={`flex-1 py-4 text-center font-bold text-xs sm:text-sm transition-colors border-b-2 ${
                        activeTab === 'resources' 
                          ? 'border-blue-500 text-white bg-slate-900/50' 
                          : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/20'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <FolderOpen className="h-4 w-4" />
                        File Pendukung
                      </div>
                    </button>
                    <button
                      onClick={() => setActiveTab('discussion')}
                      className={`flex-1 py-4 text-center font-bold text-xs sm:text-sm transition-colors border-b-2 ${
                        activeTab === 'discussion' 
                          ? 'border-blue-500 text-white bg-slate-900/50' 
                          : 'border-transparent text-slate-400 hover:text-slate-200 hover:bg-slate-900/20'
                      }`}
                    >
                      <div className="flex items-center justify-center gap-2">
                        <MessageSquare className="h-4 w-4" />
                        Diskusi ({discussionList.length})
                      </div>
                    </button>
                  </div>

                  <div className="p-6 text-sm text-slate-300 leading-relaxed min-h-[160px]">
                    {/* Tab 1: Description */}
                    {activeTab === 'desc' && (
                      <div className="space-y-3">
                        <p>Pada materi <strong>{currentLesson.title}</strong> ini, kita berfokus pada teknik fundamental dan bagaimana menerapkannya secara optimal dalam alur kerja profesional sehari-hari.</p>
                        <p>Pastikan Anda mengikuti contoh latihan yang diperagakan instruktur langkah demi langkah. Jika Anda menemukan kesulitan, Anda dapat memutar ulang video ini atau berdiskusi di tab Diskusi Instruktur.</p>
                      </div>
                    )}

                    {/* Tab 2: Resources */}
                    {activeTab === 'resources' && (
                      <div className="space-y-4">
                        <p>Gunakan file pendukung berikut untuk mempermudah pengerjaan praktek mandiri Anda:</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          <a href="#" className="flex items-center justify-between p-3.5 bg-slate-900 hover:bg-slate-850 rounded-xl border border-slate-800 transition-all group">
                            <div className="flex items-center gap-3">
                              <FileText className="h-5 w-5 text-blue-400" />
                              <div className="text-left">
                                <p className="font-bold text-white text-xs">Modul Panduan PDF.pdf</p>
                                <p className="text-[10px] text-slate-500">Panduan Teknis Lengkap • 4.2 MB</p>
                              </div>
                            </div>
                            <Download className="h-4 w-4 text-slate-500 group-hover:text-white transition-colors" />
                          </a>
                          <a href="#" className="flex items-center justify-between p-3.5 bg-slate-900 hover:bg-slate-850 rounded-xl border border-slate-800 transition-all group">
                            <div className="flex items-center gap-3">
                              <FolderOpen className="h-5 w-5 text-indigo-400" />
                              <div className="text-left">
                                <p className="font-bold text-white text-xs">File Template Latihan.zip</p>
                                <p className="text-[10px] text-slate-500">Aset & Source Code • 15.6 MB</p>
                              </div>
                            </div>
                            <Download className="h-4 w-4 text-slate-500 group-hover:text-white transition-colors" />
                          </a>
                        </div>
                      </div>
                    )}

                    {/* Tab 3: Discussion */}
                    {activeTab === 'discussion' && (
                      <div className="space-y-6">
                        <form onSubmit={handlePostComment} className="flex gap-3">
                          <input
                            type="text"
                            value={discussionComment}
                            onChange={(e) => setDiscussionComment(e.target.value)}
                            placeholder="Tulis pertanyaan atau komentar Anda..."
                            className="flex-1 bg-slate-900 border border-slate-800 focus:border-blue-500 focus:outline-none rounded-xl px-4 py-2.5 text-xs sm:text-sm text-white transition-all placeholder:text-slate-500"
                          />
                          <button 
                            type="submit"
                            className="p-2.5 bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-md transition-colors"
                          >
                            <Send className="h-4 w-4" />
                          </button>
                        </form>
                        
                        <div className="space-y-4">
                          {discussionList.map((disc, idx) => (
                            <div key={idx} className="bg-slate-900/60 p-4 rounded-2xl border border-slate-800/80 flex items-start gap-4">
                              <div className="w-8 h-8 rounded-full bg-slate-800 text-blue-400 flex items-center justify-center font-bold text-xs flex-shrink-0">
                                {disc.name.charAt(0)}
                              </div>
                              <div className="space-y-1.5 flex-1 text-left">
                                <div className="flex items-center justify-between">
                                  <h4 className="font-bold text-xs text-white">{disc.name}</h4>
                                  <span className="text-[10px] text-slate-500 font-semibold">{disc.time}</span>
                                </div>
                                <p className="text-xs text-slate-300 leading-relaxed">{disc.text}</p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* LMS Right Sidebar: Collapsible Syllabus List */}
              <div className="lg:col-span-1 space-y-6">
                
                {/* Certificate Notification Alert Banner */}
                {progressPercentage === 100 && (
                  <div className="bg-gradient-to-br from-amber-500/10 to-yellow-500/10 border border-amber-500/30 p-5 rounded-3xl text-left space-y-3 shadow-lg shadow-amber-500/5">
                    <div className="flex items-center gap-2 text-amber-400">
                      <Sparkles className="h-5 w-5 animate-pulse" />
                      <h3 className="font-bold text-sm">Selamat, Kelas Selesai!</h3>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">Anda telah menyelesaikan 100% kurikulum pelajaran. Klaim sertifikat kompetensi Anda sekarang.</p>
                    <button 
                      onClick={() => setShowCertModal(true)}
                      className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 hover:from-amber-600 hover:to-yellow-600 text-slate-950 font-bold text-xs py-2.5 px-4 rounded-xl shadow-md transition-all duration-300 text-center"
                    >
                      Buka Sertifikat Anda
                    </button>
                  </div>
                )}

                <div className="bg-slate-950 border border-slate-800 rounded-3xl overflow-hidden shadow-xl">
                  <div className="px-6 py-5 border-b border-slate-800">
                    <h3 className="font-bold text-sm text-white tracking-wide">Silabus Pembelajaran</h3>
                  </div>

                  <div className="divide-y divide-slate-850">
                    {currentSyllabus.map((module, mIdx) => {
                      const isExpanded = !!expandedModules[mIdx];
                      
                      // Calculate completed count for this specific module
                      const moduleLessonIds = module.lessons.map(l => l.id);
                      const completedInModule = moduleLessonIds.filter(id => completedLessons[id]).length;
                      
                      return (
                        <div key={mIdx} className="bg-slate-950">
                          {/* Module Accordion Header */}
                          <button
                            onClick={() => toggleModuleExpand(mIdx)}
                            className="w-full flex items-center justify-between p-5 hover:bg-slate-900/50 transition-colors text-left"
                          >
                            <div className="space-y-1 pr-2">
                              <h4 className="font-bold text-slate-200 text-xs sm:text-sm leading-snug">Modul {mIdx + 1}: {module.title}</h4>
                              <p className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">{completedInModule}/{module.lessons.length} Pelajaran Selesai</p>
                            </div>
                            <div className="text-slate-400">
                              {isExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
                            </div>
                          </button>

                          {/* Module Accordion Lessons List */}
                          {isExpanded && (
                            <div className="bg-slate-900/40 border-t border-slate-850 px-3.5 py-2 space-y-1.5">
                              {module.lessons.map((lesson) => {
                                const isActive = currentLesson.id === lesson.id;
                                const isCompleted = !!completedLessons[lesson.id];
                                
                                return (
                                  <div
                                    key={lesson.id}
                                    onClick={() => handleLessonSelect({ ...lesson, moduleIdx: mIdx, moduleTitle: module.title })}
                                    className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-all border ${
                                      isActive 
                                        ? 'bg-blue-500/10 border-blue-500/35 text-white shadow-sm' 
                                        : 'bg-transparent border-transparent hover:bg-slate-850 text-slate-400 hover:text-slate-200'
                                    }`}
                                  >
                                    <div className="flex items-center gap-3.5 flex-1 min-w-0">
                                      {/* Clickable checkmark circle */}
                                      <button
                                        onClick={(e) => toggleLessonComplete(lesson.id, e)}
                                        className={`w-5 h-5 rounded-full border flex items-center justify-center flex-shrink-0 transition-colors ${
                                          isCompleted 
                                            ? 'bg-blue-600 border-blue-500 text-white' 
                                            : 'border-slate-700 hover:border-slate-500'
                                        }`}
                                      >
                                        {isCompleted && <Check className="h-3 w-3" />}
                                      </button>

                                      <div className="text-left min-w-0">
                                        <p className={`text-xs font-bold truncate ${isActive ? 'text-white' : 'text-slate-300 group-hover:text-white'}`}>
                                          {lesson.id} {lesson.title}
                                        </p>
                                        <div className="flex items-center gap-1.5 text-[10px] text-slate-500 font-semibold mt-0.5">
                                          <Clock className="h-3 w-3" />
                                          {lesson.duration}
                                        </div>
                                      </div>
                                    </div>

                                    {/* Play icon display */}
                                    <div className="pl-2">
                                      <Play className={`h-3 w-3 ${isActive ? 'text-blue-500 fill-current' : 'text-slate-600'}`} />
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* 3. PREMIUM CERTIFICATE GENERATOR MODAL OVERLAY */}
      {showCertModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto flex items-center justify-center p-4 sm:p-6 bg-slate-950/70 backdrop-blur-md">
          {/* Modal Container */}
          <div className="relative w-full max-w-4xl bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            
            {/* Modal Header */}
            <div className="flex justify-between items-center pb-4 border-b border-slate-800 mb-6">
              <div className="flex items-center gap-2">
                <Award className="h-5 w-5 text-amber-500 animate-pulse" />
                <h2 className="font-extrabold text-sm sm:text-base text-white">Sertifikat Kelulusan Resmi</h2>
              </div>
              <button 
                onClick={() => setShowCertModal(false)}
                className="p-1.5 hover:bg-slate-800 rounded-lg text-slate-400 hover:text-white transition-colors"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            {/* Certificate Editor Input */}
            <div className="mb-6 p-4 bg-slate-950/80 rounded-2xl border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-center sm:text-left">
                <p className="text-xs font-bold text-slate-300">Ubah Nama Sertifikat Anda</p>
                <p className="text-[10px] text-slate-500 leading-normal">Nama ini akan tercetak langsung pada lembar sertifikat kelulusan di bawah.</p>
              </div>
              <input 
                type="text" 
                value={studentName}
                onChange={(e) => setStudentName(e.target.value)}
                className="w-full sm:max-w-xs bg-slate-900 border border-slate-700 focus:border-blue-500 focus:outline-none rounded-xl px-4 py-2 text-xs font-bold text-white text-center sm:text-left transition-colors"
                placeholder="Ketik Nama Anda..."
              />
            </div>

            {/* Printable Certificate Template Canvas */}
            <div id="print-certificate-canvas" className="border-8 border-double border-amber-500/80 p-8 sm:p-12 rounded-2xl bg-white text-slate-800 text-center relative overflow-hidden shadow-lg select-none">
              
              {/* Gold Ribbon Watermark Background */}
              <div className="absolute -bottom-8 -right-8 w-44 h-44 bg-amber-500/5 rounded-full border border-amber-500/10 pointer-events-none" />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-amber-500/[0.02] to-transparent pointer-events-none" />
              
              <div className="border border-slate-100 p-4 rounded-xl flex flex-col items-center justify-between min-h-[420px] relative z-10">
                {/* Logo Brand Header */}
                <div className="space-y-2">
                  <h4 className="font-extrabold text-2xl tracking-widest text-slate-800 select-none">SkillMU</h4>
                  <p className="text-[9px] uppercase tracking-widest text-slate-500 font-extrabold">Skill Muhammadiyah Educational Platform</p>
                </div>
                
                {/* Certification Title */}
                <div className="space-y-4 py-4">
                  <h3 className="font-serif font-extrabold text-2xl tracking-wide text-amber-600 uppercase">Sertifikat Kelulusan</h3>
                  <div className="w-16 h-0.5 bg-slate-300 mx-auto" />
                  <p className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Diberikan secara terhormat kepada:</p>
                </div>

                {/* Student Name */}
                <div className="py-2">
                  <p className="font-serif text-3xl font-extrabold text-slate-800 border-b-2 border-slate-200 px-8 pb-1.5 inline-block min-w-[260px] tracking-wide">
                    {studentName || 'Ahmad Fauzi'}
                  </p>
                </div>

                {/* Course Verification Content */}
                <div className="space-y-3 max-w-lg mx-auto py-2">
                  <p className="text-xs text-slate-500 leading-relaxed">Atas dedikasi luar biasa dalam menyelesaikan kurikulum pelatihan dan evaluasi praktis kelas online:</p>
                  <p className="text-base font-extrabold text-slate-800 tracking-normal underline underline-offset-4">{skill.title}</p>
                </div>

                {/* Footer Signature & Medallion */}
                <div className="grid grid-cols-3 items-end w-full pt-6 border-t border-slate-100 mt-6">
                  {/* Instruktur Signature */}
                  <div className="text-center">
                    <p className="font-serif text-sm italic font-extrabold text-slate-700 leading-none pb-1">Bambang S.</p>
                    <div className="w-24 h-[1px] bg-slate-200 mx-auto mb-1.5" />
                    <p className="font-bold text-[9px] text-slate-700">{skill.instructor}</p>
                    <p className="text-[8px] text-slate-400 uppercase font-semibold">Instruktur Utama</p>
                  </div>

                  {/* Gold Medallion Icon Stamp */}
                  <div className="flex justify-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full border-4 border-white shadow-md flex items-center justify-center relative">
                      <div className="absolute inset-1 border border-dashed border-amber-600/30 rounded-full" />
                      <Award className="h-7 w-7 text-slate-900" />
                    </div>
                  </div>

                  {/* Date and Platform Signature */}
                  <div className="text-center">
                    <p className="font-mono text-xs font-bold text-slate-700 leading-none pb-1">{new Date().toLocaleDateString('id-ID', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                    <div className="w-24 h-[1px] bg-slate-200 mx-auto mb-1.5" />
                    <p className="font-bold text-[9px] text-slate-700">Pendidikan Berkelanjutan</p>
                    <p className="text-[8px] text-slate-400 uppercase font-semibold">SkillMU Verifikasi</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Modal Controls */}
            <div className="flex flex-col sm:flex-row justify-end gap-3 pt-6 border-t border-slate-800 mt-6">
              <button
                onClick={() => setShowCertModal(false)}
                className="w-full sm:w-auto px-5 py-2.5 bg-slate-800 hover:bg-slate-750 text-slate-300 font-semibold rounded-xl text-xs sm:text-sm transition-colors text-center"
              >
                Tutup
              </button>
              <button
                onClick={() => window.print()}
                className="w-full sm:w-auto px-5 py-2.5 bg-gradient-to-r from-blue-600 to-indigo-500 hover:from-blue-700 hover:to-indigo-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md shadow-blue-500/10 hover:shadow-lg transition-all text-center flex items-center justify-center gap-2"
              >
                <Download className="h-4 w-4" />
                Cetak / Simpan PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
