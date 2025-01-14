// import React, { useState } from "react";
// import { Button, Box, Typography, Stack } from "@mui/material";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// const NavMenuServices = ({ title, list }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   const handleMouseEnter = () => setIsHovered(true);
//   const handleMouseLeave = () => setIsHovered(false);

//   return (
//     <Box
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//       sx={{ position: "relative", display: "inline-block", borderWidth:1 }}
//     >
//       <Button
//         endIcon={<ArrowDropDownIcon />}
//         sx={{
//           color: "white",
//           fontWeight: "bold",
//           textTransform: "none",
//           "&:hover": { backgroundColor: "transparent" },
//         }}
//       >
//         {title}
//       </Button>
//       {isHovered && (
//         <Box
//           sx={{
//             position: "absolute",
//             // top: "95%",
//             // left: 0,
//             backgroundColor: "#000",
//             color: "white",
//             borderRadius: "8px",
//             boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
//             p: 2,
//             zIndex: 10,
//             // minWidth: "300px",
//             width:"100vw",
//             // marginTop: "30px",
//           }}
//         >
//           <Stack direction="row" justifyContent="space-between" gap={4}>
//             {list.map((section, sectionIndex) => (
//               <Box key={sectionIndex}>
//                 <Typography noWrap={true} variant="h6" sx={{ mb: 1 }}>
//                   {section.title}
//                 </Typography>
//                 <Stack spacing={2}>
//                   {section.items.map((item, itemIndex) => (
//                     <Typography
//                     noWrap={true}
//                       key={itemIndex}
//                       variant="body2"
//                       sx={{ cursor: "pointer", "&:hover": { color: "#ffc107" } }}
//                     >
//                       {item}
//                     </Typography>
//                   ))}
//                 </Stack>
//               </Box>
//             ))}
//           </Stack>
//         </Box>
//       )}
//     </Box>
//   );
// };

// export default NavMenuServices;

import React, { useState } from "react";
import { Link as RouterLink } from "react-router-dom";
import { Box, Typography, Paper } from "@mui/material";

export const PopupMenu = ({ subMenu }) => {
    return (
        <Paper
            elevation={0}
            sx={{
                position: "absolute",
                top: "100%",
                left: "50%",
                transform: "translateX(-50%)",
                zIndex: 10,
                background: "transparent",
                borderRadius: "20px 20px 20px 20px / 20px 20px 0px 20px",
                "&::before": {
                    content: '""',
                    display: "inline-block",
                    height: 21,
                },
            }}
        >
            <Box
                sx={{
                    borderRadius: "20px 20px 20px 20px / 20px 20px 0px 20px",
                    background: "rgba(41, 39, 39, 0.5)",
                    padding: "16px",
                    display: "flex",
                    gap: 2,
                }}
            >
                {subMenu.map((subItem, idx) => (
                    <Box
                        key={idx}
                        sx={{
                            display: "flex",
                            boxShadow: "7px 7px 10px 0px rgba(0, 0, 0)",
                            flexDirection: "column",
                            gap: 2,
                            padding: "16px 4px",
                            background: "rgba(17, 16, 16, 0.9)",
                            borderRadius:
                                "20px 20px 20px 20px / 20px 20px 0px 20px",
                        }}
                    >
                        <Typography
                            variant="h6"
                            color="#ffffff"
                            noWrap={true}
                            sx={{
                                fontWeight: "bold",
                                fontSize: "1rem",
                            }}
                        >
                            {subItem.title}
                        </Typography>
                        <Box
                            sx={{
                                display: "grid",
                                gridTemplateColumns:
                                    "repeat(auto-fill, minmax(200px, 1fr))",
                            }}
                        >
                            {subItem.items.map((item, index) => (
                                <Typography
                                    key={index}
                                    variant="subtitle2"
                                    component={RouterLink}
                                    to={`${
                                        item.href
                                    }?title=${encodeURIComponent(
                                        subItem.title
                                    )}&service=${encodeURIComponent(
                                        item.text
                                    )}`}
                                    align="left"
                                    sx={{
                                        textDecoration: "none",
                                        textWrap: "balance",
                                        display: "flex",
                                        alignItems: "center",
                                        justifyItems: "center",
                                        color: "#ffffff",
                                        borderRadius: "8px",
                                        padding: "6px 8px",
                                        fontSize: "clamp(0.6rem, 1vw, .8rem)",
                                        "&::before": {
                                            content: '"◙"',
                                            color: "white",
                                            display: "inline-block",
                                            fontSize: 16,
                                            paddingInline: 1,
                                            transition: "color 0.3s ease",
                                        },
                                        "&:hover::before": {
                                            color: "rgb(27, 218, 254)",
                                            animation:
                                                "rotate .8s linear infinite",
                                        },
                                        "&:hover": {
                                            color: "rgb(27, 218, 254)",
                                            background: "rgba(41, 39, 39, 0.5)",
                                        },
                                        "@keyframes rotate": {
                                            from: { transform: "rotate(0deg)" },
                                            to: { transform: "rotate(360deg)" },
                                        },
                                    }}
                                >
                                    {item.text}
                                </Typography>
                            ))}
                        </Box>
                    </Box>
                ))}
            </Box>
        </Paper>
    );
};
