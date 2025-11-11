export type AnalyzeResponse = {
  analysis: {
    summary: string;
    soft_skills: {
      strengths: string[];
      to_improve: string[];
    };
    hard_skills: {
      missing: string[];
      recommended: string[];
    };
    recommendations: string[];
    readiness_score: number;
  };
};
