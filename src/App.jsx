import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { 
  BookOpen, Video, CheckCircle, Users, ArrowLeft, PlayCircle, Star,
  Facebook, Twitter, Youtube, Instagram, Globe
} from 'lucide-react';
import './App.css';

// استدعاء صفحة "من نحن"
import AboutPage from './AboutPage';

// ==========================================
// 1. DATA (المحتوى التعليمي + الفيديوهات المحدثة)
// ==========================================

const lessonsData = [
  {
    id: 1,
    title: "Unit 1: Ecotourism",
    desc: "Saving the environment and Present Simple.",
    videoID: "1i4ioqIaXrE", // فيديو الوحدة الأولى
    fullContent: `
      <h4><span style='color:#2563EB'>01</span> Introduction</h4>
      <p>Ecotourism provides holidays to threatened natural environments. It aims to educate tourists and conserve nature.</p>
      
      <img src="https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=800&auto=format&fit=crop" alt="Nature" style="width:100%; border-radius:15px; margin: 20px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />
      
      <p><strong>Key Principles:</strong> minimizing impact, building environmental awareness, and providing financial benefits for conservation.</p>

      <h4><span style='color:#2563EB'>02</span> Grammar: Present Simple</h4>
      <p>Used for facts and habits. <em>Example: The sun rises in the east.</em></p>
      
      <img src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop" alt="Sun Rise" style="width:100%; border-radius:15px; margin: 20px 0; height: 250px; object-fit: cover;" />
    `
  },
  {
    id: 2,
    title: "Unit 2: Supporting Community",
    desc: "Biologists and Past Tenses.",
    videoID: "wP_IbZSxhEs", // فيديو الوحدة الثانية
    fullContent: `
      <h4><span style='color:#2563EB'>01</span> Role of Biologists</h4>
      <p>Biologists study living organisms to solve community problems. They help protect livestock from predators like lions.</p>
      
      <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?q=80&w=800&auto=format&fit=crop" alt="Biologist" style="width:100%; border-radius:15px; margin: 20px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />

      <h4><span style='color:#2563EB'>02</span> Grammar: Past Simple vs Continuous</h4>
      <p><strong>Past Continuous:</strong> Action in progress (was doing).<br><strong>Past Simple:</strong> Action that interrupted (did).</p>
      
      <img src="https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=800&auto=format&fit=crop" alt="Time and Past Events" style="width:100%; border-radius:15px; margin: 20px 0; height: 250px; object-fit: cover;" />
    `
  },
  {
    id: 3,
    title: "Unit 3: Improving Lives",
    desc: "The Present Perfect Tense and community development.",
    videoID: "henIVlCPVIY", // تم التحديث: فيديو الوحدة الثالثة الجديد
    fullContent: `
      <h4><span style='color:#2563EB'>01</span> Topic: Improving Lives</h4>
      <p>This unit discusses how technology and voluntary work can improve the quality of life, focusing on initiatives like "Decent Life".</p>
      
      <img src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?q=80&w=800&auto=format&fit=crop" alt="Community Work" style="width:100%; border-radius:15px; margin: 20px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />

      <h4><span style='color:#2563EB'>02</span> Grammar: Present Perfect</h4>
      <p>Form: <strong>Have/Has + P.P.</strong> used for actions starting in the past and continuing to now.</p>
    `
  },
  {
    id: 4,
    title: "Unit 4: Making New Friends",
    desc: "Definite & Indefinite Articles (a/an/the) and Advice.",
    videoID: "bN95rdQaSnA", // فيديو الوحدة الرابعة
    fullContent: `
      <h4><span style='color:#2563EB'>01</span> Topic: Friendship</h4>
      <p>How to make friends when you move to a new school or city. Being open and friendly is key.</p>
      
      <img src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=800&auto=format&fit=crop" alt="Friends" style="width:100%; border-radius:15px; margin: 20px 0; box-shadow: 0 4px 12px rgba(0,0,0,0.1);" />

      <h4><span style='color:#2563EB'>02</span> Grammar: Articles</h4>
      <p>Rules for using 'a', 'an', and 'the'. Don't forget that plural nouns generally don't take an article.</p>
    `
  }
];

const activitiesData = {
  vocabQuiz: [
    { id: 1, question: "Tourism that protects the environment is called _______.", options: ["Mass tourism", "Ecotourism", "Domestic tourism", "Space tourism"], correctAnswer: 1 },
    { id: 2, question: "The lion is an _______ species; we must protect it.", options: ["endangered", "dangerous", "common", "annoying"], correctAnswer: 0 },
    { id: 3, question: "To _______ means to keep someone or something safe from harm.", options: ["damage", "protect", "hunt", "pollute"], correctAnswer: 1 },
    { id: 4, question: "Siwa Oasis is very _______; it is far from Cairo.", options: ["crowded", "isolated", "noisy", "modern"], correctAnswer: 1 },
    { id: 5, question: "My uncle is a _______; he studies living things.", options: ["dentist", "biologist", "engineer", "pilot"], correctAnswer: 1 },
    { id: 6, question: "This food is very _______; it has a lot of chili.", options: ["sweet", "spicy", "cold", "bland"], correctAnswer: 1 },
    { id: 7, question: "Don't drop that bag! It contains my _______.", options: ["luggage", "suggages", "luggages", "ticket"], correctAnswer: 0 },
    { id: 8, question: "We need to use _______ materials to build this eco-hotel.", options: ["polluting", "sustainable", "expensive", "plastic"], correctAnswer: 1 },
    { id: 9, question: "The _______ of the accident was terrible.", options: ["impact", "compact", "contact", "act"], correctAnswer: 0 },
    { id: 10, question: "When the bee stung him, his arm _______ up.", options: ["swelled", "blew", "grew", "flew"], correctAnswer: 0 }
  ],
  translationTask: [
    { id: 1, question: "Translate: 'يجب أن نحمي البيئة من أجل الأجيال القادمة.'", options: ["We must protect the environment for future generations.", "We should kill the environment for sons.", "Generations protect the environment.", "We must pollute the environment."], correctAnswer: 0 },
    { id: 2, question: "Translate: 'السياحة البيئية مصدر مهم للدخل القومي.'", options: ["Ecotourism is a bad source of money.", "Ecotourism is an important source of national income.", "Tourism is not important for income.", "National income comes from factories only."], correctAnswer: 1 },
    { id: 3, question: "Translate: 'كانت تمطر بغزارة عندما خرجت.'", options: ["It was raining heavily when I went out.", "It rains heavily when I go out.", "It is raining heavily when I went out.", "It rained heavily while I went out."], correctAnswer: 0 },
    { id: 4, question: "Translate: 'الشباب هم العمود الفقري لأي أمة.'", options: ["Youth are the backbone of any nation.", "Youth are the back of the country.", "Young people are bad for the nation.", "The nation has no backbone."], correctAnswer: 0 },
    { id: 5, question: "Translate: 'Dr Magdi Yacoub is a famous heart surgeon.'", options: ["دكتور مجدي يعقوب جراح قلب مشهور.", "دكتور مجدي يعقوب طبيب عيون مشهور.", "دكتور مجدي يعقوب مهندس عظيم.", "دكتور مجدي يعقوب مدرس علوم."], correctAnswer: 0 },
    { id: 6, question: "Translate: 'Cooperation helps us solve many problems.'", options: ["التعاون يساعدنا على حل العديد من المشكلات.", "التعاون يخلق مشاكل كثيرة.", "العمل الفردي أفضل من التعاون.", "يجب أن نتجنب المشكلات."], correctAnswer: 0 },
    { id: 7, question: "Translate: 'Education is the key to success.'", options: ["التعليم هو مفتاح النجاح.", "التعليم مضيعة للوقت.", "النجاح لا يحتاج لتعليم.", "المفتاح ضاع في المدرسة."], correctAnswer: 0 },
    { id: 8, question: "Translate: 'لقد تغير العالم كثيراً في السنوات الأخيرة.'", options: ["The world has changed a lot in recent years.", "The world is changing tomorrow.", "The world never changes.", "Years change the world."], correctAnswer: 0 },
    { id: 9, question: "Translate: 'We should respect our teachers.'", options: ["يجب أن نحترم معلمينا.", "يجب أن نتجاهل معلمينا.", "المعلمون لا يحتاجون احترام.", "يجب أن نضرب معلمينا."], correctAnswer: 0 },
    { id: 10, question: "Translate: 'Sport teaches us discipline and teamwork.'", options: ["تعلمنا الرياضة الانضباط والعمل الجماعي.", "الرياضة مضرة بالصحة.", "الانضباط لا يأتي من الرياضة.", "العمل الجماعي غير مهم."], correctAnswer: 0 }
  ]
};

// ==========================================
// 2. COMPONENTS (Navbar, Footer, Quiz)
// ==========================================

const Navbar = () => (
  <nav className="navbar">
    <Link to="/" className="nav-logo">1stSec<span style={{color:'#1E293B'}}>Hub</span></Link>
    <div className="nav-menu">
      <Link to="/" className="nav-item">Home</Link>
      <Link to="/lessons" className="nav-item">Lessons</Link>
      <Link to="/activities" className="nav-item">Activities</Link>
      <Link to="/about" className="nav-item">About Us</Link>
    </div>
  </nav>
);

const Footer = () => (
  <footer className="footer">
    <div className="container">
      <h2 style={{fontSize: '2rem', marginBottom: '10px'}}>English Learning Hub</h2>
      <p style={{color: '#94a3b8', marginBottom: '30px'}}>Designed for Excellence in Egyptian Education</p>
      <div className="social-links">
        <Facebook size={28} /> <Twitter size={28} /> <Youtube size={28} /> <Instagram size={28} />
      </div>
      <div style={{borderTop: '1px solid #334155', paddingTop: '20px', color: '#64748b'}}>
        © 2025 English Hub for 1st Secondary Grade. All Rights Reserved.
      </div>
    </div>
  </footer>
);

const QuizGame = ({ questions, title, onBack }) => {
  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const currentQuestion = questions[currentQIndex];

  const handleOptionClick = (index) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === currentQuestion.correctAnswer) setScore(score + 1);
  };

  const nextQuestion = () => {
    if (currentQIndex + 1 < questions.length) {
      setCurrentQIndex(currentQIndex + 1);
      setIsAnswered(false);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  if (showScore) {
    return (
      <div className="container" style={{padding: '60px 20px'}}>
        <div className="quiz-box" style={{textAlign: 'center'}}>
          <Star size={60} color="#F59E0B" fill="#F59E0B" style={{marginBottom: 20}}/>
          <h2 style={{fontSize: '2.5rem', marginBottom: '20px'}}>Quiz Completed!</h2>
          <div style={{fontSize: '4rem', fontWeight: '800', color: 'var(--primary)', marginBottom: '10px'}}>
            {score} <span style={{fontSize: '2rem', color: '#94a3b8'}}>/ {questions.length}</span>
          </div>
          <button className="btn" onClick={onBack}>Return to Activities</button>
        </div>
      </div>
    );
  }

  return (
    <div className="container" style={{padding: '60px 20px'}}>
      <div className="quiz-box">
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:'30px'}}>
          <button onClick={onBack} style={{background:'none', border:'none', cursor:'pointer', display:'flex', alignItems:'center', color:'#64748b'}}>
            <ArrowLeft size={20} style={{marginRight: 8}}/> Quit
          </button>
          <span style={{fontWeight:'bold', color:'var(--primary)'}}>Question {currentQIndex + 1} / {questions.length}</span>
        </div>
        <h3 style={{fontSize: '1.5rem', marginBottom: '30px', color: '#1e293b'}}>{currentQuestion.question}</h3>
        <div style={{display: 'flex', flexDirection: 'column', gap: '15px'}}>
          {currentQuestion.options.map((option, index) => {
            let btnClass = "option-btn";
            if (isAnswered) {
              if (index === currentQuestion.correctAnswer) btnClass += " correct";
              else if (index === selectedOption) btnClass += " wrong";
            }
            return (
              <button key={index} className={btnClass} onClick={() => handleOptionClick(index)} disabled={isAnswered}>
                <span>{option}</span>
                {isAnswered && index === currentQuestion.correctAnswer && <CheckCircle size={24} color="#15803d"/>}
              </button>
            );
          })}
        </div>
        {isAnswered && (
          <div style={{textAlign: 'right', marginTop: '30px'}}>
            <button className="btn" onClick={nextQuestion}>
              {currentQIndex + 1 === questions.length ? "Show Results" : "Next Question"}
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

// ==========================================
// 3. PAGE CONTENT (Home, Lessons, Activities)
// ==========================================

const HomePage = () => (
  <div className="page-content">
    {/* Header with Background Image & Left Text */}
    <header className="hero">
      <div className="container hero-content">
        <h1>Welcome to <br/>English 1st Secondary</h1>
        <p>
          The most comprehensive platform for studying English in Egypt. 
          Interactive lessons, videos, and exams all in one place.
        </p>
        <Link to="/lessons" className="btn">Start Studying <BookOpen size={20} style={{marginLeft: 10}}/></Link>
      </div>
    </header>

    <div className="container">
      {/* Features Section */}
      <section className="section">
        <h2 className="section-title">Why Choose Us?</h2>
        <div className="grid-2">
          <div className="lesson-card lesson-content" style={{textAlign: 'center'}}>
            <Video size={50} color="#2563EB" style={{marginBottom: 20}}/>
            <h3>Video Lessons</h3>
            <p style={{color: '#64748b'}}>Explanation videos for every unit covering all language skills.</p>
          </div>
          <div className="lesson-card lesson-content" style={{textAlign: 'center'}}>
            <CheckCircle size={50} color="#10B981" style={{marginBottom: 20}}/>
            <h3>Interactive Quizzes</h3>
            <p style={{color: '#64748b'}}>Test your level instantly and get corrections for your mistakes.</p>
          </div>
        </div>
      </section>

      {/* Grammar Section */}
      <section className="section">
        <div className="grammar-spotlight">
          <div style={{flex: 1}}>
            <h2 style={{color: '#60a5fa', marginBottom: '20px', fontSize: '2.5rem'}}>Grammar Focus</h2>
            <h3 style={{fontSize: '1.5rem', marginBottom: '15px'}}>Present Perfect Tense</h3>
            <p style={{fontSize: '1.1rem', color: '#cbd5e1', lineHeight: '1.8'}}>
              We use <strong>Have/Has + P.P.</strong> for actions that started in the past and still have an effect now.
            </p>
            <br/>
            <p style={{fontSize: '1rem', color: '#94a3b8'}}>Keyword: <em>Since, For, Just, Already</em></p>
          </div>
          <div style={{flex: 1, background: 'rgba(255,255,255,0.1)', padding: '30px', borderRadius: '16px'}}>
            <code style={{fontSize: '1.2rem', fontFamily: 'monospace'}}>
              ✅ I <span style={{color: '#86efac'}}>have lived</span> here for 10 years.<br/><br/>
              ❌ I <span style={{color: '#fca5a5'}}>lived</span> here for 10 years (implies I moved).
            </code>
          </div>
        </div>
      </section>
    </div>
  </div>
);

const LessonsPage = () => (
  <div className="container" style={{ padding: '60px 20px' }}>
    <h2 className="section-title">Full Curriculum (Units 1-4)</h2>
    <div className="lessons-wrapper">
      {lessonsData.map((lesson) => (
        <div key={lesson.id} className="lesson-card">
          <div className="lesson-media">
            <iframe 
              src={`https://www.youtube.com/embed/${lesson.videoID}`} 
              title={lesson.title}
              frameBorder="0"
              allowFullScreen
            ></iframe>
          </div>
          <div className="lesson-content">
            <h3 className="lesson-title">{lesson.title}</h3>
            <p style={{fontSize: '1.2rem', color: '#64748b'}}>{lesson.desc}</p>
            <div 
              className="explanation-text"
              dangerouslySetInnerHTML={{ __html: lesson.fullContent }} 
            />
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ActivitiesPage = () => {
  const [activeActivity, setActiveActivity] = useState(null);

  if (activeActivity) {
    const data = activeActivity === 'vocab' ? activitiesData.vocabQuiz : activitiesData.translationTask;
    const title = activeActivity === 'vocab' ? "Vocabulary Quiz" : "Translation Task";
    return <QuizGame questions={data} title={title} onBack={() => setActiveActivity(null)} />;
  }

  return (
    <div className="container" style={{ padding: '80px 20px' }}>
      <h2 className="section-title">Practice & Exams</h2>
      <div className="grid-2">
        <div className="lesson-card lesson-content" style={{textAlign: 'center', cursor: 'pointer'}} onClick={() => setActiveActivity('vocab')}>
          <BookOpen size={60} color="#2563EB" style={{marginBottom: 20}}/>
          <h3 style={{fontSize: '1.8rem', marginBottom: '10px'}}>Vocabulary Quiz</h3>
          <p style={{color: '#64748b', marginBottom: '20px'}}>10 Questions covering definitions.</p>
          <button className="btn">Start Quiz</button>
        </div>
        <div className="lesson-card lesson-content" style={{textAlign: 'center', cursor: 'pointer'}} onClick={() => setActiveActivity('translation')}>
          <Globe size={60} color="#F59E0B" style={{marginBottom: 20}}/>
          <h3 style={{fontSize: '1.8rem', marginBottom: '10px'}}>Translation Task</h3>
          <p style={{color: '#64748b', marginBottom: '20px'}}>10 Questions: Arabic to English.</p>
          <button className="btn" style={{background: '#F59E0B'}}>Start Translation</button>
        </div>
      </div>
    </div>
  );
};

// ==========================================
// 4. MAIN APP COMPONENT
// ==========================================

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lessons" element={<LessonsPage />} />
          <Route path="/activities" element={<ActivitiesPage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;