export default function handler(req, res) {
  const images = [
    {
      id: 1,
      src: "/images/Dr Abderezak Hadrouf.png",
      alt: "Doctor",
      name: "Dr.Abderezak Hadrouf",
      designation: "ENT",
      place: "ZH Dubai",
      languagesSpoken: ["English", "Urdu", "Arabic", "Kannada"],
      workExperience: [
        "Dr. Moinuddin has over 11 years of medical experience in General Medicine and Nephrology. Prior to joining Zulekha Hospital he worked as a Consultant Nephrologist at Max Smart Super Specialty Hospital, New Delhi, India.",
        "Dr. Moinuddin started his practice at the Internal Medicine department of Dr B.R Ambedkar Medical College & Hospital, India. He worked as an Internal Medicine Registrar at Apollo Hospital, Bangalore. He did his Super Specialization through NBE Residency Program in Adult Nephrology and Renal Transplantation at Narayana Hrudayalaya Health City, India. He is a member of American Society of Nephrology and has attended several national and state level conferences, workshops and CMEs as a delegate.",
        "Dr Moinuddin completed his MBBS from Bangalore Medical College and Research Institute. He accomplished MD in Internal Medicine and then Super Specialization in Adult Nephrology and Renal Transplantation from Narayana Health City - Bangalore, India.",
      ],
      specialInterests: [
        "Diabetic kidney disease, hypertension",
        "Post renal transplant care",
        "AKI (Acute kidney injury)",
        "CKD (Chronic kidney disease)",
        "Kidney stones",
        "ADPKD (Autosomal dominant polycystic kidney disease)",
        "Glomerular and Reno vascular diseases",
        "Nephrotic syndromes",
        "Autoimmune and malignancy related kidney diseases (SLE, Myeloma, vasculitis)",
        "CKD- MBD (chronic kidney disease-mineral and bone disorder",
        "Anemia of chronic kidney disease (CKD",
        " Hemodialysis",
        "Continuous Renal Replacement Therapy",
        "Plasmapheresis",
        "USG guided Temporary Hemodialysis catheters",
        " Tunnelled HD (Permacath) catheters",
        "USG guided native and transplant renal biopsies",
      ],

      researchPublications :[
        "Thesis on Diabetic Neuropathy and Evaluation of Iron overload through Hepatic MRI in CKD stage 5 patients during residency programs"
      ]
    },
    {
      id: 2,
      src: "/images/Dr.-Ahmed-Fawwaz.png",
      alt: "Doctor",
      name: "Dr.Ahmed Fawwaz",
      designation: "Orthopedics",
      place: "ZH Dubai",
      languagesSpoken: ["English", "Urdu", "Arabic", "Kannada"],
      workExperience: [
        "Dr. Moinuddin has over 11 years of medical experience in General Medicine and Nephrology. Prior to joining Zulekha Hospital he worked as a Consultant Nephrologist at Max Smart Super Specialty Hospital, New Delhi, India.",
        "Dr. Moinuddin started his practice at the Internal Medicine department of Dr B.R Ambedkar Medical College & Hospital, India. He worked as an Internal Medicine Registrar at Apollo Hospital, Bangalore. He did his Super Specialization through NBE Residency Program in Adult Nephrology and Renal Transplantation at Narayana Hrudayalaya Health City, India. He is a member of American Society of Nephrology and has attended several national and state level conferences, workshops and CMEs as a delegate.",
        "Dr Moinuddin completed his MBBS from Bangalore Medical College and Research Institute. He accomplished MD in Internal Medicine and then Super Specialization in Adult Nephrology and Renal Transplantation from Narayana Health City - Bangalore, India.",
      ],
      specialInterests: [
        "Diabetic kidney disease, hypertension",
        "Post renal transplant care",
        "AKI (Acute kidney injury)",
        "CKD (Chronic kidney disease)",
        "Kidney stones",
        "ADPKD (Autosomal dominant polycystic kidney disease)",
        "Glomerular and Reno vascular diseases",
        "Nephrotic syndromes",
        "Autoimmune and malignancy related kidney diseases (SLE, Myeloma, vasculitis)",
        "CKD- MBD (chronic kidney disease-mineral and bone disorder",
        "Anemia of chronic kidney disease (CKD",
        " Hemodialysis",
        "Continuous Renal Replacement Therapy",
        "Plasmapheresis",
        "USG guided Temporary Hemodialysis catheters",
        " Tunnelled HD (Permacath) catheters",
        "USG guided native and transplant renal biopsies",
      ],

      researchPublications :[
        "Thesis on Diabetic Neuropathy and Evaluation of Iron overload through Hepatic MRI in CKD stage 5 patients during residency programs"
      ]
    },
    {
      id: 3,
      src: "/images/DR_AALA_SALIM_AHMED.webp",
      alt: "Doctor",
      name: "Dr. AALA SALIM AHMED",
      designation: "Psychiatry",
      place: "ZH Dubai",
      languagesSpoken: ["English", "Urdu", "Arabic", "Kannada"],
      workExperience: [
        "Dr. Moinuddin has over 11 years of medical experience in General Medicine and Nephrology. Prior to joining Zulekha Hospital he worked as a Consultant Nephrologist at Max Smart Super Specialty Hospital, New Delhi, India.",
        "Dr. Moinuddin started his practice at the Internal Medicine department of Dr B.R Ambedkar Medical College & Hospital, India. He worked as an Internal Medicine Registrar at Apollo Hospital, Bangalore. He did his Super Specialization through NBE Residency Program in Adult Nephrology and Renal Transplantation at Narayana Hrudayalaya Health City, India. He is a member of American Society of Nephrology and has attended several national and state level conferences, workshops and CMEs as a delegate.",
        "Dr Moinuddin completed his MBBS from Bangalore Medical College and Research Institute. He accomplished MD in Internal Medicine and then Super Specialization in Adult Nephrology and Renal Transplantation from Narayana Health City - Bangalore, India.",
      ],
      specialInterests: [
        "Diabetic kidney disease, hypertension",
        "Post renal transplant care",
        "AKI (Acute kidney injury)",
        "CKD (Chronic kidney disease)",
        "Kidney stones",
        "ADPKD (Autosomal dominant polycystic kidney disease)",
        "Glomerular and Reno vascular diseases",
        "Nephrotic syndromes",
        "Autoimmune and malignancy related kidney diseases (SLE, Myeloma, vasculitis)",
        "CKD- MBD (chronic kidney disease-mineral and bone disorder",
        "Anemia of chronic kidney disease (CKD",
        " Hemodialysis",
        "Continuous Renal Replacement Therapy",
        "Plasmapheresis",
        "USG guided Temporary Hemodialysis catheters",
        " Tunnelled HD (Permacath) catheters",
        "USG guided native and transplant renal biopsies",
      ],

      researchPublications :[
        "Thesis on Diabetic Neuropathy and Evaluation of Iron overload through Hepatic MRI in CKD stage 5 patients during residency programs"
      ]
    },
    {
      id: 4,
      src: "/images/DR_MOHAMMED_MOINUDDIN.webp",
      alt: "Doctor",
      name: "Dr. MOHAMMED MOINUDDIN",
      designation: "Nephrology",
      place: "ZH Dubai",
      languagesSpoken: ["English", "Urdu", "Arabic", "Kannada"],
      workExperience: [
        "Dr. Moinuddin has over 11 years of medical experience in General Medicine and Nephrology. Prior to joining Zulekha Hospital he worked as a Consultant Nephrologist at Max Smart Super Specialty Hospital, New Delhi, India.",
        "Dr. Moinuddin started his practice at the Internal Medicine department of Dr B.R Ambedkar Medical College & Hospital, India. He worked as an Internal Medicine Registrar at Apollo Hospital, Bangalore. He did his Super Specialization through NBE Residency Program in Adult Nephrology and Renal Transplantation at Narayana Hrudayalaya Health City, India. He is a member of American Society of Nephrology and has attended several national and state level conferences, workshops and CMEs as a delegate.",
        "Dr Moinuddin completed his MBBS from Bangalore Medical College and Research Institute. He accomplished MD in Internal Medicine and then Super Specialization in Adult Nephrology and Renal Transplantation from Narayana Health City - Bangalore, India.",
      ],
      specialInterests: [
        "Diabetic kidney disease, hypertension",
        "Post renal transplant care",
        "AKI (Acute kidney injury)",
        "CKD (Chronic kidney disease)",
        "Kidney stones",
        "ADPKD (Autosomal dominant polycystic kidney disease)",
        "Glomerular and Reno vascular diseases",
        "Nephrotic syndromes",
        "Autoimmune and malignancy related kidney diseases (SLE, Myeloma, vasculitis)",
        "CKD- MBD (chronic kidney disease-mineral and bone disorder",
        "Anemia of chronic kidney disease (CKD",
        " Hemodialysis",
        "Continuous Renal Replacement Therapy",
        "Plasmapheresis",
        "USG guided Temporary Hemodialysis catheters",
        " Tunnelled HD (Permacath) catheters",
        "USG guided native and transplant renal biopsies",
      ],

      researchPublications :[
        "Thesis on Diabetic Neuropathy and Evaluation of Iron overload through Hepatic MRI in CKD stage 5 patients during residency programs"
      ]
    },
    {
      id: 5,
      src: "/images/Dr-Ajay-Raj-Gupta-Anesthilogy.webp",
      alt: "Doctor",
      name: "Dr. Ajay Raj Gupta",
      designation: "Anesthesiology",
      place: "ZH Dubai",
      languagesSpoken: ["English", "Urdu", "Arabic", "Kannada"],
      workExperience: [
        "Dr. Moinuddin has over 11 years of medical experience in General Medicine and Nephrology. Prior to joining Zulekha Hospital he worked as a Consultant Nephrologist at Max Smart Super Specialty Hospital, New Delhi, India.",
        "Dr. Moinuddin started his practice at the Internal Medicine department of Dr B.R Ambedkar Medical College & Hospital, India. He worked as an Internal Medicine Registrar at Apollo Hospital, Bangalore. He did his Super Specialization through NBE Residency Program in Adult Nephrology and Renal Transplantation at Narayana Hrudayalaya Health City, India. He is a member of American Society of Nephrology and has attended several national and state level conferences, workshops and CMEs as a delegate.",
        "Dr Moinuddin completed his MBBS from Bangalore Medical College and Research Institute. He accomplished MD in Internal Medicine and then Super Specialization in Adult Nephrology and Renal Transplantation from Narayana Health City - Bangalore, India.",
      ],
      specialInterests: [
        "Diabetic kidney disease, hypertension",
        "Post renal transplant care",
        "AKI (Acute kidney injury)",
        "CKD (Chronic kidney disease)",
        "Kidney stones",
        "ADPKD (Autosomal dominant polycystic kidney disease)",
        "Glomerular and Reno vascular diseases",
        "Nephrotic syndromes",
        "Autoimmune and malignancy related kidney diseases (SLE, Myeloma, vasculitis)",
        "CKD- MBD (chronic kidney disease-mineral and bone disorder",
        "Anemia of chronic kidney disease (CKD",
        " Hemodialysis",
        "Continuous Renal Replacement Therapy",
        "Plasmapheresis",
        "USG guided Temporary Hemodialysis catheters",
        " Tunnelled HD (Permacath) catheters",
        "USG guided native and transplant renal biopsies",
      ],

      researchPublications :[
        "Thesis on Diabetic Neuropathy and Evaluation of Iron overload through Hepatic MRI in CKD stage 5 patients during residency programs"
      ]
    },
    {
      id: 6,
      src: "/images/Dr.Amarendra-Prasad.webp",
      alt: "Doctor",
      name: "Dr.Amarendra Prasad",
      designation: "Paediatrics",
      place: "ZH Dubai",
      languagesSpoken: ["English", "Urdu", "Arabic", "Kannada"],
      workExperience: [
        "Dr. Moinuddin has over 11 years of medical experience in General Medicine and Nephrology. Prior to joining Zulekha Hospital he worked as a Consultant Nephrologist at Max Smart Super Specialty Hospital, New Delhi, India.",
        "Dr. Moinuddin started his practice at the Internal Medicine department of Dr B.R Ambedkar Medical College & Hospital, India. He worked as an Internal Medicine Registrar at Apollo Hospital, Bangalore. He did his Super Specialization through NBE Residency Program in Adult Nephrology and Renal Transplantation at Narayana Hrudayalaya Health City, India. He is a member of American Society of Nephrology and has attended several national and state level conferences, workshops and CMEs as a delegate.",
        "Dr Moinuddin completed his MBBS from Bangalore Medical College and Research Institute. He accomplished MD in Internal Medicine and then Super Specialization in Adult Nephrology and Renal Transplantation from Narayana Health City - Bangalore, India.",
      ],
      specialInterests: [
        "Diabetic kidney disease, hypertension",
        "Post renal transplant care",
        "AKI (Acute kidney injury)",
        "CKD (Chronic kidney disease)",
        "Kidney stones",
        "ADPKD (Autosomal dominant polycystic kidney disease)",
        "Glomerular and Reno vascular diseases",
        "Nephrotic syndromes",
        "Autoimmune and malignancy related kidney diseases (SLE, Myeloma, vasculitis)",
        "CKD- MBD (chronic kidney disease-mineral and bone disorder",
        "Anemia of chronic kidney disease (CKD",
        " Hemodialysis",
        "Continuous Renal Replacement Therapy",
        "Plasmapheresis",
        "USG guided Temporary Hemodialysis catheters",
        " Tunnelled HD (Permacath) catheters",
        "USG guided native and transplant renal biopsies",
      ],

      researchPublications :[
        "Thesis on Diabetic Neuropathy and Evaluation of Iron overload through Hepatic MRI in CKD stage 5 patients during residency programs"
      ]
    },
    {
      id: 7,
      src: "/images/dr-anuja-anna-varghese.webp",
      alt: "Doctor",
      name: "Dr Anuja Anna Varghese",
      designation: "Dermatology",
      place: "ZH Dubai",
    },
    {
      id: 8,
      src: "/images/Dr-Ahmed-Javid.webp",
      alt: "Doctor",
      name: "Dr.Ahmed Javid",
      designation: "Internal Medicine",
      place: "ZH Dubai",
    },
    {
      id: 9,
      src: "/images/Dr-Lamya-Ibrahim.webp",
      alt: "Doctor",
      name: "Dr.Lamya Ibrahim",
      designation: "Laboratory",
      place: "ZH Dubai",
    },
    {
      id: 10,
      src: "/images/ayub-siddiqui.png",
      alt: "Doctor",
      name: "Dr.Ayub-siddiqui",
      designation: "ENT",
      place: "ZH Dubai",
    },

    {
      id: 11,
      src: "/images/Dr. May Shaker.png",
      alt: "Doctor",
      name: "Dr.May Shaker",
      designation: "Orthopedics",
      place: "ZH Dubai",
    },
    {
      id: 12,
      src: "/images/Dr.-Karan-Hetal-Shah.png",
      alt: "Doctor",
      name: "Dr.Karan Hetal Shah",
      designation: "Psychiatry",
      place: "ZH Dubai",
    },
    {
      id: 13,
      src: "/images/Dr.-Mohammad-Shamma.png",
      alt: "Doctor",
      name: "Dr.Mohammad Shamma",
      designation: "Nephrology",
      place: "ZH Dubai",
    },
    {
      id: 14,
      src: "/images/DR_AHMED_SHARAF.webp",
      alt: "Doctor",
      name: "Dr.AHMED SHARAF",
      designation: "Anesthesiology",
      place: "ZH Dubai",
    },
    {
      id: 15,
      src: "/images/DR_AMINA_NOOR_MUHAMMAD.webp",
      alt: "Doctor",
      name: "Dr.AMINA NOOR MUHAMMAD",
      designation: "Paediatrics",
      place: "ZH Dubai",
    },

    {
      id: 15,
      src: "/images/DR_KARTHIK_BALACHANDRAN.webp",
      alt: "Doctor",
      name: "Dr.KARTHIK BALACHANDRAN",
      designation: "Dermatology",
      place: "ZH Dubai",
    },
    {
      id: 16,
      src: "/images/MOHAMMAD-SHEHATA.webp",
      alt: "Doctor",
      name: "Dr.MOHAMMAD SHEHATA",
      designation: "Internal Medicine",
      place: "ZH Dubai",
    },
    {
      id: 17,
      src: "/images/hashmat-faheem.webp",
      alt: "Doctor",
      name: "Dr.Hashmat-faheem",
      designation: "Laboratory",
      place: "ZH Dubai",
    },

    {
      id: 18,
      src: "/images/dr-mounika-reddy.png",
      alt: "Doctor",
      name: "Dr.Mounika reddy",
      designation: "ENT",
      place: "ZH Dubai",
    },
    {
      id: 19,
      src: "/images/dr-mohammed-nagy-serour.webp",
      alt: "Doctor",
      name: "Dr Mohammed nagy serour",
      designation: "Orthopedics",
      place: "ZH Dubai",
    },
    {
      id: 20,
      src: "/images/Dr-Mohamed-Aly-Mahmoud-Abdel-Hamid.webp",
      alt: "Doctor",
      name: "Dr Mohamed Aly Mahmoud Abdel Hamid",
      designation: "Psychiatry",
      place: "ZH Dubai",
    },
    {
      id: 21,
      src: "/images/dr-mohamed-ahmed-abouelyazed-elshafei.png",
      alt: "Doctor",
      name: "Dr Ajay Raj Gupta Anesthilogy",
      designation: "Nephrology",
      place: "ZH Dubai",
    },
    {
      id: 22,
      src: "/images/Dr-Mohamed -Alhaj-Mustafa.webp",
      alt: "Doctor",
      name: "Dr.Mohamed Alhaj Mustafa",
      designation: "Anesthesiology",
      place: "ZH Dubai",
    },
    {
      id: 23,
      src: "/images/dr-marwa-gad.webp",
      alt: "Doctor",
      name: "Dr Marwa Gad",
      designation: "Paediatrics",
      place: "ZH Dubai",
    },
    {
      id: 24,
      src: "/images/dr-maria-shabbir-saria.webp",
      alt: "Doctor",
      name: "Dr.Maria shabbir saria",
      designation: "Dermatology",
      place: "ZH Dubai",
    },
    {
      id: 25,
      src: "/images/Dr-Magdy-Mohamed-Allam.png",
      alt: "Doctor",
      name: "Dr.Magdy Mohamed Allam",
      designation: "Internal Medicine",
      place: "ZH Dubai",
    },
    {
      id: 26,
      src: "/images/Dr-Laxmi-Vijay-Yaliwal.webp",
      alt: "Doctor",
      name: "Dr.Laxmi Vijay Yaliwal",
      designation: "Laboratory",
      place: "ZH Dubai",
    },
    {
      id: 27,
      src: "/images/dr-krishi-gowdra-revannasiddappa.png",
      alt: "Doctor",
      name: "Dr.krishi gowdra revannasiddappa",
      designation: "Internal Medicine",
      place: "ZH Dubai",
    },
    {
      id: 28,
      src: "/images/dr-keerthi.webp",
      alt: "Doctor",
      name: "Dr keerthi",
      designation: "Laboratory",
      place: "ZH Dubai",
    },
    {
      id: 29,
      src: "/images/dr-amit-kailas-kasliwal.webp",
      alt: "Doctor",
      name: "  Dr.Amit kailas kasliwal",
      designation: "Laboratory",
      place: "ZH Dubai",
    },
  ];
  const { id } = req.query;

  if (id) {
    // Parse the id to an integer and find the corresponding image
    const image = images.find((img) => img.id === parseInt(id, 10));
    if (image) {
      // If the image is found, send it back as JSON
      res.status(200).json(image);
    } else {
      // If no image is found, send a 404 error
      res.status(404).json({ message: "Doctor not found with the given ID." });
    }
  } else {
    // If no ID is provided, return all images
    res.status(200).json(images);
  }
}
