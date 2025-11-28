import React from 'react';

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

export interface StudyContent {
  bibleText: BibleParagraph[];
  quadrants: StudyQuadrants;
}