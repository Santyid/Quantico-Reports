import { LucideIconData } from 'lucide-angular';

// Report type enumeration
export type ReportType =
  | 'executive-summary'
  | 'insights-marca'
  | 'performance-plataforma'
  | 'analisis-competitivo'
  | 'usuarios-influyentes'
  | 'tendencias'
  | 'recomendaciones-area'
  | 'voice-of-customer';

// KPI Card Interface
export interface KpiData {
  label: string;
  value: string | number;
  change?: number;
  changeLabel?: string;
  icon?: LucideIconData;
  variant?: 'default' | 'success' | 'warning' | 'error';
}

// Sentiment breakdown
export interface SentimentBreakdown {
  positive: number;
  neutral: number;
  negative: number;
}

// Topic insight for Executive Summary
export interface TopicInsight {
  topic: string;
  mentions: number;
  sentiment: SentimentBreakdown;
  insight: string;
  action: string;
}

// Alert for early warning
export interface EarlyWarningAlert {
  topic: string;
  riskLevel: 'high' | 'medium' | 'low';
  trend: 'up' | 'down' | 'stable';
  mentions: number;
  description: string;
}

// Executive Summary Data
export interface ExecutiveSummaryData {
  totalMentions: KpiData;
  uniqueUsers: KpiData;
  netSentiment: KpiData;
  sentimentBreakdown: SentimentBreakdown;
  shareOfVoice: KpiData;
  potentialAudience: KpiData;
  churnIntent: KpiData;
  earlyWarnings: EarlyWarningAlert[];
  topPlatform: string;
  topTopics: TopicInsight[];
}

// Daily sentiment for charts
export interface DailySentiment {
  date: string;
  positive: number;
  neutral: number;
  negative: number;
  total: number;
}

// Emotional driver
export interface EmotionalDriver {
  driver: string;
  emotion: string;
  percentage: number;
  exampleComment: string;
  source: string;
  sourceHandle?: string;
}

// Insights de Marca Data
export interface InsightsMarcaData {
  dailySentiment: DailySentiment[];
  positiveDrivers: EmotionalDriver[];
  negativeDrivers: EmotionalDriver[];
  mainInsight: string;
}

// Platform sentiment
export interface PlatformSentiment {
  platform: string;
  icon: string;
  positive: number;
  neutral: number;
  negative: number;
  total: number;
  insight: string;
}

// Platform KPIs
export interface PlatformKpi {
  platform: string;
  icon: string;
  engagementRate: number;
  shares: number;
  reactions: number;
  mentions: number;
}

// Post highlight
export interface PostHighlight {
  platform: string;
  platformIcon: string;
  author: string;
  authorHandle: string;
  content: string;
  engagement: number;
  shares: number;
  reactions: number;
  date: string;
  insight: string;
  imageUrl?: string;
}

// Performance por Plataforma Data
export interface PerformancePlataformaData {
  platformSentiment: PlatformSentiment[];
  platformKpis: PlatformKpi[];
  bestPost: PostHighlight;
  totals: {
    mentions: number;
    shares: number;
    engagement: number;
  };
}

// Competitor SOV
export interface CompetitorSOV {
  brand: string;
  sov: number;
  color: string;
  isMain?: boolean;
}

// Temporal evolution point
export interface TemporalEvolutionPoint {
  date: string;
  values: { brand: string; value: number; color: string }[];
}

// Competitor comparison
export interface CompetitorComparison {
  brand: string;
  sov: number;
  mentions: number;
  positivePercent: number;
  neutralPercent: number;
  negativePercent: number;
  relevantTopic: string;
  isMain?: boolean;
}

// Analisis Competitivo Data
export interface AnalisisCompetitivoData {
  sovDistribution: CompetitorSOV[];
  kpis: {
    sovDominant: KpiData;
    bestSentiment: KpiData;
    conversationVolume: KpiData;
    emotionalConnection: KpiData;
  };
  temporalEvolution: TemporalEvolutionPoint[];
  comparisonTable: CompetitorComparison[];
  marketOpportunities: string;
  evolutionInsight: string;
}

// Trend
export interface Trend {
  name: string;
  growth: number;
  mentions: number;
  timeframe: string;
  insight: string;
  category: string;
}

// Growth pattern
export interface GrowthPattern {
  category: string;
  currentValue: number;
  previousValue: number;
  trend: 'up' | 'down' | 'stable';
  changePercent: number;
}

// Early signal
export interface EarlySignal {
  signal: string;
  confidence: number;
  potentialImpact: 'high' | 'medium' | 'low';
  recommendation: string;
  relatedTrend?: string;
}

// Tendencias Data
export interface TendenciasData {
  totalIndustryMentions: number;
  analysisContext: string;
  emergingTrends: Trend[];
  growthPatterns: GrowthPattern[];
  earlySignals: EarlySignal[];
  mainInsight: string;
}

// Action item
export interface ActionItem {
  action: string;
  impact: string;
  effort: 'low' | 'medium' | 'high';
  deadline?: string;
}

// Department recommendation
export interface DepartmentRecommendation {
  department: string;
  iconName: string;
  priority: 'high' | 'medium' | 'low';
  actions: ActionItem[];
  summary: string;
}

// Strategic insight
export interface StrategicInsight {
  title: string;
  description: string;
  relatedData?: string;
}

// Recomendaciones por Area Data
export interface RecomendacionesAreaData {
  departments: DepartmentRecommendation[];
  strategicInsights: StrategicInsight[];
  finalInsight: string;
}
