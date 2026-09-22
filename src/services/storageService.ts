import type { UserProfile, BackupData } from '../types/study';

const PROFILES_STORAGE_KEY = 'ibge_study_profiles_v1';
const ACTIVE_PROFILE_KEY = 'ibge_study_active_profile_v1';

const DEFAULT_PROFILES: UserProfile[] = [
  {
    id: 'user-pedro',
    name: 'Pedro',
    avatar: '👨‍💻',
    createdAt: new Date().toISOString(),
    streakDays: 1,
    lastStudyDate: new Date().toISOString().split('T')[0],
    answers: {},
    bookmarkedQuestionIds: []
  },
  {
    id: 'user-namorada',
    name: 'Namorada',
    avatar: '👩‍💻',
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
    return JSON.parse(raw);
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
  const defaultId = profiles[0]?.id || 'user-pedro';
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

export const saveActiveProfileId = (id: string) => {
  localStorage.setItem(ACTIVE_PROFILE_KEY, id);
};

export const updateActiveProfile = (updater: (profile: UserProfile) => UserProfile): UserProfile => {
  const profiles = getProfilesFromStorage();
  const activeId = getActiveProfileIdFromStorage();
  const today = new Date().toISOString().split('T')[0];

  const updatedProfiles = profiles.map(p => {
    if (p.id === activeId) {
      let updated = updater(p);
      
      // Checar e atualizar streak de dias
      if (updated.lastStudyDate !== today) {
        const lastDate = new Date(updated.lastStudyDate);
        const currDate = new Date(today);
        const diffDays = Math.floor((currDate.getTime() - lastDate.getTime()) / (1000 * 3600 * 24));
        
        if (diffDays === 1) {
          updated.streakDays += 1;
        } else if (diffDays > 1) {
          updated.streakDays = 1;
        }
        updated.lastStudyDate = today;
      }
      return updated;
    }
    return p;
  });

  saveProfilesToStorage(updatedProfiles);
  return updatedProfiles.find(p => p.id === activeId)!;
};

export const recordQuestionAnswer = (
  questionId: string,
  selectedOption: string,
  isCorrect: boolean,
  userRating?: 'easy' | 'medium' | 'hard'
) => {
  return updateActiveProfile(profile => {
    const existing = profile.answers[questionId];
    const attemptsCount = existing ? existing.attemptsCount + 1 : 1;

    return {
      ...profile,
      answers: {
        ...profile.answers,
        [questionId]: {
          selectedOption,
          isCorrect,
          userRating,
          answeredAt: new Date().toISOString(),
          attemptsCount
        }
      }
    };
  });
};

export const toggleBookmarkQuestion = (questionId: string) => {
  return updateActiveProfile(profile => {
    const isBookmarked = profile.bookmarkedQuestionIds.includes(questionId);
    const updatedBookmarks = isBookmarked
      ? profile.bookmarkedQuestionIds.filter(id => id !== questionId)
      : [...profile.bookmarkedQuestionIds, questionId];

    return {
      ...profile,
      bookmarkedQuestionIds: updatedBookmarks
    };
  });
};

export const exportAllDataJSON = (): string => {
  const profiles = getProfilesFromStorage();
  const activeProfileId = getActiveProfileIdFromStorage();
  const payload: BackupData = {
    version: '1.0',
    exportedAt: new Date().toISOString(),
    profiles,
    activeProfileId
  };
  return JSON.stringify(payload, null, 2);
};

export const importAllDataJSON = (jsonStr: string): boolean => {
  try {
    const parsed: BackupData = JSON.parse(jsonStr);
    if (parsed && Array.isArray(parsed.profiles)) {
      saveProfilesToStorage(parsed.profiles);
      if (parsed.activeProfileId) {
        saveActiveProfileId(parsed.activeProfileId);
      }
      return true;
    }
    return false;
  } catch (err) {
    console.error('Falha ao importar dados JSON:', err);
    return false;
  }
};
