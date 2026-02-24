import { motion } from 'framer-motion';
import Person1 from '../assets/team/person1.png';
import Person2 from '../assets/team/person2.png';
import Person3 from '../assets/team/person3.png';
import Person4 from '../assets/team/person4.png';
import Person5 from '../assets/team/person5.png';

const TEAM = [
  {
    name: 'Dr. Amara Osei-Bonsu',
    role: 'Co-Founder & CEO',
    image: Person5,
    bio: 'A former interventional cardiologist at Johns Hopkins with 14 years of front-line clinical excellence. Founded Vitalink after witnessing the devastating gaps in continuous patient visibility. Now driving the clinical vision that bridges reactive medicine with proactive, life-saving intelligence.'
  },
  {
    name: 'William Mehta',
    role: 'Co-Founder & CTO',
    image: Person4,
    bio: '15 years building distributed systems at Google Health and then DeepMind. Architect of VitaAI\'s predictive engine and the VitaChain blockchain infrastructure. Holds 7 patents in real-time biometric data processing.'
  },
  {
    name: 'Dr. Nancy Thompson',
    role: 'Chief Medical Officer',
    image: Person2,
    bio: 'Board-certified endocrinologist and former clinical research lead at Mayo Clinic. Designed Vitalink\'s chronic disease monitoring protocols for diabetes, hypertension, and heart failure. Ensures alert pathways are clinically validated.'
  },
  {
    name: 'Marcus Webb',
    role: 'Chief Blockchain & Data Officer',
    image: Person3,
    bio: 'Ex-Ethereum Foundation contributor and former data privacy lead at a major EHR company. Built the VitaChain patient-owned wallet system and anonymized data marketplace. Champion of patient data rights.'
  },
  {
    name: 'Sarah Peter',
    role: 'Chief Revenue Officer',
    image: Person1,
    bio: 'Previously VP of Sales at Epic Systems and at a Series B digital health startup scaled up to acquisition. Leads Vitalink\'s go-to-market strategy, hospital network partnerships, and clinical onboarding.'
  }
];

export default function Team() {

  return (
    <section id="team" className="py-24 bg-surface-light">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="mb-16">
          <span className="eyebrow">THE MINDS BEHIND VITALINK</span>
          <h2 className="text-4xl md:text-5xl font-black text-secondary tracking-tight mb-6">
            Clinical Precision. <br /> Systems Intelligence.
          </h2>
          <p className="text-text-muted max-w-2xl text-lg leading-relaxed">
            Our team brings together decades of experience in interventional cardiology, 
            distributed systems, and clinical research to bridge the gap in remote care.
          </p>
        </div>
      </div>

      {/* Horizontal Scroll Container - Placed outside the max-w container to allow full-bleed scroll if desired, OR constrained inside but with overflow allowed */}
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* CEO / Featured Card */}
          <motion.div
            className="md:col-span-2 flex flex-col md:flex-row bg-white/5 rounded-[2.5rem] overflow-hidden border border-white/10 group h-auto md:h-[450px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {/* Image Box */}
            <div className="md:w-[40%] h-[350px] md:h-full overflow-hidden">
              <img 
                src={TEAM[0].image} 
                alt={TEAM[0].name} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            
            {/* Text Box */}
            <div className="md:w-[60%] p-8 md:p-12 flex flex-col justify-center bg-linear-to-br from-secondary/40 to-secondary/10 backdrop-blur-md">
              <div className="mb-2">
                <span className="text-accent font-bold text-xs uppercase tracking-[0.2em]">{TEAM[0].role}</span>
              </div>
              <h3 className="text-white text-3xl md:text-4xl font-black mb-6 tracking-tight">{TEAM[0].name}</h3>
              <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                {TEAM[0].bio}
              </p>
            </div>
          </motion.div>

          {/* Secondary Team Cards */}
          {TEAM.slice(1).map((member, i) => (
            <motion.div
              key={i}
              className="md:col-span-1 bg-[#1a1a1a] rounded-[2.5rem] p-5 flex flex-col group border border-white/5 h-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + (i * 0.1), duration: 0.8 }}
            >
              {/* Image Container - Inset Look */}
              <div className="aspect-square w-full h-[350px] rounded-3xl overflow-hidden mb-6 bg-white/5 p-1">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              
              {/* Text Area */}
              <div className="px-1 flex-grow">
                <h4 className="text-white text-2xl font-bold tracking-tight mb-2">{member.name}</h4>
                <p className="text-accent text-[0.65rem] font-bold uppercase tracking-[0.2em] mb-4">{member.role}</p>
                <p className="text-white/70 text-sm leading-relaxed">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
}
