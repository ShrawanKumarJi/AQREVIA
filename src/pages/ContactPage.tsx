import React, { useState } from 'react';
import { ContactFormData, PageId } from '../types';
import { ArrowRight, CheckCircle2, Phone, Mail, MapPin, Building, MessageSquare } from 'lucide-react';

interface ContactPageProps {
  onNavigate: (page: PageId) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ onNavigate }) => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    company: '',
    phone: '',
    whatsapp: '',
    email: '',
    role: 'Developer',
    projectLocation: '',
    projectType: 'Residential',
    needs: ['Project Launch', 'Site Visits'],
    details: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const availableNeeds = [
    'Project Launch',
    'Buyer Leads',
    'Site Visits',
    'Project Sales',
    'Performance Marketing',
    'CRM / Automation',
    'Website / Landing Page',
    'Creative / Video',
    'Other',
  ];

  const toggleNeed = (need: string) => {
    if (formData.needs.includes(need)) {
      setFormData({
        ...formData,
        needs: formData.needs.filter((n) => n !== need),
      });
    } else {
      setFormData({
        ...formData,
        needs: [...formData.needs, need],
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate clean client-side submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }, 800);
  };

  return (
    <div id="contact-page" className="pt-28 pb-20 bg-[#FBFBF9]">
      {/* Hero */}
      <section className="py-14 bg-white border-b border-[#E8E8E2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1E56D6]/10 text-[#1E56D6] text-xs font-bold uppercase tracking-wider mb-3">
              Direct Project Inquiry
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-black text-[#14171A] tracking-tight">
              Let's Talk About Your Project.
            </h1>
            <p className="mt-4 text-base sm:text-lg text-[#5E646A] leading-relaxed">
              Tell us about your project, inventory or growth challenge.
            </p>
          </div>
        </div>
      </section>

      {/* Main Form & Contact Info */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left: Contact Details & Assurance */}
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white p-6 rounded-2xl border border-[#E8E8E2] space-y-6">
                <h3 className="font-display text-lg font-bold text-[#14171A]">
                  Direct Executive Desk
                </h3>
                <p className="text-xs text-[#5E646A] leading-relaxed">
                  We respond to developer and partner inquiries within one business day with a preliminary inventory absorption review.
                </p>

                <div className="space-y-4 pt-2 text-xs">
                  <div className="flex items-start gap-3">
                    <Building className="w-4 h-4 text-[#1E56D6] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#14171A]">Headquarters</div>
                      <div className="text-[#71777D]">Financial District, Hyderabad & BKC, Mumbai</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <Mail className="w-4 h-4 text-[#1E56D6] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#14171A]">Direct Inquiries</div>
                      <div className="text-[#71777D]">growth@nxz.realestate</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <MessageSquare className="w-4 h-4 text-[#1E56D6] shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-[#14171A]">Confidentiality</div>
                      <div className="text-[#71777D]">100% NDA-Protected Project Audits</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Ecosystem assurance card */}
              <div className="p-6 rounded-2xl bg-[#14171A] text-white space-y-3">
                <div className="text-[11px] font-mono uppercase tracking-wider text-[#C5A880]">
                  Pre-Engagement Protocol
                </div>
                <h4 className="font-display text-base font-bold text-white">
                  Inventory Pacing Audit Included
                </h4>
                <p className="text-xs text-[#A0A6AC] leading-relaxed">
                  Before launching campaigns, our growth strategists audit micro-market absorption, pricing bands, and competitor ad spend in your pin code.
                </p>
              </div>
            </div>

            {/* Right: The Inquiry Form */}
            <div className="lg:col-span-8">
              {isSubmitted ? (
                <div className="bg-white p-8 sm:p-12 rounded-2xl border border-[#E8E8E2] text-center space-y-6 shadow-sm animate-in fade-in zoom-in-95 duration-200">
                  <div className="w-16 h-16 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-display text-2xl sm:text-3xl font-black text-[#14171A]">
                    Thank you. Your project details have been received.
                  </h3>
                  <p className="text-sm text-[#5E646A] max-w-md mx-auto leading-relaxed">
                    Our real-estate growth strategy team is reviewing your location, project type, and inventory parameters. We will be in touch shortly.
                  </p>
                  <div className="pt-4 flex items-center justify-center gap-4">
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="text-xs font-semibold text-[#5E646A] hover:text-[#14171A] underline"
                    >
                      Submit Another Project Inquiry
                    </button>
                    <button
                      onClick={() => onNavigate('home')}
                      className="bg-[#14171A] text-white text-xs font-semibold px-5 py-2.5 rounded-xl hover:bg-[#1E56D6] transition-colors"
                    >
                      Return to Homepage
                    </button>
                  </div>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="bg-white p-6 sm:p-10 rounded-2xl border border-[#E8E8E2] space-y-6 shadow-xs"
                >
                  <div className="border-b border-[#F4F4F0] pb-4">
                    <h3 className="font-display text-xl font-bold text-[#14171A]">
                      Project Assessment Request
                    </h3>
                    <p className="text-xs text-[#5E646A] mt-1">
                      Complete the fields below to initiate your customized real estate growth proposal.
                    </p>
                  </div>

                  {/* 2-Column Inputs */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ramesh Reddy"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Company / Entity Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Vertex Infra Projects"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        WhatsApp (if different)
                      </label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={formData.whatsapp}
                        onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Work Email *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="partner@developer.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden transition-colors"
                      />
                    </div>
                  </div>

                  {/* Dropdowns */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Your Role *
                      </label>
                      <select
                        value={formData.role}
                        onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden transition-colors"
                      >
                        <option value="Developer">Developer</option>
                        <option value="Builder">Builder</option>
                        <option value="Project Owner">Project Owner</option>
                        <option value="Broker">Broker</option>
                        <option value="Channel Partner">Channel Partner</option>
                        <option value="Real Estate Company">Real Estate Company</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Project Location *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Kokapet, Hyderabad"
                        value={formData.projectLocation}
                        onChange={(e) => setFormData({ ...formData, projectLocation: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden transition-colors"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                        Project Type *
                      </label>
                      <select
                        value={formData.projectType}
                        onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                        className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden transition-colors"
                      >
                        <option value="Residential">Residential</option>
                        <option value="Commercial">Commercial</option>
                        <option value="Plots">Plots</option>
                        <option value="Villas">Villas</option>
                        <option value="Mixed Use">Mixed Use</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* What do you need? Pills Checkbox list */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2.5">
                      What do you need? (Select all that apply)
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {availableNeeds.map((need) => {
                        const isSelected = formData.needs.includes(need);
                        return (
                          <button
                            type="button"
                            key={need}
                            onClick={() => toggleNeed(need)}
                            className={`text-xs font-semibold px-3.5 py-2 rounded-lg border transition-all ${
                              isSelected
                                ? 'bg-[#14171A] text-white border-[#14171A]'
                                : 'bg-[#FBFBF9] text-[#5E646A] border-[#D5D5CD] hover:border-[#14171A]'
                            }`}
                          >
                            {isSelected ? '✓ ' : '+ '}
                            {need}
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Project Details Textarea */}
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-wider text-[#8D9399] mb-2">
                      Project / Business Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Share details on current launch phase, total inventory units, ticket size range, or existing marketing bottlenecks..."
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      className="w-full text-sm px-4 py-3 rounded-xl border border-[#D5D5CD] bg-[#FBFBF9] focus:bg-white focus:border-[#1E56D6] focus:outline-hidden transition-colors"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center gap-2 bg-[#14171A] hover:bg-[#1E56D6] text-white font-semibold text-sm sm:text-base py-4 px-6 rounded-xl transition-all duration-200 shadow-sm"
                    >
                      {isSubmitting ? (
                        <span>Processing Project Request...</span>
                      ) : (
                        <>
                          <span>Request Growth Plan</span>
                          <ArrowRight className="w-4 h-4" />
                        </>
                      )}
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
