import * as React from "react";
import Box from "@mui/material/Box";
import Collapse from "@mui/material/Collapse";

import { RichTreeView } from "@mui/x-tree-view/RichTreeView";

import { useSpring, animated } from "@react-spring/web";
import { Link as RouterLink, useNavigate } from "react-router-dom"; // Corrected import
import logo from "../assets/DortexAiWhite.png";

const MenuTree = [
    {
        id: "1",
        label: "Company",
        children: [
            { id: "1.1", label: "Career", href: "/career" },
            { id: "1.2", label: "About Us", href: "/aboutus" },
        ],
    },
    {
        id: "2",
        label: "Services",
        children: [
            {
                id: "2.1",
                label: "Mobile App",
                children: [
                    { id: "2.1.1", label: "Android App", href: "/contact" },
                    { id: "2.1.2", label: "iOS App", href: "/contact" },
                    {
                        id: "2.1.3",
                        label: "Cross-Platform App",
                        href: "/contact",
                    },
                    { id: "2.1.4", label: "Flutter App", href: "/contact" },
                    {
                        id: "2.1.5",
                        label: "React Native App",
                        href: "/contact",
                    },
                ],
            },
            {
                id: "2.2",
                label: "Web",
                children: [
                    { id: "2.2.1", label: "Web Development", href: "/contact" },
                    { id: "2.2.2", label: "Website Design", href: "/contact" },
                    { id: "2.2.3", label: "Website Redesign", href: "/contact" },
                    { id: "2.2.4", label: "Responsive Design", href: "/contact" },
                ],
            },
            {
                id: "2.3",
                label: "UI/UX Design",
                children: [
                    { id: "2.3.1", label: "User Research & Analysis", href: "/contact" },
                    { id: "2.3.2", label: "Wireframing & Prototyping", href: "/contact" },
                    { id: "2.3.3", label: "Low-Fidelity Design", href: "/contact" },
                    { id: "2.3.4", label: "High-Fidelity Design", href: "/contact" },
                    { id: "2.3.5", label: "Responsive & Adaptive Design", href: "/contact" },
                    { id: "2.3.6", label: "Design System Development", href: "/contact" },
                ],
            },
            {
                id: "2.4",
                label: "AI & ML Services",
                children: [
                    { id: "2.4.1", label: "AI-Powered App Development", href: "/contact" },
                    { id: "2.4.2", label: "Natural Language Processing (NLP)", href: "/contact" },
                    { id: "2.4.3", label: "Computer Vision Solutions", href: "/contact" },
                    { id: "2.4.4", label: "Chatbot and Virtual Assistant", href: "/contact" },
                    { id: "2.4.5", label: "Predictive Analytics", href: "/contact" },
                ],
            },
            // {
            //     id: "2.5",
            //     label: "Digital Marketing Services",
            //     children: [
            //         { id: "2.5.1", label: "Search Engine Optimization (SEO)", href: "/contact" },
            //         { id: "2.5.2", label: "Pay-Per-Click Advertising (PPC)", href: "/contact" },
            //         { id: "2.5.3", label: "Social Media Marketing (SMM)", href: "/contact" },
            //         { id: "2.5.4", label: "Content Marketing", href: "/contact" },
            //         { id: "2.5.5", label: "Affiliate Marketing", href: "/contact" },
            //         {
            //             id: "2.5.6",
            //             label: "Analytics and Performance Tracking",
            //             href: "/contact",
            //         },
            //     ],
            // },
        ],
    },
    {
        id: "3",
        label: "Our Partner's",
        children: [
            { id: "3.1", label: "CT UNIVERSITY", href: "/partners#ct" },
            { id: "3.2", label: "KIET COLLEGE", href: "/partners#kit" },
            { id: "3.3", label: "BRMC COLLEGE", href: "/partners#brc" },
            { id: "3.4", label: "CGC LANDRAN COLLEGE", href: "/partners#cgc" },
        ],
    },
    {
        id: "4",
        label: "Internships & Training",
        children: [
            {
                id: "4.1",
                label: "Internship",
                children: [
                    { id: "4.1.1", label: "Web Development", href: "/internshipandtraining" },
                    { id: "4.1.2", label: "Back End Development", href: "/internshipandtraining" },
                    { id: "4.1.3", label: "Full Stack Development", href: "/internshipandtraining" },
                    { id: "4.1.4", label: "UI/UX Design", href: "/internshipandtraining" },
                    { id: "4.1.5", label: "HR", href: "/internshipandtraining" },
                    { id: "4.1.6", label: "Digital Marketing", href: "/internshipandtraining" },
                    { id: "4.1.7", label: "App Development", href: "/internshipandtraining" },
                ],
            },
        ],
    },
    // {
    //     id: "4",
    //     label: " About Us",
    //     href: "/aboutus",
    // },
    {
        id: "5",
        label: "Contact Us",
        href: "/contact",
    },
];

function TransitionComponent(props) {
    const style = useSpring({
        to: {
            opacity: props.in ? 1 : 0,
            transform: `translate3d(${props.in ? 0 : 20}px,0,0)`,
        },
    });

    return (
        // @ts-expect-error
        <animated.div style={style}>
            <Collapse {...props} />
        </animated.div>
    );
}

export default function RichTreeDrawer() {
    const navigate = useNavigate();
    function handleClick(event, itemId) {
        function findItemById(items, id, parentLabel) {
            for (const item of items) {
                if (item.id === id) return [item, parentLabel];
                if (item.children) {
                    const childResult = findItemById(item.children, id, item.label);
                    if (childResult) return childResult;
                }
            }
            return null;
        }

        const [item, parent] = findItemById(MenuTree, itemId);
        console.log(`item: ${item.href}, parent: ${parent}`);
        if (item.href && item.href !== "") {
            if (parent)
                navigate(`${item.href}?title=${encodeURIComponent(parent)}&service=${encodeURIComponent(item.label)}`);
            else navigate(item.href);
        }
    }
    return (
        <Box
            sx={{
                color: "#ffffff",
                backgroundColor: "#0b0b08",
                paddingBlock: 2,
            }}
        >
            <RouterLink to="/">
                <Box
                    sx={{
                        borderRadius: "50%",
                        overflow: "hidden",
                        padding: 2,
                    }}
                >
                    <img src={logo} alt="Logo" width={100} height={100} />
                </Box>
            </RouterLink>
            <RichTreeView
                sx={{ paddingInline: 2, minHeight: "100svh" }}
                defaultExpandedItems={["grid"]}
                slotProps={{
                    item: { slots: { groupTransition: TransitionComponent } },
                }}
                items={MenuTree}
                onItemClick={(event, itemId) => handleClick(event, itemId)}
            />
        </Box>
    );
}
