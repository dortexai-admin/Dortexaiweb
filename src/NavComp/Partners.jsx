import { Box, Modal, Typography } from "@mui/material";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer/Footer";
import { menuItems } from "../Utils/constants";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";
import MyCarousel from "../components/carousel/MyCarousel";

const Partners = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = (collegeName, images) => () => {
        setCollegeName(collegeName);
        setImages(images);
        setOpen(true);
    };
    const handleClose = () => setOpen(false);
    const [collegeName, setCollegeName] = React.useState("");
    const [images, setImages] = React.useState([]);
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100dvh",
                marginTop: { xs: 1, md: 7 },
                justifyContent: "space-between",
                gap: 5,
            }}
        >
            <Box>
                <Navbar />
            </Box>
            <Box sx={{ padding: 2 }}>
                <Typography variant="h4" style={{ color: "black" }}>
                    Our Partners
                </Typography>
                <Box sx={{ padding: 2, display: "flex", flexDirection: "column", gap: 2 }}>
                    <Typography variant="body1" style={{ color: "black" }}>
                        We are proud to be associated with some of the leading companies in the industry. Our partners
                        have helped us grow and expand our services to a wider audience. We are grateful for their
                        continued support and look forward to a long and successful partnership.
                    </Typography>
                    {menuItems
                        .filter((item) => item.text === "Our Partner's")
                        .flatMap((item) => item.subMenu)
                        .map((subMenu, index) => (
                            <Box key={index}>
                                <Typography variant="h5" style={{ color: "black" }}>
                                    {subMenu.title}
                                </Typography>
                                <Box
                                    sx={{
                                        display: "flex",
                                        flexWrap: "wrap",
                                        // gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
                                        gap: 2,
                                        justifyContent: "center",
                                    }}
                                >
                                    {subMenu.items.map((item, index) => (
                                        <Box
                                            onClick={handleOpen(item.text, item.images)}
                                            key={index}
                                            sx={{
                                                display: "flex",
                                                flexDirection: "column",
                                                cursor: "pointer",
                                                padding: 2,
                                                transition: "all 0.5s",
                                                "&:hover": {
                                                    scale: 1.05,
                                                },
                                                width: "250px",
                                            }}
                                        >
                                            <img
                                                src={item.logo}
                                                alt={item.text}
                                                style={{ width: "100%", borderRadius: "16px", aspectRatio: "1/1" }}
                                            />
                                            <Typography
                                                variant="subtitle1"
                                                style={{ color: "black", textAlign: "center" }}
                                            >
                                                {item.text}
                                            </Typography>
                                        </Box>
                                    ))}
                                    <Modal open={open} onClose={handleClose}>
                                        <Box sx={style}>
                                            <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                <Typography variant="h6">{collegeName}</Typography>
                                                <CloseIcon
                                                    height={25}
                                                    width={25}
                                                    style={{
                                                        cursor: "pointer",
                                                    }}
                                                    onClick={handleClose}
                                                />
                                            </div>
                                            {images && images.length > 0 && <MyCarousel images={images} />}
                                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Exercitationem
                                                quo incidunt iste pariatur sed quasi perferendis error totam non, veniam
                                                reiciendis corporis. Fuga totam et necessitatibus sunt placeat, expedita
                                                natus!
                                            </Typography>
                                        </Box>
                                    </Modal>
                                </Box>
                            </Box>
                        ))}
                </Box>
            </Box>
            <Box>
                <Footer />
            </Box>
        </Box>
    );
};
const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    bgcolor: "black",
    width: "80vw",
    border: "2px solid #000",
    boxShadow: 24,
    padding: "8px 8px",
};
export default Partners;
