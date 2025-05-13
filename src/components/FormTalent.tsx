import React, { useRef, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AREA_OF_INTEREST = [
  'Cloud Solutions',
  'Compute',
  'Financial Services',
  'High Performance Compute',
  'Human Resources',
  'Legal and Administration',
  'Manufacturing',
  'Marketing and PR',
  'Networking',
  'Operations',
  'Sales',
  'Services and Support',
  'Storage',
  'Technology and Software',
];

const EXPERIENCE_LEVEL = [
  'Intern/Graduate',
  'Professional/Individual Contributor',
  'Manager',
  'Executive',
];

const FormTalent = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [dragActive, setDragActive] = useState(false);
  const [area, setArea] = useState('');
  const [exp, setExp] = useState('');
  const [consentEmail, setConsentEmail] = useState(false);
  const [consentSMS, setConsentSMS] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
    }
  };

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === 'dragenter' || e.type === 'dragover') setDragActive(true);
    else if (e.type === 'dragleave') setDragActive(false);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      setFile(e.dataTransfer.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    if (!formRef.current) return;
    const formData = new FormData(formRef.current);
    if (file) formData.append('resume', file);
    formData.set('areaOfInterest', area);
    formData.set('experienceLevel', exp);
    formData.set('consentEmail', consentEmail ? 'true' : 'false');
    formData.set('consentSMS', consentSMS ? 'true' : 'false');
    console.log('Form Data:', formData);
    try {
      const response = await fetch('https://maxtron-backend.vercel.app/sendData', {
        method: 'POST',
        body: formData,
      });
      if (response.ok) {
        toast.success('Request submitted successfully!');
        formRef.current.reset();
        setFile(null);
        setArea('');
        setExp('');
        setConsentEmail(false);
        setConsentSMS(false);
      } else {
        const errorText = await response.text();
        toast.error(errorText);
      }
    } catch (error) {
      toast.error('Error submitting request. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="py-4 px-1 sm:px-4 md:px-8">
      <div className="w-full mx-auto bg-white border border-[#DFDEE7] rounded-[22px] md:rounded-[32px] lg:rounded-[48px] p-4 md:p-8 lg:p-10">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A2A2A] font-openSansHebrew mb-8 text-left md:text-left">Join Our Talent Community</h2>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data">
          {/* File Upload */}
          <div
            className={`border-2 border-dashed rounded-xl p-6 md:p-7 lg:p-8 text-center transition-colors duration-200 flex flex-col items-center justify-center mb-4 ${dragActive ? 'border-purple-600 bg-purple-50' : 'border-[#C9C2C3] bg-white'}`}
            onDragEnter={handleDrag}
            onDragOver={handleDrag}
            onDragLeave={handleDrag}
            onDrop={handleDrop}
          >
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="hidden"
              id="resume-upload"
              onChange={handleFileChange}
            />
            <label htmlFor="resume-upload" className="cursor-pointer flex flex-col items-center justify-center w-full">
              <span className="text-4xl mb-2">{/* Cloud upload icon */}
                <svg width="40" height="40" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-[#8952b6]"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01.88-7.903A5.5 5.5 0 1117.5 13H19a3 3 0 010 6H7a4 4 0 010-8z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 12v6m0 0l-2-2m2 2l2-2" /></svg>
              </span>
              <span className="font-semibold text-[#2A2A2A] text-base md:text-lg">Drag your resume here or click to upload</span>
              <span className="text-xs text-[#6B7280] mt-1">Acceptable file types: PDF, DOCX (5MB max)</span>
              {file && <span className="mt-2 text-sm text-[#8952b6]">Selected: {file.name}</span>}
            </label>
          </div>
          {/* Form Fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* First Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-[#2A2A2A]">First Name<span className="text-[#EA1C00]">*</span></label>
              <input name="firstName" type="text" className="p-3 rounded-lg bg-[#FCF4FE] border border-[#E5E7EB] focus:border-[#8952b6] outline-none" required />
            </div>
            {/* Last Name */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-[#2A2A2A]">Last Name<span className="text-[#EA1C00]">*</span></label>
              <input name="lastName" type="text" className="p-3 rounded-lg bg-[#FCF4FE] border border-[#E5E7EB] focus:border-[#8952b6] outline-none" required />
            </div>
            {/* Email */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-[#2A2A2A]">Email<span className="text-[#EA1C00]">*</span></label>
              <input name="email" type="email" className="p-3 rounded-lg bg-[#FCF4FE] border border-[#E5E7EB] focus:border-[#8952b6] outline-none" required />
            </div>
            {/* Phone Number */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-[#2A2A2A]">Phone Number<span className="text-[#EA1C00]">*</span></label>
              <input name="phone" type="tel" className="p-3 rounded-lg bg-[#FCF4FE] border border-[#E5E7EB] focus:border-[#8952b6] outline-none" required />
            </div>
            {/* Area of Interest */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-[#2A2A2A]">Area Of Interest<span className="text-[#EA1C00]">*</span></label>
              <select name="areaOfInterest" value={area} onChange={e => setArea(e.target.value)} className="p-3 rounded-lg bg-[#FCF4FE] border border-[#E5E7EB] focus:border-[#8952b6] outline-none" required>
                <option value="">Please Select</option>
                {AREA_OF_INTEREST.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
            {/* Experience Level */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-[#2A2A2A]">Experience Level<span className="text-[#EA1C00]">*</span></label>
              <select name="experienceLevel" value={exp} onChange={e => setExp(e.target.value)} className="p-3 rounded-lg bg-[#FCF4FE] border border-[#E5E7EB] focus:border-[#8952b6] outline-none" required>
                <option value="">Please Select</option>
                {EXPERIENCE_LEVEL.map(opt => <option key={opt} value={opt}>{opt}</option>)}
              </select>
            </div>
            {/* City */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-[#2A2A2A]">City<span className="text-[#EA1C00]">*</span></label>
              <input name="city" type="text" className="p-3 rounded-lg bg-[#FCF4FE] border border-[#E5E7EB] focus:border-[#8952b6] outline-none" required />
            </div>
            {/* State */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-semibold text-[#2A2A2A]">State<span className="text-[#EA1C00]">*</span></label>
              <input name="state" type="text" className="p-3 rounded-lg bg-[#FCF4FE] border border-[#E5E7EB] focus:border-[#8952b6] outline-none" required />
            </div>
            {/* Country */}
            <div className="flex flex-col gap-1 md:col-span-2">
              <label className="text-sm font-semibold text-[#2A2A2A]">Country<span className="text-[#EA1C00]">*</span></label>
              <input name="country" type="text" className="p-3 rounded-lg bg-[#FCF4FE] border border-[#E5E7EB] focus:border-[#8952b6] outline-none" required />
            </div>
          </div>
          {/* Checkboxes */}
          <div className="flex flex-col gap-3 md:gap-4 mt-2">
            <label className="flex items-start  text-sm md:text-base  gap-2 font-openSansHebrew text-[#2A2A2A]">
              <input type="checkbox" checked={consentEmail} onChange={e => setConsentEmail(e.target.checked)} className="mt-[5px]  accent-[#7A35C1]" />
              <span>By checking this box, I consent to receive transactional and marketing email messages regarding employment opportunities.</span>
            </label>
            <label className="flex items-start text-sm md:text-base  gap-2 font-openSansHebrew text-[#2A2A2A]">
              <input type="checkbox" checked={consentSMS} onChange={e => setConsentSMS(e.target.checked)} className="mt-[5px] accent-[#7A35C1]" />
              <span >By checking this box, I consent to receive transactional and marketing text messages regarding employment opportunities.</span>
            </label>
          </div>
          <button
            type="submit"
            className="w-full py-2 mt-2 text-white font-semibold font-openSansHebrew rounded-lg bg-[#7A35C1] border-2 border-[#7A35C1] hover:border-2 hover:border-[#7A35C1] hover:bg-white  hover:text-[#7A35C1] transition-all duration-300 text-lg"
            disabled={isLoading}
          >
            {isLoading ? 'Submitting...' : 'Submit'}
          </button>
        </form>
        <ToastContainer position="top-right" />
      </div>
    </section>
  );
};

export default FormTalent;