import { Typography, Box, styled } from '@mui/material'; 
import { navData } from '../../constant/data';
import { useNavigate } from 'react-router-dom'; // Import useNavigate

const Component = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'space-between',
    margin: '55px 130px 0 130px !important',
    overflowX: 'overlay',
    [theme.breakpoints.down('lg')]: {
        margin: '0px !important'
    }
}));

const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center;
`;

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;

const NavBar = () => {
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleCategoryClick = (category, section, item, close) => {
        navigate(`/${category.id}/${section.id}/${item.id}`);
        close();
    };

    return (
        <Component>
            {navData.map(temp => (
                <Container key={temp.text} onClick={() => handleCategoryClick(temp.category, temp.section, temp.item, temp.close)}>
                    {temp.img ? (
                        <img src={temp.img} alt={temp.text} style={{ width: 64 }} />
                    ) : (
                        <img src={temp.url} alt={temp.text} style={{ width: 64 }} />
                    )}
                    <Text>{temp.text}</Text>
                </Container>
            ))}
        </Component>
    );
};

export default NavBar;
