import { useState, useEffect } from 'react';
import { 
  getProfilesFromStorage, 
  getActiveProfileIdFromStorage, 
  saveActiveProfileId, 
  saveProfilesToStorage 
} from './services/storageService';
import { QUESTIONS_DATABASE } from './data/questions';
import type { UserProfile, SubjectType } from './types/study';
import { Navbar } from './components/Navbar';
import { CadernosTeoriaMode } from './components/CadernosTeoriaMode';
import { DiscursiveMode } from './components/DiscursiveMode';
import { FlashcardMode } from './components/FlashcardMode';
import { SimuladoMode } from './components/SimuladoMode';
import { CadernoErrosMode } from './components/CadernoErrosMode';
import { BizusQuickRead } from './components/BizusQuickRead';
import { Dashboard } from './components/Dashboard';
import { AIChatbot } from './components/AIChatbot';
import { LabPraticoMode } from './components/LabPraticoMode';

export function App() {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [activeProfileId, setActiveProfileId] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('teoria');
  const [selectedSubject, setSelectedSubject] = useState<SubjectType>(() => {
    const saved = localStorage.getItem('unifacs_selected_subject');
    return (saved === 'Banco de Dados' || saved === 'Qualidade de Software') 
      ? (saved as SubjectType) 
      : 'Qualidade de Software';
  });

  const refreshProfiles = () => {
    const loadedProfiles = getProfilesFromStorage();
    const activeId = getActiveProfileIdFromStorage();
    setProfiles(loadedProfiles);
    setActiveProfileId(activeId);
  };

  useEffect(() => {
    refreshProfiles();
  }, []);

  const handleSelectSubject = (subj: SubjectType) => {
    setSelectedSubject(subj);
    localStorage.setItem('unifacs_selected_subject', subj);
  };

  const activeProfile = profiles.find(p => p.id === activeProfileId) || profiles[0];

  const handleSwitchProfile = (id: string) => {
    saveActiveProfileId(id);
    setActiveProfileId(id);
  };

  const handleUpdateProfile = (updatedProfile: UserProfile) => {
    const updatedList = profiles.map(p => p.id === updatedProfile.id ? updatedProfile : p);
    setProfiles(updatedList);
    saveProfilesToStorage(updatedList);
  };

  if (!activeProfile) {
    return (
      <div className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-500"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      
      {/* NAVBAR SUPERIOR */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        selectedSubject={selectedSubject}
        onSelectSubject={handleSelectSubject}
        profiles={profiles}
        activeProfile={activeProfile}
        onSwitchProfile={handleSwitchProfile}
        onRefreshData={refreshProfiles}
      />

      {/* CONTEÚDO DA PÁGINA */}
      <main className="flex-1 pb-16">
        {activeTab === 'teoria' && (
          <CadernosTeoriaMode
            selectedSubject={selectedSubject}
            onSelectSubject={handleSelectSubject}
          />
        )}

        {activeTab === 'discursive' && (
          <DiscursiveMode
            selectedSubject={selectedSubject}
            onSelectSubject={handleSelectSubject}
            activeProfile={activeProfile}
            onUpdateProfile={handleUpdateProfile}
          />
        )}

        {activeTab === 'flashcards' && (
          <FlashcardMode
            questions={QUESTIONS_DATABASE}
            activeProfile={activeProfile}
            onUpdateProfile={handleUpdateProfile}
          />
        )}

        {activeTab === 'simulado' && (
          <SimuladoMode
            questions={QUESTIONS_DATABASE}
            activeProfile={activeProfile}
            onUpdateProfile={handleUpdateProfile}
            onReviewErrors={() => setActiveTab('caderno_erros')}
          />
        )}

        {activeTab === 'lab_pratico' && (
          <LabPraticoMode />
        )}

        {activeTab === 'tutor_ia' && (
          <AIChatbot />
        )}

        {activeTab === 'caderno_erros' && (
          <CadernoErrosMode
            questions={QUESTIONS_DATABASE}
            activeProfile={activeProfile}
            onUpdateProfile={handleUpdateProfile}
            onGoToFlashcard={(_questionId) => {
              setActiveTab('flashcards');
            }}
          />
        )}

        {activeTab === 'bizus' && (
          <BizusQuickRead />
        )}

        {activeTab === 'dashboard' && (
          <Dashboard
            questions={QUESTIONS_DATABASE}
            activeProfile={activeProfile}
            onNavigateTab={setActiveTab}
          />
        )}
      </main>

      {/* RODAPÉ */}
      <footer className="border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        <div className="max-w-7xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <span>UNIFACS 2026.2 • Portal de Estudos Intensivos da Gilvania (Campus Tancredo Neves)</span>
          <span>Qualidade de Software (Terça 20/10) • Banco de Dados (Quarta 21/10) 🚀</span>
        </div>
      </footer>

    </div>
  );
}

export default App;
