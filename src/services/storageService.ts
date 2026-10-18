import type { UserProfile, BackupData } from '../types/study';

const PROFILES_STORAGE_KEY = 'unifacs_study_profiles_v2';
const ACTIVE_PROFILE_KEY = 'unifacs_study_active_profile_v2';

const DEFAULT_PROFILES: UserProfile[] = [
  {
    id: 'user-gilvania',
    name: 'Gilvania',
    avatar: '👩‍🎓',
    createdAt: new Date().toISOString(),
    streakDays: 1,
    lastStudyDate: new Date().toISOString().split('T')[0],
    answers: {},
    bookmarkedQuestionIds: []
  },
  {
    id: 'user-pedro',
    name: 'Pedro',
    avatar: '👨‍💻',
    createdAt: new Date().toISOString(),
    streakDays: 1,
    lastStudyDate: new Date().toISOString().split('T')[0],
    answers: {},
    bookmarkedQuestionIds: []
  }
];

export const getProfilesFromStorage = (): UserProfile[] => {
  try {
    const raw = localStorage.getItem(PROFILES_STORAGE_KEY);
    if (!raw) {
      localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(DEFAULT_PROFILES));
      return DEFAULT_PROFILES;
    }
    const parsed = JSON.parse(raw);
    if (!Array.isArray(parsed) || parsed.length === 0) {
      localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(DEFAULT_PROFILES));
      return DEFAULT_PROFILES;
    }
    return parsed;
  } catch (err) {
    console.error('Erro ao ler perfis do localStorage:', err);
    return DEFAULT_PROFILES;
  }
};

export const getActiveProfileIdFromStorage = (): string => {
  const activeId = localStorage.getItem(ACTIVE_PROFILE_KEY);
  const profiles = getProfilesFromStorage();
  if (activeId && profiles.some(p => p.id === activeId)) {
    return activeId;
  }
  const defaultId = profiles[0]?.id || 'user-gilvania';
  localStorage.setItem(ACTIVE_PROFILE_KEY, defaultId);
  return defaultId;
};

export const saveProfilesToStorage = (profiles: UserProfile[]) => {
  try {
    localStorage.setItem(PROFILES_STORAGE_KEY, JSON.stringify(profiles));
  } catch (err) {
    console.error('Erro ao salvar perfis:', err);
  }
};

export const saveActiveProfileId = (profileId: string) => {
  try {
    localStorage.setItem(ACTIVE_PROFILE_KEY, profileId);
  } catch (err) {
    console.error('Erro ao salvar perfil ativo:', err);
  }
};

export const recordQuestionAnswer = (
  questionId: string,
  selectedOption: string,
  isCorrect: boolean,
  rating?: 'easy' | 'medium' | 'hard'
): UserProfile => {
  const profiles = getProfilesFromStorage();
  const activeId = getActiveProfileIdFromStorage();
  const profileIndex = profiles.findIndex(p => p.id === activeId);
  const profile = profiles[profileIndex >= 0 ? profileIndex : 0];

  const prev = profile.answers[questionId];
  const updatedProfile: UserProfile = {
    ...profile,
    answers: {
      ...profile.answers,
      [questionId]: {
        selectedOption,
        isCorrect,
        userRating: rating || prev?.userRating,
        answeredAt: new Date().toISOString(),
        attemptsCount: (prev?.attemptsCount || 0) + 1
      }
    }
  };

  profiles[profileIndex >= 0 ? profileIndex : 0] = updatedProfile;
  saveProfilesToStorage(profiles);
  return updatedProfile;
};

export const recordDiscursiveAnswer = (
  questionId: string,
  draft: string,
  selfScore?: number,
  checkedKeywords?: string[]
): UserProfile => {
  const profiles = getProfilesFromStorage();
  const activeId = getActiveProfileIdFromStorage();
  const profileIndex = profiles.findIndex(p => p.id === activeId);
  const profile = profiles[profileIndex >= 0 ? profileIndex : 0];

  const prev = profile.discursiveAnswers?.[questionId];

  const updatedProfile: UserProfile = {
    ...profile,
    discursiveAnswers: {
      ...(profile.discursiveAnswers || {}),
      [questionId]: {
        userDraft: draft,
        selfScore: selfScore !== undefined ? selfScore : prev?.selfScore,
        checkedKeywords: checkedKeywords || prev?.checkedKeywords || [],
        savedAt: new Date().toISOString()
      }
    }
  };

  profiles[profileIndex >= 0 ? profileIndex : 0] = updatedProfile;
  saveProfilesToStorage(profiles);
  return updatedProfile;
};

export const toggleBookmarkQuestion = (questionId: string): UserProfile => {
  const profiles = getProfilesFromStorage();
  const activeId = getActiveProfileIdFromStorage();
  const profileIndex = profiles.findIndex(p => p.id === activeId);
  const profile = profiles[profileIndex >= 0 ? profileIndex : 0];

  const isBookmarked = profile.bookmarkedQuestionIds.includes(questionId);
  const updatedBookmarks = isBookmarked
    ? profile.bookmarkedQuestionIds.filter(id => id !== questionId)
    : [...profile.bookmarkedQuestionIds, questionId];

  const updatedProfile: UserProfile = {
    ...profile,
    bookmarkedQuestionIds: updatedBookmarks
  };

  profiles[profileIndex >= 0 ? profileIndex : 0] = updatedProfile;
  saveProfilesToStorage(profiles);
  return updatedProfile;
};

export const exportAllDataJSON = (): string => {
  const data: BackupData = {
    version: '2.0.0-unifacs',
    exportedAt: new Date().toISOString(),
    profiles: getProfilesFromStorage(),
    activeProfileId: getActiveProfileIdFromStorage()
  };
  return JSON.stringify(data, null, 2);
};

export const importAllDataJSON = (jsonString: string): boolean => {
  try {
    const data: BackupData = JSON.parse(jsonString);
    if (data && Array.isArray(data.profiles) && data.profiles.length > 0) {
      saveProfilesToStorage(data.profiles);
      if (data.activeProfileId) {
        saveActiveProfileId(data.activeProfileId);
      }
      return true;
    }
    return false;
  } catch (err) {
    console.error('Falha ao importar backup:', err);
    return false;
  }
};
