import React from 'react';
import styled from 'styled-components';
import { FaUniversity, FaSchool, FaUserGraduate, FaEnvelope, FaChalkboardTeacher, FaBook } from 'react-icons/fa';

const AboutPage = () => {
  return (
    <PageContainer>
      <h2 className="section-title">About Us</h2>

      <CardWrapper>
        {/* --- 1. بيانات الجامعة (في المنتصف كما هي) --- */}
        <CardHeader>
          <h2><FaUniversity /> جامعة الفيوم</h2>
          <p>كلية التربية النوعية - قسم تكنولوجيا التعليم</p>
        </CardHeader>

        {/* --- 2. بياناتك الشخصية (ستتحول لليمين) --- */}
        <CardBody>
          <div className="profile-main">
            <div className="icon-box">
               <FaUserGraduate />
            </div>
            <div>
              <h3>سندس غريب حسن على</h3>
              <span>الفرقة الرابعة</span>
            </div>
          </div>
          <p className="email">
            <FaEnvelope /> 
            <a href="mailto:st1321@fayoum.edu.eg">sg1321@fayoum.edu.eg</a>
          </p>
        </CardBody>

        {/* --- 3. بيانات المشروع (ستتحول لليمين) --- */}
        <ProjectInfo>
          <h4><FaBook /> مشروع التربية العملي</h4>
          <div className="info-line">
            <FaSchool />
            <p>مدرسة أم المؤمنين الثانوية بنات</p>
          </div>
          <p className="date">العام الجامعي: 2025-2026</p>
        </ProjectInfo>

        {/* --- 4. بيانات الإشراف (في المنتصف كما هي) --- */}
        <CardFooter>
          <h5><FaChalkboardTeacher /> تحت إشراف</h5>
          <ul className="supervisors-list">
            <li>د. دعاء محمود</li>
            <li>أ. سالي ثروت</li>
          </ul>
        </CardFooter>

      </CardWrapper>
    </PageContainer>
  );
};

// --- تنسيقات CSS (Styled Components) ---

const PageContainer = styled.div`
  padding: 40px 20px;
  min-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CardWrapper = styled.div`
  width: 100%;
  max-width: 500px;
  background: var(--bg-card, #ffffff);
  border-radius: 24px;
  padding: 3rem;
  
  /* --- التغيير هنا: اتجاه النص من اليمين لليسار --- */
  direction: rtl; 
  
  border: 2px solid transparent;
  box-shadow: 0 10px 40px rgba(0,0,0,0.05);
  transition: all 0.3s ease-in-out;
  position: relative;
  overflow: hidden;

  &:hover {
    border-color: var(--primary, #2563EB);
    box-shadow: 0 0 20px rgba(37, 99, 235, 0.3);
    transform: translateY(-5px);
  }
`;

const CardHeader = styled.div`
  /* يبقى في المنتصف كما طلبتِ */
  text-align: center; 
  border-bottom: 1px solid #e2e8f0;
  padding-bottom: 1.5rem;
  margin-bottom: 1.5rem;
  
  h2 {
    color: var(--primary, #2563EB);
    font-size: 1.6rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 0.5rem;
  }
  p {
    color: #64748b;
    font-size: 1rem;
    font-weight: 500;
  }
`;

const CardBody = styled.div`
  margin-bottom: 2rem;
  
  .profile-main {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-bottom: 1rem;
    background: #f8fafc;
    padding: 15px;
    border-radius: 12px;
    /* بسبب direction: rtl سيبدأ الأيقونة من اليمين ثم الكلام */
  }
  
  .icon-box {
    font-size: 2.5rem;
    color: var(--primary, #2563EB);
    display: flex;
    align-items: center;
  }
  
  h3 {
    font-size: 1.4rem;
    color: #1e293b;
    margin: 0;
  }
  
  span {
    font-size: 1rem;
    color: #64748b;
  }
  
  .email {
    display: flex;
    align-items: center;
    justify-content: center; /* الإيميل يبقى في النص */
    gap: 0.5rem;
    color: #64748b;
    margin-top: 15px;
    direction: ltr; /* عشان الايميل يظهر صح بالانجليزي */
    
    a {
      color: var(--primary, #2563EB);
      text-decoration: none;
      font-weight: 600;
    }
    a:hover {
      text-decoration: underline;
    }
  }
`;

const ProjectInfo = styled.div`
  background-color: #f1f5f9;
  border-radius: 12px;
  padding: 1.5rem;
  margin-bottom: 2rem;
  
  /* نقل الخط البرتقالي لليمين */
  border-right: 5px solid var(--accent, #F59E0B); 
  
  h4 {
    font-size: 1.2rem;
    color: #1e293b;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 0;
    margin-bottom: 1rem;
  }
  
  .info-line {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    color: #334155;
    font-weight: 600;
    margin-bottom: 0.5rem;
    font-size: 1.1rem;
  }
  
  .date {
    color: #64748b;
    font-size: 0.95rem;
  }
`;

const CardFooter = styled.div`
  /* يبقى في المنتصف كما طلبتِ */
  text-align: center;
  
  h5 {
    font-size: 1.2rem;
    color: var(--primary, #2563EB);
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    margin-bottom: 1rem;
  }
  
  .supervisors-list {
    list-style: none;
    padding: 0;
    display: flex;
    justify-content: center;
    gap: 20px;
    flex-wrap: wrap;
  }
  
  .supervisors-list li {
    background: white;
    border: 1px solid #e2e8f0;
    padding: 8px 16px;
    border-radius: 20px;
    color: #334155;
    font-weight: 600;
    box-shadow: 0 2px 5px rgba(0,0,0,0.05);
  }
`;

export default AboutPage;