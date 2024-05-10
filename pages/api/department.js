export default function handler(req, res) {
    const departments = [
        { id: 1, name: "Anesthesiology", link: "/anesthesiology" },
        { id: 2, name: "Audiology", link: "/audiology" },
        { id: 3, name: "Bariatric Surgery", link: "/bariatric-surgery" },
        { id: 4, name: "Cardiac Sciences", link: "/cardiac-sciences" },
        { id: 5, name: "Dental", link: "/dental" },
        { id: 6, name: "Dermatology", link: "/dermatology" },
        { id: 7, name: "Diabesity", link: "/diabesity" },
        { id: 8, name: "E.N.T", link: "/ent" },
        { id: 9, name: "Emergency", link: "/emergency" },
        { id: 10, name: "Endocrinology", link: "/endocrinology" },
        { id: 11, name: "Gastroenterology", link: "/gastroenterology" },
        { id: 12, name: "General & Laparoscopic Surgery", link: "/general-laparoscopic-surgery" },
        { id: 13, name: "Gynaecology", link: "/gynaecology" },
        { id: 14, name: "Hematology", link: "/hematology" },
        { id: 15, name: "Internal Medicine", link: "/internal-medicine" },
        { id: 16, name: "Joint Clinics", link: "/joint-clinics" },
        { id: 17, name: "Laboratory", link: "/laboratory" },
        { id: 18, name: "Neonatology", link: "/neonatology" },
        { id: 19, name: "Nephrology", link: "/nephrology" },
        { id: 20, name: "Neurology", link: "/neurology" },
        { id: 21, name: "Neuro Surgery", link: "/neuro-surgery" },
        { id: 22, name: "Nutrition & Lifestyle Management", link: "/nutrition-lifestyle-management" },
        { id: 23, name: "Oncology", link: "/oncology" },
        { id: 24, name: "Ophthalmology", link: "/ophthalmology" },
        { id: 25, name: "Orthopedics", link: "/orthopedics" },
        { id: 26, name: "Paediatrics", link: "/paediatrics" },
        { id: 27, name: "Paediatric Intensive Care Unit (PICU)", link: "/paediatric-intensive-care-unit" },
        { id: 28, name: "Paediatric Neurology", link: "/paediatric-neurology" },
        { id: 29, name: "Paediatric Oncology", link: "/paediatric-oncology" },
        { id: 30, name: "PHARMACY", link: "/pharmacy" },
        { id: 31, name: "Physical Medicine & Rehabilitation", link: "/physical-medicine-rehabilitation" },
        { id: 32, name: "Physiotherapy", link: "/physiotherapy" },
        { id: 33, name: "Plastic & Reconstruction Surgery", link: "/plastic-reconstruction-surgery" },
        { id: 34, name: "Psychiatry and Clinical Psychology", link: "/psychiatry-clinical-psychology" },
        { id: 35, name: "Pulmonology", link: "/pulmonology" },
        { id: 36, name: "Radiology", link: "/radiology" },
        { id: 37, name: "Recovery Clinic", link: "/recovery-clinic" },
        { id: 38, name: "Rheumatology", link: "/rheumatology" },
        { id: 39, name: "Speech Therapy", link: "/speech-therapy" },
        { id: 40, name: "Stroke Clinic", link: "/stroke-clinic" },
        { id: 41, name: "Urology", link: "/urology" }
    ];
    res.status(200).json(departments);
}
