import * as React from 'react';

export type Language = 'pt' | 'en' | 'fr' | 'es';

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
  es: LocalizedStudyContent;
}

export interface HomeContent {
  title: string;
  subtitle: string;
  facilitatorBtn: string;
  pathLabel: string;
  comingSoon: string;
  // New Home Fields
  welcome: string;
  meetingInfo: string;
  meetingDay: string;
  location: string;
  confirmBtn: string;
  verseTitle: string;
  nextStudy: string;
  devotionalTitle: string;
  devotionalDesc: string;
  ssTitle: string;
  ssDesc: string;
  ssBtn: string;
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
  es: LocalizedScriptureItem;
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
  es: { title: string; theme: string };
}

// Resource / File Upload Types
export interface Resource {
    id: string;
    title: string;
    description: string;
    date: string;
    status: 'pending' | 'approved' | 'rejected';
    fileName: string;
    uploader: string;
    // New fields for Library View & Real Files
    coverColor?: string; // Tailwind class e.g. 'bg-blue-600'
    category?: 'book' | 'sheet' | 'image';
    fileUrl?: string; // Real URL or Base64 Data
    fileType?: string; // Mime type e.g. 'application/pdf'
}

export interface ResourceUI {
    pageTitle: string;
    tabLibrary: string;
    tabUpload: string;
    tabAdmin: string;
    uploadTitle: string;
    uploadDesc: string;
    formTitle: string;
    formDesc: string;
    formFile: string;
    btnUpload: string;
    emptyLibrary: string;
    emptyPending: string;
    statusPending: string;
    statusApproved: string;
    adminLogin: string;
    adminPass: string;
    btnLogin: string;
    readerBack: string; // New UI string
    downloadBtn: string;
}