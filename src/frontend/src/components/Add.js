import { Tooltip, Fab, Modal, Box, Typography, Avatar, TextField, Stack, ButtonGroup, Button } from "@mui/material"
import { Add as AddIcon, DateRange, EmojiEmotions, Image, PersonAdd, VideoCameraBack } from "@mui/icons-material"
import React from 'react'
import styled from "@emotion/styled"

const StyledModal = styled(Modal)({
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
});

const UserBox = styled(Box)({
    display: "flex",
    alignItems: "center",
    gap: 10,
    marginBottom: "20px"
});


const Add = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <>
            <Tooltip title="Add" sx={{ position: "fixed", bottom: 20, left: { xs: "calc(50% - 25px)", md: 30 } }}>
                <Fab color="primary" aria-label="add" onClick={handleOpen}>
                    <AddIcon />
                </Fab>
            </Tooltip>

            <StyledModal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description">
                <Box width={400} height={380} bgcolor="white" p={3} borderRadius={2}>
                    <Typography id="modal-modal-title" variant="h6" component="h2" color="gray" textAlign="center">
                        Create post
                    </Typography>
                    <UserBox>
                        <Avatar src="https://mui.com/static/images/avatar/6.jpg" sx={{ width: 30, height: 30 }} />
                        <Typography id="modal-modal-title" variant="span" fontWeight={500} >
                            John Doe
                        </Typography>
                    </UserBox>
                    <TextField
                        sx={{ width: "100%" }}
                        id="standard-multiline-static"
                        multiline
                        rows={3}
                        placeholder="What's on your mind?"
                        variant="standard"
                    />
                    <Stack direction={"row"} gap={1} mt={2} mb={3}>
                        <EmojiEmotions color="primary" />
                        <Image color="secondary" />
                        <VideoCameraBack color="success" />
                        <PersonAdd color="error" />
                    </Stack>
                    <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                        <Button>Post</Button>
                        <Button sx={{ width: "100px" }}><DateRange /></Button>
                    </ButtonGroup>
                </Box>
            </StyledModal>
        </>
    )
}

export default Add