import React, { useState } from "react";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { Box } from "@mui/system";
import { Container } from "@mui/material";

// move getDownloadURL to root component.
// it should be done only once
const HomePage = () => {
  const storage = getStorage();
  const [imageURL, setImageURL] = useState(null);
  const getImg = async () => {
    const imgURL = await getDownloadURL(ref(storage, "images/about_me.jpeg"));
    setImageURL(imgURL);
  };
  getImg();
  return (
    <Container sx={{ justifyContent: "center" }}>
      <h2>Hey I'm Albert</h2>
      welcome to my personal webpage
      <Box
        component="img"
        src={imageURL}
        alt="Image of Albert :)"
        sx={{
          maxWidth: { xs: "100%", sm: "500px", md: "700px" },
          display: "flex",
          justifyContent: "center",
        }}
        // sx={{ maxWidth: "100%" }}
        // sx={sx.image}
      ></Box>
      I love the idea of minimum valuable product. This is version 0.01 ;)
      <ul>
        <li>lv 25</li>
        <li>He/His</li>
        {/* <li>perks: B.S. computer enginerring</li> */}
        <li>hp: 75kg</li>
        {/* <li>character stats: sumo deadlift 146kg</li> */}
        <li>interfaces: pl / en / es</li>
        {/* <li>special skills: ...</li> */}

        {/* <li>achivment unlcoked</li> */}
      </ul>
    </Container>
  );
};

export default HomePage;
