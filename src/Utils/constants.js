export const menuItems = [
    {
        text: "Company",
        subMenu: [
            {
                items: [
                    { text: "Career", href: "/career" },
                    { text: "About Us", href: "/aboutus" },
                ],
            },
        ],
    },
    {
        text: "Services",
        subMenu: [
            {
                title: "Mobile App",
                items: [
                    { text: "Android App", href: "/contact" },
                    { text: "iOS App", href: "/contact" },
                    { text: "Cross-Platform App", href: "/contact" },
                    { text: "Flutter App", href: "/contact" },
                    { text: "React Native App", href: "/contact" },
                ],
            },
            {
                title: "Web",
                items: [
                    { text: "Web Development", href: "/contact" },
                    { text: "Website Design", href: "/contact" },
                    { text: "Website Redesign", href: "/contact" },
                    { text: "Responsive Design", href: "/contact" },
                ],
            },
            {
                title: "UI/UX Design",
                items: [
                    { text: "User Research & Analysis", href: "/contact" },
                    { text: "Wireframing & Prototyping", href: "/contact" },
                    { text: "Low-Fidelity Design", href: "/contact" },
                    { text: "High-Fidelity Design", href: "/contact" },
                    {
                        text: "Responsive & Adaptive Design",
                        href: "/contact",
                    },
                    { text: "Design System Development", href: "/contact" },
                ],
            },
            {
                title: "AI & ML Services",
                items: [
                    {
                        text: "AI-Powered App Development",
                        href: "/contact",
                    },
                    {
                        text: "Natural Language Processing (NLP)",
                        href: "/contact",
                    },
                    { text: "Computer Vision Solutions", href: "/contact" },
                    {
                        text: "Chatbot and Virtual Assistant",
                        href: "/contact",
                    },
                    { text: "Predictive Analytics", href: "/contact" },
                ],
            },
            // {
            //     title: "Digital Marketing Services",
            //     items: [
            //         {
            //             text: "Search Engine Optimization (SEO)",
            //             href: "/contact",
            //         },
            //         {
            //             text: "Pay-Per-Click Advertising (PPC)",
            //             href: "/contact",
            //         },
            //         {
            //             text: "Social Media Marketing (SMM)",
            //             href: "/contact",
            //         },
            //         { text: "Content Marketing", href: "/contact" },
            //         { text: "Affiliate Marketing", href: "/contact" },
            //         {
            //             text: "Analytics and Performance Tracking",
            //             href: "/contact",
            //         },
            //     ],
            // },
        ],
    },
    {
        text: "Our Partner's",
        subMenu: [
            {
                title: "Colleges",
                items: [
                    {
                        text: "CT UNIVERSITY", href: "/partners#ct", logo: "public/colleges/ct/logo.png",
                        images: ["public/colleges/ct/ct1.jpg", "public/colleges/ct/ct2.jpg", "public/colleges/ct/ct3.jpg", "public/colleges/ct/ct4.jpg"]
                    },
                    {
                        text: "KIT COLLEGE", href: "/partners#kit", logo: "public/colleges/kiet/logo.jpeg",
                        images: ["/public/colleges/kiet/kiet_1.jpg"]
                    },
                    {
                        text: "BRC COLLEGE", href: "/partners#brc", logo: "public/colleges/brcm/logo.jpeg",
                        images: ["public/colleges/brcm/brcm.jpg", "public/colleges/brcm/brcm1.jpg"]
                    },
                    {
                        text: "CGC COLLEGE", href: "/partners#cgc", logo: "public/colleges/cgc/logo.png",
                        images: []
                    },
                ],
            },
        ],
    },
    {
        text: "Internships & Training",
        // href: "/internshipandtraining"
        subMenu: [
            {
                title: "Internship",
                items: [
                    { text: "Web Development", href: '/internshipandtraining' },
                    { text: "Back End Development", href: "/internshipandtraining" },
                    { text: "Full Stack Development", href: "/internshipandtraining" },
                    { text: "UI/UX Design", href: "/internshipandtraining" },
                    { text: "HR ", href: "/internshipandtraining" },
                    { text: "Digital Marketing", href: "/internshipandtraining" },
                    { text: "App Development", href: "/internshipandtraining" },
                ]
            }
        ]
    },

    // { text: "About Us", href: "/aboutus" },
    { text: "Contact Us", href: "/contact" },
];