import * as React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Scripture {
  title: string;
  reference: string;
  theme: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface MethodStep {
  title: string;
  icon: React.ReactNode;
  description: string;
  subPoints: string[];
  color: string;
}

export interface BibleVerse {
  num: number;
  text: string;
}

export interface BibleParagraph {
  verses: BibleVerse[];
}

export interface StudyQuadrants {
  god: string[];
  people: string[];
  obedience: {
    example: string;
    share: string;
  };
}

export interface LocalizedStudyContent {
  title: string;
  bibleText: BibleParagraph[];
  quadrants: StudyQuadrants;
}

export interface MultilingualStudyContent {
  pt: LocalizedStudyContent;
  en: LocalizedStudyContent;
  fr: LocalizedStudyContent;
}

export interface StudyContent {
  // Legacy support if needed, but we are moving to Multilingual
  bibleText: BibleParagraph[];
  quadrants: StudyQuadrants;
}