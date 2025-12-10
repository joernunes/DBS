import * as React from 'react';

export type Language = 'pt' | 'en' | 'fr';

export interface Scripture {
  title: string;
  reference: string;
  theme: string;
}

export interface BibleVerse {
  num: number;
  text: string;
}

export interface BibleParagraph {
  verses: BibleVerse[];
}

export interface StudyQuadrants {
  god: string[]; // Can be specific answers or generic questions
  people: string[]; // Can be specific answers or generic questions
  obedience: {
    example: string;
    share: string;
  };
}

export interface LocalizedStudyContent {
  title: string;
  bibleText: BibleParagraph[]; // Empty if generic
  quadrants: StudyQuadrants;
  isGeneric?: boolean; // New flag
}

export interface MultilingualStudyContent {
  pt: LocalizedStudyContent;
  en: LocalizedStudyContent;
  fr: LocalizedStudyContent;
}

export interface HomeContent {
  title: string;
  subtitle: string;
  facilitatorBtn: string;
  pathLabel: string;
  comingSoon: string;
}

export interface LocalizedScriptureItem {
  title: string;
  theme: string;
}

export interface MultilingualScriptureItem {
  reference: string; // Acts as ID
  pt: LocalizedScriptureItem;
  en: LocalizedScriptureItem;
  fr: LocalizedScriptureItem;
}

export interface GenericQuestions {
  god: string[];
  people: string[];
  obedience: {
    example: string;
    share: string;
  }
}

// Morning Meditation Types
export interface GuideStep {
  title: string;
  desc: string;
  bullets?: string[];
}

export interface GuidePhase {
  title: string;
  desc?: string;
  steps: GuideStep[];
}

export interface MorningUI {
  title: string;
  subtitle: string;
  guideBtn: string;
  backBtn: string;
  listTitle: string;
  guideTitle: string;
  guideIntro: string; // New introduction text
  guidePhases: GuidePhase[]; // New structure for the guide
}

export interface MeditationItem {
  id: string;
  reference: string;
  pt: { title: string; theme: string };
  en: { title: string; theme: string };
  fr: { title: string; theme: string };
}