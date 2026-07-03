import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import VoiceMemosView from './VoiceMemosView';
import SettingsView from './SettingsView';
import ApiDocsView from './ApiDocsView';

import "../../styles/dashboard.css";

export default function Dashboard({ onLogout }) {
  const [activeTab, setActiveTab] = useState('Focus');
  const [collapsed, setCollapsed] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [activeTab]);

  // Notebook states
  const [noteTitle, setNoteTitle] = useState('Sprint Planning');
  const [noteContent, setNoteContent] = useState('Focus on shipping the onboarding updates and stabilising HMR.\nReview AI suggestions for blocked tasks before standup.\nEnsure GitLab MR #42 is merged before end of day.');

  // Diary states
  const [diaryNotes, setDiaryNotes] = useState({
    monday: 'Kicked off sprint planning with the team.',
    tuesday: 'Productive day. Got dashboard layout matching design specs.',
    wednesday: '', thursday: '', friday: '', saturday: '', sunday: ''
  });
  const handleDiaryChange = (day, val) => setDiaryNotes(prev => ({ ...prev, [day]: val }));

  // Focus Timer states
  const [timerActive, setTimerActive] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1500); // 25 mins

  useEffect(() => {
    let timer;
    if (timerActive && timeLeft > 0) {
      timer = setInterval(() => setTimeLeft(prev => prev - 1), 1000);
    } else if (timeLeft === 0) {
      setTimerActive(false);
      alert('Focus session complete! Take a break.');
      setTimeLeft(1500);
    }
    return () => clearInterval(timer);
  }, [timerActive, timeLeft]);

  const toggleTimer = () => setTimerActive(!timerActive);
  const selectTimerDuration = (mins) => { setTimerActive(false); setTimeLeft(mins * 60); };
  const formatTime = (secs) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins}:${s < 10 ? '0' : ''}${s}`;
  };

  // Tasks state
  const [tasks, setTasks] = useState([]);
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleAddTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    setTasks(prev => [{ id: Date.now(), title: newTaskTitle, priority: 'Normal', status: 'todo', category: 'Captured' }, ...prev]);
    setNewTaskTitle('');
  };

  // Projects state
  const [projects, setProjects] = useState([
    { id: 1, name: 'OwnTasks Landing Page', status: 'Active' },
    { id: 2, name: 'AI Meeting Sync Engine', status: 'Active' },
    { id: 3, name: 'GitLab Integration Module', status: 'Paused' },
  ]);
  const [newProjectName, setNewProjectName] = useState('');

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!newProjectName.trim()) return;
    setProjects(prev => [{ id: Date.now(), name: newProjectName, status: 'Active' }, ...prev]);
    setNewProjectName('');
  };

  // Bookmarks
  const [bookmarks, setBookmarks] = useState([
    { id: 1, title: 'OwnTasks App', url: 'https://owntasks.app', category: 'Work' },
    { id: 2, title: 'Vite Documentation', url: 'https://vitejs.dev', category: 'Tools' },
    { id: 3, title: 'Framer Motion Docs', url: 'https://www.framer.com/motion/', category: 'References' },
  ]);
  const [bookmarkTitle, setBookmarkTitle] = useState('');
  const [bookmarkUrl, setBookmarkUrl] = useState('');
  const [bookmarkCategory, setBookmarkCategory] = useState('Work');

  const handleAddBookmark = (e) => {
    e.preventDefault();
    if (!bookmarkTitle.trim()) return;
    setBookmarks(prev => [{ id: Date.now(), title: bookmarkTitle, url: bookmarkUrl, category: bookmarkCategory }, ...prev]);
    setBookmarkTitle(''); setBookmarkUrl('');
  };

  // Voice memos
  const [memos, setMemos] = useState([
    { id: 1, title: 'Standup Audio - Jun 30', duration: '1:45', date: '30/06/2026' },
    { id: 2, title: 'Sprint Retrospective Notes', duration: '3:22', date: '29/06/2026' },
  ]);
  const [memoTitle, setMemoTitle] = useState('');

  const handleAddMemo = (e) => {
    e.preventDefault();
    if (!memoTitle.trim()) return;
    setMemos(prev => [{ id: Date.now(), title: memoTitle, duration: '0:30', date: '30/06/2026' }, ...prev]);
    setMemoTitle('');
  };

  // Chat messages
  const [messages, setMessages] = useState([
    { id: 1, sender: 'AI Co-pilot', text: 'Good afternoon! You have 3 high-priority tasks today. Shall I draft a focus plan?', time: '5:08 PM' },
    { id: 2, sender: 'You', text: 'Yes, please prioritise the GitLab MR first.', time: '5:09 PM' },
    { id: 3, sender: 'AI Co-pilot', text: 'Done! I have moved GitLab MR #42 to the top of your queue. The estimated completion time is 45 minutes based on your past velocity.', time: '5:09 PM' },
  ]);
  const [chatInput, setChatInput] = useState('');

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    const currentInput = chatInput;
    setMessages(prev => [...prev, { id: Date.now(), sender: 'You', text: currentInput, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    setChatInput('');

    const lowerInput = currentInput.toLowerCase();
    const isAddTask = lowerInput.includes('add task') || lowerInput.includes('create task') || lowerInput.includes('new task');

    setTimeout(() => {
      let aiText = `Got it! Processing: "${currentInput}" — I'll update your workspace context accordingly.`;
      if (isAddTask) {
        let taskTitle = currentInput.replace(/(add task|create task|new task)/i, '').trim();
        if (taskTitle.startsWith('to ')) taskTitle = taskTitle.substring(3).trim();
        if (taskTitle) {
          setTasks(prev => [{ id: Date.now(), title: taskTitle, priority: 'AI Suggested', status: 'todo', category: 'AI Pulse' }, ...prev]);
          aiText = `Sure! I have added the task "${taskTitle}" to your To Do list with "AI Suggested" priority.`;
        }
      }
      setMessages(prev => [...prev, { id: Date.now(), sender: 'AI Co-pilot', text: aiText, time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
    }, 900);
  };

  return (
    <div style={{ minHeight: '100vh', color: '#e2e8f0', fontFamily: '"Inter", sans-serif', position: 'relative' }}>
      <DashboardSidebar 
        activeTab={activeTab} setActiveTab={setActiveTab} 
        collapsed={collapsed} setCollapsed={setCollapsed}
        onLogout={onLogout} isMobile={isMobile} mobileOpen={mobileMenuOpen}
      />
      
      <DashboardTopBar 
        activeTab={activeTab} collapsed={collapsed} 
        onMenuClick={() => setMobileMenuOpen(true)} isMobile={isMobile} 
      />

      <main className={`dash-main${collapsed && !isMobile ? ' collapsed' : ''}`}>
        <div className="dash-content">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            >
              {activeTab === 'Focus' && <FocusView timerActive={timerActive} timeLeft={timeLeft} toggleTimer={toggleTimer} selectTimerDuration={selectTimerDuration} formatTime={formatTime} projects={projects} />}
              {activeTab === 'My Day' && <MyDayView tasks={tasks} setTasks={setTasks} />}
              {activeTab === 'Projects' && <ProjectsView projects={projects} setProjects={setProjects} newProjectName={newProjectName} setNewProjectName={setNewProjectName} handleAddProject={handleAddProject} isMobile={isMobile} />}
              {activeTab === 'Tasks' && <TasksView tasks={tasks} setTasks={setTasks} newTaskTitle={newTaskTitle} setNewTaskTitle={setNewTaskTitle} handleAddTask={handleAddTask} isMobile={isMobile} />}
              {activeTab === 'Calendar' && <CalendarView isMobile={isMobile} />}
              {activeTab === 'Chat' && <ChatView messages={messages} chatInput={chatInput} setChatInput={setChatInput} handleSendMessage={handleSendMessage} />}
              {activeTab === 'Notebook' && <NotebookView noteTitle={noteTitle} setNoteTitle={setNoteTitle} noteContent={noteContent} setNoteContent={setNoteContent} />}
              {activeTab === 'Diary' && <DiaryView diaryNotes={diaryNotes} handleDiaryChange={handleDiaryChange} isMobile={isMobile} />}
              {activeTab === 'Links' && <LinksView bookmarks={bookmarks} setBookmarks={setBookmarks} bookmarkTitle={bookmarkTitle} setBookmarkTitle={setBookmarkTitle} bookmarkUrl={bookmarkUrl} setBookmarkUrl={setBookmarkUrl} bookmarkCategory={bookmarkCategory} setBookmarkCategory={setBookmarkCategory} handleAddBookmark={handleAddBookmark} isMobile={isMobile} />}
              {activeTab === 'Voice Memos' && <VoiceMemosView memos={memos} setMemos={setMemos} memoTitle={memoTitle} setMemoTitle={setMemoTitle} handleAddMemo={handleAddMemo} isMobile={isMobile} />}
              {activeTab === 'Settings' && <SettingsView isMobile={isMobile} />}
              {activeTab === 'API Docs' && <ApiDocsView isMobile={isMobile} />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
    </div>
  );
}
