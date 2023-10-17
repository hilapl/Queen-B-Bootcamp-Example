import Box from "@mui/material/Box";
// import * as React from 'react';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Avatar from "@mui/material/Avatar";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
// export function GoToCard() {
//     const Gotos = [{businessID: 'business1'}, {businessID: 'business2'}, {businessID: 'business3'}];
//     return (
//         <Box>
//             <Stack direction="column" justifyContent="center" margin="auto" marginBottom={0}>
//                 <LockOutlinedIcon
//                     sx={{height: "2.5rem",
//                         width: "2.5rem",
//                         position: "start",
//                         fill: "white"}}
//                 />
//                 <Stack direction="row" spacing="2rem" justifyContent="flex-start" alignItems="center" display="flex" alignContent="center" margin="1rem" overflow={"scroll"} >
//                     {Gotos.map(goto =>
//                         <Box key={goto.businessID} height="11rem" sx={{bgcolor: "white", paddingTop: "1rem",
//                             paddingRight:2, paddingLeft:2,
//                             borderRadius: 3, borderColor: "gray", border: 3}}>
//                             <Stack direction="column" spcing={'auto'} justifyContent="center" alignItems="center">
//                                 <Avatar src="B"/>
//                                 <Typography variant="h4" sx={{color: "black"}}>
//                                     {goto.businessID}
//                                 </Typography>
//                                 <Typography variant="h5" sx={{color: "black"}}>
//                                     category
//                                 </Typography>
//                                 <Typography variant="h5" sx={{color: "black"}}>
//                                     address
//                                 </Typography>
//                                 {/*{BoxWithLock()}*/}
//
//                             </Stack>
//                         </Box>
//                     )}
//                 </Stack>
//             </Stack>
//         </Box>
//
//     );
// }

export function GoToCard() {
    // const Gotos = [{businessID: 'business1'}, {businessID: 'business2'}, {businessID: 'business3'}];
    return (
        <Box key='noa' height="11rem" >
            hi
            {/*<Stack direction="column" spcing={1} justifyContent="center" alignItems="center">*/}
            {/*    /!*<Avatar src="B"/>*!/*/}
            {/*    <Typography >*/}
            {/*        noa*/}
            {/*    </Typography>*/}
            {/*    <Typography >*/}
            {/*        category*/}
            {/*    </Typography>*/}
            {/*    <Typography >*/}
            {/*        address*/}
            {/*    </Typography>*/}
            {/*</Stack>*/}
        </Box>

    );
}