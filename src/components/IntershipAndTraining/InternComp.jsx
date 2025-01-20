import React from "react";
import { Box, Typography } from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CalculateIcon from "@mui/icons-material/Calculate";
import WorkIcon from "@mui/icons-material/Work";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

const iconsSize = 70;

const interndata = [
    {
        icon: (
            <CalendarMonthIcon
                sx={{
                    fontSize: iconsSize,
                    color: "#fff",
                    padding: 1,
                    backgroundColor: "#0c1e27",
                    // "&:hover":{
                    //     backgroundColor: "rgb(26, 219, 254)",
                    //     color:"#0c1e27",

                    // },
                    border: 1,
                    borderRadius: "50%",
                }}
            />
        ),
        title: "6 months",
        subTitle: "Practical Learning",
    },
    {
        icon: (
            <CalculateIcon
                sx={{
                    fontSize: iconsSize,
                    color: "#fff",
                    padding: 1,
                    backgroundColor: "#0c1e27",
                    border: 1,
                    borderRadius: "50%",
                }}
            />
        ),
        title: "Strengthen",
        subTitle: "Your Aptitude",
    },
    {
        icon: (
            <WorkIcon
                sx={{
                    fontSize: iconsSize,
                    color: "#fff",
                    padding: 1,
                    backgroundColor: "#0c1e27",
                    border: 1,
                    borderRadius: "50%",
                }}
            />
        ),
        title: "Grow",
        subTitle: "Your Personality",
    },
    {
        icon: (
            <EmojiEventsIcon
                sx={{
                    fontSize: iconsSize,
                    color: "#fff",
                    padding: 1,
                    backgroundColor: "#0c1e27",
                    border: 1,
                    borderRadius: "50%",
                }}
            />
        ),
        title: "Gain",
        subTitle: "Career Access",
    },
];

export default function InternComp() {
    return (
        <Box>
            <Box
                sx={{
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    justifyItems: "center",
                    height: `${iconsSize}px`,
                }}
            >
                {interndata.map((ele, index) => (
                    <Box key={index}>{ele.icon}</Box>
                ))}
            </Box>
            <Box
                sx={{
                    backgroundColor: "#0c1e27",
                    display: "grid",
                    gridTemplateColumns: "repeat(4,1fr)",
                    justifyItems: "center",
                    padding: 2,
                    borderRadius: "8px",
                    boxShadow: `0 -${iconsSize / 2}px 0 #0c1e27`,
                }}
            >
                {interndata.map((ele, index) => (
                    <Box key={index}>
                        <Typography variant="h6" fontWeight={600} color={"rgb(26, 219, 254)"} textAlign={"center"}>
                            {ele.title}
                        </Typography>
                        <Typography variant="subtitle2" textAlign={"center"}>
                            {ele.subTitle}
                        </Typography>
                    </Box>
                ))}
            </Box>
        </Box>
    );
}
