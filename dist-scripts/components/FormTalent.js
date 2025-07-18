import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useRef, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { upload } from './VectorImage';
const AREA_OF_INTEREST = [
    'Cloud Solutions',
    'Compute',
    'Financial Services',
    'High Performance Compute',
    'Human Resources',
    'Legal and Administration',
    'Manufacturing',
    'Marketing and PR',
    'UI/UX Design',
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
    const formRef = useRef(null);
    const [file, setFile] = useState(null);
    const [dragActive, setDragActive] = useState(false);
    const [area, setArea] = useState('');
    const [exp, setExp] = useState('');
    const [consentEmail, setConsentEmail] = useState(false);
    const [consentSMS, setConsentSMS] = useState(false);
    const [errors, setErrors] = useState({});
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [currentSalary, setCurrentSalary] = useState('');
    const [expectedSalary, setExpectedSalary] = useState('');
    const [selectionReason, setSelectionReason] = useState('');
    const MAX_FILE_SIZE = 5 * 1024 * 1024;
    const ALLOWED_FILE_TYPES = ['.pdf', '.doc', '.docx'];
    const validateFile = (selectedFile) => {
        if (!selectedFile) {
            return { resume: 'Please upload your resume' };
        }
        if (selectedFile.size > MAX_FILE_SIZE) {
            return { resume: 'File size should not exceed 5MB' };
        }
        const fileExtension = ('.' + selectedFile.name.split('.').pop()?.toLowerCase()) || '';
        if (!ALLOWED_FILE_TYPES.includes(fileExtension)) {
            return { resume: 'Only PDF, DOC, and DOCX files are allowed' };
        }
        return {};
    };
    const handleFileChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            const fileValidationResult = validateFile(selectedFile);
            if (fileValidationResult.resume) {
                const resumeError = fileValidationResult.resume;
                setErrors(prev => ({
                    ...prev,
                    resume: resumeError
                }));
                if (e.target)
                    e.target.value = '';
                setFile(null);
                return;
            }
            setFile(selectedFile);
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.resume;
                return newErrors;
            });
        }
    };
    const handleDrag = (e) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover')
            setDragActive(true);
        else if (e.type === 'dragleave')
            setDragActive(false);
    };
    const handleDrop = (e) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const droppedFile = e.dataTransfer.files[0];
            const fileValidationResult = validateFile(droppedFile);
            if (fileValidationResult.resume) {
                const resumeError = fileValidationResult.resume;
                setErrors(prev => ({
                    ...prev,
                    resume: resumeError
                }));
                setFile(null);
                const fileInput = document.getElementById('resume-upload');
                if (fileInput)
                    fileInput.value = '';
                return;
            }
            setFile(droppedFile);
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.resume;
                return newErrors;
            });
        }
    };
    const validateForm = () => {
        const newErrors = {};
        if (!formRef.current)
            return newErrors;
        const formData = new FormData(formRef.current);
        if (!formData.get('firstName')?.toString().trim()) {
            newErrors.firstName = 'Please enter your first name';
        }
        if (!formData.get('lastName')?.toString().trim()) {
            newErrors.lastName = 'Please enter your last name';
        }
        const emailValue = formData.get('email')?.toString().trim();
        if (!emailValue) {
            newErrors.email = 'Please enter your email address';
        }
        else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue)) {
            newErrors.email = 'Please enter a valid email address';
        }
        // Phone number required check (if indicated by UI *) but no format validation
        const phoneValue = formData.get('phone')?.toString().trim();
        if (!phoneValue) {
            newErrors.phone = 'Please enter your phone number';
        }
        if (!area) {
            newErrors.areaOfInterest = 'Please select an area of interest';
        }
        if (!exp) {
            newErrors.experienceLevel = 'Please select your experience level';
        }
        if (!formData.get('city')?.toString().trim()) {
            newErrors.city = 'Please enter your city';
        }
        if (!formData.get('state')?.toString().trim()) {
            newErrors.state = 'Please enter your state';
        }
        if (!formData.get('country')?.toString().trim()) {
            newErrors.country = 'Please enter your country';
        }
        if (!currentSalary.trim()) {
            newErrors.currentSalary = 'Please enter your current salary';
        }
        else if (!/^\d+(\.\d{0,1})?$/.test(currentSalary)) {
            newErrors.currentSalary = 'Please enter a valid number (e.g., 3, 3.5)';
        }
        if (!expectedSalary.trim()) {
            newErrors.expectedSalary = 'Please enter your expected salary';
        }
        else if (!/^\d+(\.\d{0,1})?$/.test(expectedSalary)) {
            newErrors.expectedSalary = 'Please enter a valid number (e.g., 3, 3.5)';
        }
        if (!selectionReason.trim()) {
            newErrors.selectionReason = 'Please tell us why we should select you';
        }
        const fileValidationErrors = validateFile(file);
        if (fileValidationErrors.resume) {
            newErrors.resume = fileValidationErrors.resume;
        }
        return newErrors;
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formValidationErrors = validateForm();
        setErrors(formValidationErrors);
        if (Object.keys(formValidationErrors).length > 0) {
            const errorCount = Object.keys(formValidationErrors).length;
            toast.error(`Please fill in ${errorCount} required field${errorCount > 1 ? 's' : ''} correctly.`);
            return;
        }
        setIsSubmitting(true);
        if (!formRef.current) {
            setIsSubmitting(false);
            return;
        }
        const formData = new FormData(formRef.current);
        if (file)
            formData.append('resume', file, file.name);
        formData.set('areaOfInterest', area);
        formData.set('experienceLevel', exp);
        formData.set('consentEmail', consentEmail ? 'true' : 'false');
        formData.set('consentSMS', consentSMS ? 'true' : 'false');
        formData.set('currentSalary', currentSalary);
        formData.set('expectedSalary', expectedSalary);
        formData.set('selectionReason', selectionReason);
        try {
            const response = await fetch('https://api.maxtron.ai/sendTalentData', {
                method: 'POST',
                body: formData,
            });
            if (response.ok) {
                toast.success('Thanks for your submission! We will get back to you soon.');
                if (formRef.current)
                    formRef.current.reset();
                setFile(null);
                const fileInput = document.getElementById('resume-upload');
                if (fileInput)
                    fileInput.value = '';
                setArea('');
                setExp('');
                setConsentEmail(false);
                setConsentSMS(false);
                setErrors({});
            }
            else {
                const errorData = await response.json().catch(() => ({ message: 'Failed to submit form. Please try again.' }));
                toast.error(errorData.message || 'Failed to submit form. Please try again.');
            }
        }
        catch (error) {
            console.error("Submission error:", error);
            toast.error('Network error. Please check your connection and try again.');
        }
        finally {
            setIsSubmitting(false);
        }
    };
    useEffect(() => {
        if (area && errors.areaOfInterest) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.areaOfInterest;
                return newErrors;
            });
        }
        if (exp && errors.experienceLevel) {
            setErrors(prev => {
                const newErrors = { ...prev };
                delete newErrors.experienceLevel;
                return newErrors;
            });
        }
    }, [area, exp, errors]);
    return (_jsx("section", { className: "py-4 px-1 sm:px-4 md:px-8", children: _jsxs("div", { className: "w-full mx-auto bg-white border border-[#DFDEE7] rounded-[22px] md:rounded-[32px] lg:rounded-[48px] p-4 md:p-8 lg:p-10", children: [_jsx("h2", { className: "text-3xl md:text-4xl lg:text-5xl font-bold text-[#2A2A2A] font-openSansHebrew mb-8 text-left md:text-left", children: "Join Our Talent Community" }), _jsxs("form", { ref: formRef, onSubmit: handleSubmit, className: "space-y-6", noValidate: true, children: [_jsxs("div", { className: `border border-dashed rounded-3xl p-6 md:p-7 lg:p-8 text-center transition-colors duration-200 flex flex-col items-center justify-center mb-4 ${dragActive ? 'border-purple-600 bg-purple-50' :
                                errors.resume ? 'border-red-500 bg-red-50' :
                                    'border-[#C9C2C3] bg-white'}`, onDragEnter: handleDrag, onDragOver: handleDrag, onDragLeave: handleDrag, onDrop: handleDrop, children: [_jsx("input", { type: "file", accept: ".pdf,.doc,.docx", className: "hidden", id: "resume-upload", onChange: handleFileChange }), _jsxs("label", { htmlFor: "resume-upload", className: "cursor-pointer flex flex-col items-center justify-center w-full", children: [_jsx("span", { className: "text-4xl mb-3 bg-[#FFF] p-3 rounded-lg shadow-[0px_4px_10px_0px_rgba(0,0,0,0.14)]", children: upload() }), _jsx("span", { className: "font-semibold text-[#3B3C4A] font-openSansHebrew text-base md:text-lg", children: "Drag your resume here or click to upload" }), _jsx("span", { className: "text-xs text-[#3B3C4A] font-openSansHebrew mt-1", children: "Acceptable file types: PDF, DOC, DOCX (5MB max)" }), file && _jsxs("span", { className: "mt-2 text-sm text-[#8952b6]", children: ["Selected: ", file.name] }), errors.resume && (_jsx("span", { className: "mt-2 text-sm text-red-500 bg-red-50 px-3 py-1 rounded-md block", children: errors.resume }))] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4 font-openSansHebrew", children: [_jsxs("div", { className: "flex flex-col gap-1", children: [_jsxs("label", { htmlFor: "firstName", className: "self-stretch font-openSansHebrew text-xs font-medium leading-[140%]", children: ["First Name", _jsx("span", { className: "text-[#EA1C00]", children: "*" })] }), _jsx("input", { id: "firstName", name: "firstName", type: "text", className: `px-3 py-2 md:p-3 rounded-lg bg-[#FCF4FE] border ${errors.firstName ? 'border-red-500 bg-red-50' : 'border-[#E5E7EB]'} focus:border-[#8952b6] outline-none`, onChange: () => errors.firstName && setErrors(prev => ({ ...prev, firstName: '' })) }), errors.firstName && (_jsx("span", { className: "text-xs text-red-500 mt-1 bg-red-50 px-2 py-1 rounded-md", children: errors.firstName }))] }), _jsxs("div", { className: "flex flex-col gap-1", children: [_jsxs("label", { htmlFor: "lastName", className: "self-stretch font-openSansHebrew text-xs font-medium leading-[140%]", children: ["Last Name", _jsx("span", { className: "text-[#EA1C00]", children: "*" })] }), _jsx("input", { id: "lastName", name: "lastName", type: "text", className: `px-3 py-2 md:p-3 rounded-lg bg-[#FCF4FE] border ${errors.lastName ? 'border-red-500 bg-red-50' : 'border-[#E5E7EB]'} focus:border-[#8952b6] outline-none`, onChange: () => errors.lastName && setErrors(prev => ({ ...prev, lastName: '' })) }), errors.lastName && (_jsx("span", { className: "text-xs text-red-500 mt-1 bg-red-50 px-2 py-1 rounded-md", children: errors.lastName }))] }), _jsxs("div", { className: "flex flex-col gap-1", children: [_jsxs("label", { htmlFor: "email", className: "self-stretch font-openSansHebrew text-xs font-medium leading-[140%]", children: ["Email", _jsx("span", { className: "text-[#EA1C00]", children: "*" })] }), _jsx("input", { id: "email", name: "email", type: "email", className: `px-3 py-2 md:p-3 rounded-lg bg-[#FCF4FE] border ${errors.email ? 'border-red-500 bg-red-50' : 'border-[#E5E7EB]'} focus:border-[#8952b6] outline-none`, onChange: () => errors.email && setErrors(prev => ({ ...prev, email: '' })) }), errors.email && (_jsx("span", { className: "text-xs text-red-500 mt-1 bg-red-50 px-2 py-1 rounded-md", children: errors.email }))] }), _jsxs("div", { className: "flex flex-col gap-1", children: [_jsxs("label", { htmlFor: "phone", className: "self-stretch font-openSansHebrew text-xs font-medium leading-[140%]", children: ["Phone Number", _jsx("span", { className: "text-[#EA1C00]", children: "*" })] }), _jsx("input", { id: "phone", name: "phone", type: "tel", className: `px-3 py-2 md:p-3 rounded-lg bg-[#FCF4FE] border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-[#E5E7EB]'} focus:border-[#8952b6] outline-none`, onChange: () => errors.phone && setErrors(prev => ({ ...prev, phone: '' })) }), errors.phone && (_jsx("span", { className: "text-xs text-red-500 mt-1 bg-red-50 px-2 py-1 rounded-md", children: errors.phone }))] }), _jsxs("div", { className: "flex flex-col gap-1", children: [_jsxs("label", { htmlFor: "areaOfInterest", className: "self-stretch font-openSansHebrew text-xs font-medium leading-[140%]", children: ["Area Of Interest", _jsx("span", { className: "text-[#EA1C00]", children: "*" })] }), _jsxs("select", { id: "areaOfInterest", name: "areaOfInterest", value: area, onChange: e => setArea(e.target.value), className: `font-openSansHebrew text-xs font-medium p-3 rounded-lg bg-[#FCF4FE] border ${errors.areaOfInterest ? 'border-red-500 bg-red-50' : 'border-[#E5E7EB]'} focus:border-[#8952b6] outline-none`, children: [_jsx("option", { value: "", children: "Please Select" }), AREA_OF_INTEREST.map(opt => _jsx("option", { value: opt, children: opt }, opt))] }), errors.areaOfInterest && (_jsx("span", { className: "text-xs text-red-500 mt-1 bg-red-50 px-2 py-1 rounded-md", children: errors.areaOfInterest }))] }), _jsxs("div", { className: "flex flex-col gap-1", children: [_jsxs("label", { htmlFor: "experienceLevel", className: "self-stretch font-openSansHebrew text-xs font-medium leading-[140%]", children: ["Experience Level", _jsx("span", { className: "text-[#EA1C00]", children: "*" })] }), _jsxs("select", { id: "experienceLevel", name: "experienceLevel", value: exp, onChange: e => setExp(e.target.value), className: `font-openSansHebrew text-xs font-medium p-3 rounded-lg bg-[#FCF4FE] border ${errors.experienceLevel ? 'border-red-500 bg-red-50' : 'border-[#E5E7EB]'} focus:border-[#8952b6] outline-none`, children: [_jsx("option", { value: "", children: "Please Select" }), EXPERIENCE_LEVEL.map(opt => _jsx("option", { value: opt, children: opt }, opt))] }), errors.experienceLevel && (_jsx("span", { className: "text-xs text-red-500 mt-1 bg-red-50 px-2 py-1 rounded-md", children: errors.experienceLevel }))] }), _jsxs("div", { className: "flex flex-col gap-1", children: [_jsxs("label", { htmlFor: "city", className: "self-stretch font-openSansHebrew text-xs font-medium leading-[140%]", children: ["City", _jsx("span", { className: "text-[#EA1C00]", children: "*" })] }), _jsx("input", { id: "city", name: "city", type: "text", className: `px-3 py-2 md:p-3 rounded-lg bg-[#FCF4FE] border ${errors.city ? 'border-red-500 bg-red-50' : 'border-[#E5E7EB]'} focus:border-[#8952b6] outline-none`, onChange: () => errors.city && setErrors(prev => ({ ...prev, city: '' })) }), errors.city && (_jsx("span", { className: "text-xs text-red-500 mt-1 bg-red-50 px-2 py-1 rounded-md", children: errors.city }))] }), _jsxs("div", { className: "flex flex-col gap-1", children: [_jsxs("label", { htmlFor: "state", className: "self-stretch font-openSansHebrew text-xs font-medium leading-[140%]", children: ["State", _jsx("span", { className: "text-[#EA1C00]", children: "*" })] }), _jsx("input", { id: "state", name: "state", type: "text", className: `px-3 py-2 md:p-3 rounded-lg bg-[#FCF4FE] border ${errors.state ? 'border-red-500 bg-red-50' : 'border-[#E5E7EB]'} focus:border-[#8952b6] outline-none`, onChange: () => errors.state && setErrors(prev => ({ ...prev, state: '' })) }), errors.state && (_jsx("span", { className: "text-xs text-red-500 mt-1 bg-red-50 px-2 py-1 rounded-md", children: errors.state }))] }), _jsxs("div", { className: "flex flex-col gap-1 md:col-span-2", children: [_jsxs("label", { htmlFor: "country", className: "self-stretch font-openSansHebrew text-xs font-medium leading-[140%]", children: ["Country", _jsx("span", { className: "text-[#EA1C00]", children: "*" })] }), _jsx("input", { id: "country", name: "country", type: "text", className: `px-3 py-2 md:p-3 rounded-lg bg-[#FCF4FE] border ${errors.country ? 'border-red-500 bg-red-50' : 'border-[#E5E7EB]'} focus:border-[#8952b6] outline-none`, onChange: () => errors.country && setErrors(prev => ({ ...prev, country: '' })) }), errors.country && (_jsx("span", { className: "text-xs text-red-500 mt-1 bg-red-50 px-2 py-1 rounded-md", children: errors.country }))] })] }), _jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-4", children: [_jsxs("div", { className: "flex flex-col gap-1", children: [_jsxs("label", { htmlFor: "currentSalary", className: "self-stretch font-openSansHebrew text-xs font-medium leading-[140%]", children: ["Current Salary ( LPA ) ", _jsx("span", { className: "text-[#EA1C00]", children: "*" })] }), _jsx("input", { id: "currentSalary", name: "currentSalary", type: "text", value: currentSalary, onChange: (e) => {
                                                const value = e.target.value;
                                                // Only allow numbers and one decimal point
                                                if (value === '' || /^\d*\.?\d{0,1}$/.test(value)) {
                                                    setCurrentSalary(value);
                                                    if (errors.currentSalary)
                                                        setErrors(prev => ({ ...prev, currentSalary: '' }));
                                                }
                                            }, placeholder: "X LPA", className: `px-3 py-2 md:p-3 rounded-lg bg-[#FCF4FE] border ${errors.currentSalary ? 'border-red-500 bg-red-50' : 'border-[#E5E7EB]'} focus:border-[#8952b6] outline-none` }), errors.currentSalary && (_jsx("span", { className: "text-xs text-red-500 mt-1 bg-red-50 px-2 py-1 rounded-md", children: errors.currentSalary }))] }), _jsxs("div", { className: "flex flex-col gap-1", children: [_jsxs("label", { htmlFor: "expectedSalary", className: "self-stretch font-openSansHebrew text-xs font-medium leading-[140%]", children: ["Expected Salary ( LPA ) ", _jsx("span", { className: "text-[#EA1C00]", children: "*" })] }), _jsx("input", { id: "expectedSalary", name: "expectedSalary", type: "text", value: expectedSalary, onChange: (e) => {
                                                const value = e.target.value;
                                                // Only allow numbers and one decimal point
                                                if (value === '' || /^\d*\.?\d{0,1}$/.test(value)) {
                                                    setExpectedSalary(value);
                                                    if (errors.expectedSalary)
                                                        setErrors(prev => ({ ...prev, expectedSalary: '' }));
                                                }
                                            }, placeholder: "X LPA", className: `px-3 py-2 md:p-3 rounded-lg bg-[#FCF4FE] border ${errors.expectedSalary ? 'border-red-500 bg-red-50' : 'border-[#E5E7EB]'} focus:border-[#8952b6] outline-none` }), errors.expectedSalary && (_jsx("span", { className: "text-xs text-red-500 mt-1 bg-red-50 px-2 py-1 rounded-md", children: errors.expectedSalary }))] })] }), _jsxs("div", { className: "flex flex-col gap-1", children: [_jsxs("label", { htmlFor: "selectionReason", className: "self-stretch font-openSansHebrew text-xs font-medium leading-[140%]", children: ["Why Should We Select You?", _jsx("span", { className: "text-[#EA1C00]", children: "*" })] }), _jsx("textarea", { id: "selectionReason", name: "selectionReason", value: selectionReason, onChange: (e) => {
                                        setSelectionReason(e.target.value);
                                        if (errors.selectionReason)
                                            setErrors(prev => ({ ...prev, selectionReason: '' }));
                                    }, rows: 4, className: `px-3 py-2 md:p-3 rounded-lg bg-[#FCF4FE] border ${errors.selectionReason ? 'border-red-500 bg-red-50' : 'border-[#E5E7EB]'} focus:border-[#8952b6] outline-none` }), errors.selectionReason && (_jsx("span", { className: "text-xs text-red-500 mt-1 bg-red-50 px-2 py-1 rounded-md", children: errors.selectionReason }))] }), _jsxs("div", { className: "flex flex-col gap-3 md:gap-4 mt-2", children: [_jsxs("label", { className: `flex items-start text-sm md:text-base gap-2 font-openSansHebrew text-[#2A2A2A]`, children: [_jsx("input", { type: "checkbox", checked: consentEmail, onChange: e => setConsentEmail(e.target.checked), className: `mt-[5px] flex-shrink-0 accent-[#7A35C1]` }), _jsx("span", { children: "By checking this box, I consent to receive transactional and marketing email messages regarding employment opportunities." })] }), _jsxs("label", { className: `flex items-start text-sm md:text-base gap-2 font-openSansHebrew text-[#2A2A2A]`, children: [_jsx("input", { type: "checkbox", checked: consentSMS, onChange: e => setConsentSMS(e.target.checked), className: `mt-[5px] flex-shrink-0 accent-[#7A35C1]` }), _jsx("span", { children: "By checking this box, I consent to receive transactional and marketing text messages regarding employment opportunities." })] })] }), _jsx("button", { type: "submit", className: `w-full py-3 mt-2 text-white font-semibold font-openSansHebrew rounded-lg transition-all duration-300 text-lg ${isSubmitting
                                ? 'bg-gray-400 cursor-not-allowed border-2 border-gray-400'
                                : 'bg-[#7A35C1] border-2 border-[#7A35C1] hover:border-2 hover:border-[#7A35C1] hover:bg-white hover:text-[#7A35C1]'}`, disabled: isSubmitting, children: isSubmitting ? (_jsxs("div", { className: "flex items-center justify-center gap-2", children: [_jsxs("svg", { className: "animate-spin h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }), "Submitting..."] })) : ('Submit') })] }), _jsx(ToastContainer, { position: "top-center", autoClose: 5000, hideProgressBar: false, newestOnTop: false, closeOnClick: true, rtl: false, pauseOnFocusLoss: true, draggable: true, pauseOnHover: true })] }) }));
};
export default FormTalent;
