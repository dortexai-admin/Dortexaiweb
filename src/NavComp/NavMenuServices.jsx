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
      left: "40%",
      transform: "translateX(-57%)",
      zIndex: 10,
      background: "transparent",
      borderRadius: "20px 20px 20px 20px / 20px 20px 0px 20px",
      "&::before": {
        content: '""',
        display: "inline-block",
        height: 21,
      },
      "@media (max-width: 1000px)": {
        left: "50%",
        transform: "translateX(-50%)",
      },
    }}
  >
    <Box
      sx={{
        borderRadius: "20px 20px 20px 20px / 20px 20px 0px 20px",
        background: "rgba(41, 39, 39, 0.5)",
        padding: "12px",
        display: "flex",
        gap: 1,
        "@media (max-width: 1000px)": {
          padding: "8px",
          gap: 0.7,
        },
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
            paddingBlock: 1,
            paddingInline: 2,
            background: "rgba(17, 16, 16, 0.9)",
            borderRadius: "20px 20px 20px 20px / 20px 20px 0px 20px",
            "@media (max-width: 1000px)": {
              gap: 0.7,
              paddingBlock: 0.2,
              paddingInline: 0.5
            },
          }}
        >
          <Typography
            variant="h6"
            color="#ffffff"
            noWrap={true}
            style={{ fontWeight: "bold" }}
            sx={{
              fontSize: "1rem",
              "@media (max-width: 600px)": {
                fontSize: "0.6rem",
              },
            }}
          >
            {subItem.title}
          </Typography>
          <Box sx={{ gap: 15 }}>
            {subItem.items.map((item, index) => (
              <Typography
                key={index}
                variant="subtitle2"
                component={RouterLink}
                to={item.href}
                noWrap={true}
                align="left"
                sx={{
                  textDecoration: "none",
                  marginBottom: 0.5,
                  display: "flex",
                  alignItems: "center",
                  justifyItems: "center",
                  color: "#ffffff",
                  borderRadius: "8px",
                  padding: "8px 16px",
                  fontSize: "0.875rem",
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
                    animation: "rotate .8s linear infinite",
                  },
                  "&:hover": {
                    color: "rgb(27, 218, 254)",
                    background: "rgba(41, 39, 39, 0.5)",
                  },
                  "@keyframes rotate": {
                    from: { transform: "rotate(0deg)" },
                    to: { transform: "rotate(360deg)" },
                  },
                  "@media (max-width: 600px)": {
                    padding: "6px 12px",
                    fontSize: "0.75rem",
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