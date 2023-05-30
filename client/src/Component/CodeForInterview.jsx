import { Box, Typography, styled } from '@mui/material';

// import Youtube from '../Assets/Images/youtube.png';
import InstaTele from '../Assets/Images/InstaTele.jpg';
// import Employee-Directory-Software from '../Assets/Images/Employee-Directory-Software.jpg';

const Header = styled(Box)`
    margin: 50px;
    & > div {
        margin-top: 50px;
    }
`;

const Image = styled('img')({
    width: '95%',
    height: '100%'
    
});

const CodeForInterview = () => {

    return (
        <Header>
            {/* <Typography variant="h7">Employee-Directory</Typography> */}
            <Box style={{display: 'flex'}}>
                <Image src={InstaTele} />
            </Box>
        </Header>
        // <p>Hello from CodeForInterview</p>

        // <Header>
        //     <Typography variant="h3">
        //         {/* Code for Interview */}

        //         An application that maintains employee records within an organization. It allows users to create new employee profiles, update employee details (e.g., contact information, job title), and delete employee records when an employee leaves the company
        //     </Typography>
        //     {/* <Box style={{display: 'flex'}}>
        //         <Image src={Youtube} />
        //         <Image src={InstaTele} />
        //     </Box> */}
        // </Header>
        // <p>An application that maintains employee records within an organization. It allows users to create new employee profiles, search for employees by various criteria, update employee details (e.g., contact information, job title), and delete employee records when an employee leaves the company.</p>
    )
}

export default CodeForInterview;
























