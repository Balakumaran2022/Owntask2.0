import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const legalContent = {
  privacy: {
    title: 'Privacy Policy',
    lastUpdated: 'July 2, 2026',
    content: `
      <p>OwnTasks respects the privacy of every customer and user who uses our platform. We collect only the information necessary to provide secure and reliable services, improve platform performance, and enhance the user experience. Personal information such as names, email addresses, and account details are stored securely using industry-standard security practices. We do not sell, rent, or share customer information with third parties for advertising purposes. Data collected through the platform is used solely for operational, support, and service improvement purposes. Customers maintain ownership of their business data and can request data export or deletion when required. Access to customer information is restricted to authorized personnel only. Security monitoring and encryption technologies are used to protect sensitive information from unauthorized access. By using OwnTasks, users agree to the collection and use of information as described in this Privacy Policy. We continuously review and improve our privacy practices to maintain transparency and trust.</p>
    `
  },
  terms: {
    title: 'Terms of Service',
    lastUpdated: 'July 2, 2026',
    content: `
      <p>By accessing or using OwnTasks, users agree to comply with the terms and conditions outlined in this agreement. OwnTasks provides task management, workflow automation, collaboration, and operational management tools for businesses and teams. Users are responsible for maintaining the confidentiality of their account credentials and for all activities performed under their accounts. The platform must not be used for illegal, fraudulent, harmful, or unauthorized activities. Users agree not to disrupt the platform, interfere with services, or attempt unauthorized access to systems or data. OwnTasks reserves the right to suspend or terminate accounts that violate these terms or compromise platform security. Service features, pricing, and availability may change as the platform evolves and improves. While we strive for maximum uptime and reliability, uninterrupted service cannot be guaranteed under all circumstances. Continued use of OwnTasks constitutes acceptance of these terms and any future updates. Users are encouraged to review these terms periodically to remain informed about their responsibilities and rights.</p>
    `
  },
  cookies: {
    title: 'Cookie Policy',
    lastUpdated: 'July 2, 2026',
    content: `
      <p>OwnTasks uses cookies and similar technologies to provide a smooth, secure, and personalized user experience. Cookies help us remember user preferences, maintain secure sessions, and improve platform functionality across devices. These technologies enable faster loading times and provide insights into how users interact with the platform. Analytics cookies help us understand feature usage patterns and identify opportunities for improvement. Security-related cookies are used to protect accounts and detect suspicious activities or unauthorized access attempts. Users can control or disable cookies through their browser settings, although some features may not function correctly without them. OwnTasks does not use cookies to sell personal information or track users for unrelated advertising purposes. Third-party services integrated with the platform may use their own cookies according to their respective policies. By continuing to use OwnTasks, users consent to the use of cookies as described in this policy. We regularly review our cookie practices to ensure transparency and compliance with privacy standards.</p>
    `
  },
  security: {
    title: 'Security',
    lastUpdated: 'July 2, 2026',
    content: `
      <p>Security is a core principle of the OwnTasks platform and is integrated into every layer of our infrastructure and operations. All data transmitted between users and our services is protected using modern encryption technologies. Access controls and role-based permissions ensure that sensitive information is only accessible to authorized users. Continuous monitoring systems help detect and respond to unusual activities or potential threats in real time. Audit logs and activity tracking provide accountability and transparency across workflows and business operations. Regular security updates and maintenance procedures are performed to maintain a secure environment. Backup and recovery systems are implemented to minimize disruption and protect business continuity. OwnTasks follows industry best practices to safeguard customer information and operational data. While no digital platform can guarantee absolute security, we continuously invest in improving our defenses and security processes. Our commitment is to provide businesses with a reliable, secure, and trustworthy operational platform for modern teams and enterprises.</p>
    `
  }
};

export default function LegalPage() {
  const { docId } = useParams();
  const navigate = useNavigate();
  
  const pageData = legalContent[docId] || {
    title: 'Not Found',
    lastUpdated: '',
    content: '<p>The requested legal document could not be found.</p>'
  };

  return (
    <div className="pt-[120px] pb-24 md:pt-[150px] md:pb-32 px-5 min-h-screen relative font-sans text-primary/80 z-10">
      <div className="max-w-4xl mx-auto">
        
        {/* Back Button */}
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-primary/70 hover:text-primary transition-colors mb-8 group bg-primary/5 hover:bg-primary/10 px-5 py-2.5 rounded-full border border-primary/10"
        >
          <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-semibold tracking-wide">Back</span>
        </button>

        <div className="bg-[#0D0D1C]/80 p-8 md:p-12 rounded-3xl border border-primary/20 backdrop-blur-md shadow-[0_0_40px_rgba(99,102,241,0.05)]">
          <h1 className="text-4xl md:text-5xl font-black text-[#F1F5F9] tracking-tight mb-8">
            {pageData.title}
          </h1>
          
          <div 
            className="prose prose-invert prose-emerald max-w-none 
            prose-p:text-[1.1rem] prose-p:leading-relaxed prose-p:mb-6 prose-p:text-primary/70"
            dangerouslySetInnerHTML={{ __html: pageData.content }}
          />
        </div>
      </div>
    </div>
  );
}
