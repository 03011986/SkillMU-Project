export interface Skill {
  id: number;
  title: string;
  category: 'soft-skill' | 'hard-skill';
  description: string;
  instructor: string;
  duration: string;
  level: 'Pemula' | 'Menengah' | 'Lanjutan';
  students: number;
  rating: number;
  image: string;
  benefits: string[];
}

export const skills: Skill[] = [
  {
    id: 1,
    title: 'Public Speaking & Komunikasi Efektif',
    category: 'soft-skill',
    description: 'Pelajari teknik berbicara di depan umum dengan percaya diri dan menyampaikan ide secara efektif kepada audiens.',
    instructor: 'Dr. Ahmad Fauzi',
    duration: '6 Minggu',
    level: 'Pemula',
    students: 1250,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1589395937658-0557e7d89fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2ODU0OTY3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    benefits: [
      'Meningkatkan kepercayaan diri saat berbicara di depan umum',
      'Menguasai teknik storytelling yang menarik',
      'Mampu menyampaikan presentasi dengan struktur yang baik',
      'Mengelola rasa gugup dan cemas',
    ],
  },
  {
    id: 2,
    title: 'Web Development dengan React & TypeScript',
    category: 'hard-skill',
    description: 'Bangun aplikasi web modern dengan React, TypeScript, dan best practices dalam pengembangan frontend.',
    instructor: 'Muhammad Ridwan, S.Kom',
    duration: '10 Minggu',
    level: 'Menengah',
    students: 2340,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1753613648137-602c669cbe07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHNraWxsc3xlbnwxfHx8fDE3Njg2MjYzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    benefits: [
      'Menguasai React Hooks dan Component Architecture',
      'Memahami TypeScript untuk code yang lebih robust',
      'Mengimplementasikan State Management yang efisien',
      'Portfolio project untuk menunjang karir',
    ],
  },
  {
    id: 3,
    title: 'Leadership & Team Management',
    category: 'soft-skill',
    description: 'Kembangkan kemampuan memimpin tim dan mengelola proyek dengan metode yang terbukti efektif.',
    instructor: 'Siti Nurhaliza, M.M',
    duration: '8 Minggu',
    level: 'Lanjutan',
    students: 980,
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1576267423048-15c0040fec78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHRlYW13b3JrJTIwY29sbGFib3JhdGlvbnxlbnwxfHx8fDE3Njg2MjYzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    benefits: [
      'Memahami berbagai gaya kepemimpinan',
      'Teknik motivasi dan delegasi yang efektif',
      'Mengelola konflik dalam tim',
      'Membangun budaya kerja yang positif',
    ],
  },
  {
    id: 4,
    title: 'Graphic Design dengan Adobe Illustrator',
    category: 'hard-skill',
    description: 'Kuasai Adobe Illustrator untuk membuat desain grafis profesional dari logo hingga ilustrasi kompleks.',
    instructor: 'Rina Kartika, S.Ds',
    duration: '7 Minggu',
    level: 'Pemula',
    students: 1560,
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1610137444548-728e7c4b49d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMGVkdWNhdGlvbnxlbnwxfHx8fDE3Njg2MjYzNDJ8MA&ixlib=rb-4.1.0&q=80&w=1080',
    benefits: [
      'Menguasai tools dan features Adobe Illustrator',
      'Membuat logo dan branding profesional',
      'Teknik ilustrasi vektor yang advanced',
      'Portfolio desain untuk freelance atau karir',
    ],
  },
  {
    id: 5,
    title: 'Critical Thinking & Problem Solving',
    category: 'soft-skill',
    description: 'Asah kemampuan berpikir kritis dan menyelesaikan masalah dengan pendekatan yang terstruktur dan kreatif.',
    instructor: 'Prof. Dr. Bambang Suryanto',
    duration: '5 Minggu',
    level: 'Menengah',
    students: 1120,
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1589395937658-0557e7d89fad?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkZW50cyUyMGxlYXJuaW5nJTIwZWR1Y2F0aW9ufGVufDF8fHx8MTc2ODU0OTY3MHww&ixlib=rb-4.1.0&q=80&w=1080',
    benefits: [
      'Framework berpikir kritis yang sistematis',
      'Teknik analisis dan evaluasi informasi',
      'Metode problem solving yang efektif',
      'Pengambilan keputusan berbasis data',
    ],
  },
  {
    id: 6,
    title: 'Data Analysis dengan Python',
    category: 'hard-skill',
    description: 'Pelajari analisis data menggunakan Python, Pandas, dan visualisasi data untuk insight bisnis.',
    instructor: 'Andi Prasetyo, M.Kom',
    duration: '9 Minggu',
    level: 'Menengah',
    students: 1890,
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1753613648137-602c669cbe07?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2RpbmclMjBwcm9ncmFtbWluZyUyMHNraWxsc3xlbnwxfHx8fDE3Njg2MjYzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080',
    benefits: [
      'Menguasai Python untuk data analysis',
      'Pandas dan NumPy untuk manipulasi data',
      'Visualisasi data dengan Matplotlib & Seaborn',
      'Real-world data projects',
    ],
  },
];

export interface UserProgress {
  skillId: number;
  skillTitle: string;
  progress: number;
  lastAccessed: string;
  completed: boolean;
}

export const userProgressData: UserProgress[] = [
  {
    skillId: 2,
    skillTitle: 'Web Development dengan React & TypeScript',
    progress: 65,
    lastAccessed: '2 jam yang lalu',
    completed: false,
  },
  {
    skillId: 1,
    skillTitle: 'Public Speaking & Komunikasi Efektif',
    progress: 100,
    lastAccessed: '3 hari yang lalu',
    completed: true,
  },
  {
    skillId: 6,
    skillTitle: 'Data Analysis dengan Python',
    progress: 30,
    lastAccessed: '1 minggu yang lalu',
    completed: false,
  },
];

export interface AdminStats {
  totalUsers: number;
  totalSkills: number;
  totalClasses: number;
  activeUsers: number;
  completionRate: number;
  newUsersThisMonth: number;
}

export const adminStats: AdminStats = {
  totalUsers: 8450,
  totalSkills: 124,
  totalClasses: 356,
  activeUsers: 3200,
  completionRate: 78,
  newUsersThisMonth: 520,
};
