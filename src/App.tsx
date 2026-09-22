import { useState, useEffect } from 'react';
import { 
  getProfilesFromStorage, 
  getActiveProfileIdFromStorage, 
  saveActiveProfileId,
  saveProfilesToStorage 
} from './services/storageService';
import { QUESTIONS_DATABASE } from './data/questions';
import type { UserProfile } from './types/study';
import { Navbar } from './components/Navbar';
import { FlashcardMode } from './components/FlashcardMode';
import { SimuladoMode } from './components/SimuladoMode';
import { CadernoErrosMode } from './components/CadernoErrosMode';
import { BizusQuickRead } from './components/BizusQuickRead';
import { Dashboard } from './components/Dashboard';

export function App() {
  const [profiles, setProfiles] = useState<UserProfile[]>([]);
  const [activeProfileId, setActiveProfileId] = useState<string>('');
  const [activeTab, setActiveTab] = useState<string>('flashcards');

  const refreshProfiles = () => {
    const loadedProfiles = getProfilesFromStorage();
    const activeId = getActiveProfileIdFromStorage();
    setProfiles(loadedProfiles);
    setActiveProfileId(activeId);
  };

  useEffect(() => {
    refreshProfiles();
  }, []);

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
        profiles={profiles}
        activeProfile={activeProfile}
        onSwitchProfile={handleSwitchProfile}
        onRefreshData={refreshProfiles}
      />

      {/* CONTEÚDO DA PÁGINA */}
      <main className="flex-1 pb-16">
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
          <span>IBGE Agente de Informática (Bahia) • Plataforma Reta Final Ultra-Fast</span>
          <span>Foco nos estudos & Boa Prova neste Domingo! 🚀</span>
        </div>
      </footer>

    </div>
  );
}

export default App;
