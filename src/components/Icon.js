import React from 'react';
import {
  ArrowDown,
  Atom,
  Award,
  AlertCircle,
  AlertTriangle,
  BarChart3,
  Bot,
  Brain,
  Building,
  Calculator,
  Calendar,
  CheckCircle,
  Clock,
  Cloud,
  Code2,
  Database,
  Download,
  ExternalLink,
  Eye,
  FileText,
  Flame,
  FlaskConical,
  FolderOpen,
  GitBranch,
  GraduationCap,
  ContactRound,
  Laptop,
  Layers,
  Lightbulb,
  LineChart,
  Mail,
  MessageCircle,
  MessageSquare,
  Maximize2,
  Plug,
  Presentation,
  RefreshCw,
  Rocket,
  Search,
  Send,
  Server,
  Settings2,
  Radio,
  Tag,
  Terminal,
  User,
  UserCog,
  Users,
  Workflow,
  X,
  ArrowLeftRight,
} from 'lucide-react';

// Lucide replacements for previous FontAwesome names. Keys are the old names
// used throughout components and JSON data.
const LUCIDE_MAP = {
  // UI / nav
  'arrow-down': ArrowDown,
  'external-link': ExternalLink,
  'external-link-alt': ExternalLink,
  'times': X,
  'expand': Maximize2,
  'search': Search,
  'eye': Eye,
  'download': Download,
  'tag': Tag,
  'check-circle': CheckCircle,
  'exclamation-circle': AlertCircle,
  'exclamation-triangle': AlertTriangle,
  'clock': Clock,
  'calendar': Calendar,
  'building': Building,
  'plug': Plug,

  // Communication
  'envelope': Mail,
  'email': Mail,
  'paper-plane': Send,
  'comment': MessageCircle,
  'comments': MessageCircle,
  'comment-alt': MessageSquare,
  'message': MessageSquare,
  'subject': MessageSquare,

  // Identity
  'name': User,
  'user': User,
  'user-circle': User,
  'user-cog': UserCog,
  'users-cog': Users,
  'id-badge': ContactRound,

  // Tech & dev
  'code': Code2,
  'code-branch': GitBranch,
  'terminal': Terminal,
  'laptop-code': Laptop,
  'database': Database,
  'server': Server,
  'cloud': Cloud,
  'cogs': Settings2,
  'layer-group': Layers,
  'project-diagram': Workflow,
  'stream': Radio,
  'sync': RefreshCw,
  'sync-alt': RefreshCw,
  'exchange-alt': ArrowLeftRight,

  // Concept
  'brain': Brain,
  'atom': Atom,
  'lightbulb': Lightbulb,
  'fire': Flame,
  'rocket': Rocket,
  'flask': FlaskConical,
  'robot': Bot,
  'calculator': Calculator,
  'chart-bar': BarChart3,
  'chart-line': LineChart,
  'chalkboard-teacher': Presentation,
  'graduation-cap': GraduationCap,
  'file-alt': FileText,
  'folder-open': FolderOpen,
  'certificate': Award,

};

// Brand icons not in Lucide — fall back to FontAwesome (brand class).
// Lucide dropped social/brand icons; we keep FA for these.
const FA_BRAND_FALLBACK = new Set([
  'github', 'linkedin', 'linkedin-in', 'twitter', 'x-twitter',
  'python', 'aws', 'docker', 'google', 'react', 'linux',
  'js-square', 'node-js', 'git-alt', 'git', 'instagram',
]);

// Normalize aliases so old FA-style names still work after Lucide migration.
const NAME_ALIASES = {
  'linkedin-in': 'linkedin',
  'x-twitter': 'twitter',
};

const SIZE_PX = {
  '1x': 16,
  '2x': 24,
  '3x': 32,
  '4x': 40,
  '5x': 48,
};

const Icon = ({ name, className = '', size = '1x', strokeWidth = 1.75, ...props }) => {
  const resolvedName = NAME_ALIASES[name] ?? name;
  const Component = LUCIDE_MAP[resolvedName];
  const px = SIZE_PX[size] ?? (typeof size === 'number' ? size : 18);

  if (Component) {
    return (
      <Component
        size={px}
        strokeWidth={strokeWidth}
        className={className}
        aria-hidden="true"
        {...props}
      />
    );
  }

  if (FA_BRAND_FALLBACK.has(resolvedName)) {
    return (
      <i
        className={`fab fa-${resolvedName} fa-${size} ${className}`}
        aria-hidden="true"
        {...props}
      />
    );
  }

  return (
    <i
      className={`fas fa-${resolvedName} fa-${size} ${className}`}
      aria-hidden="true"
      {...props}
    />
  );
};

export default Icon;
