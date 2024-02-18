import { InputBase, Box, styled } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

// Styled components for the search container, input field, and search icon wrapper
const SearchContainer = styled(Box)(({ theme }) => ({
  background: '#fff',
  width: '400%', // Increase the width of the search container
  borderRadius: 2,
  display: 'flex',
  alignItems: 'center',
  position: 'relative',
  // Consider using theme variables for more consistent styling:
  // width: theme.spacing(60), // Example using theme spacing

  // Optional responsive modifications if desired:
  [theme.breakpoints.down('sm')]: {
    width: '80%', // Adjust width for smaller screens
  },
}));

const InputSearchBase = styled(InputBase)(({ theme }) => ({
  width:  '400px', // Adjust width to accommodate the search icon
  margin: '0 24px', // Add spacing around the input
  padding: theme.spacing(1), // Set appropriate padding
  fontSize: theme.typography.body1.fontSize, // Align text size with other elements
  border: `1px solid ${theme.palette.divider}`, // Use theme for consistent borders
  borderRadius: 4, // Set preferred border radius
  // Optional placeholder customizations:
  '&::placeholder': {
    opacity: 0.5, // Adjust placeholder opacity
    fontWeight: theme.typography.body2.fontWeight, // Consider lighter weight
  },
}));

const SearchIconWrapper = styled(Box)(({ theme }) => ({
  color: theme.palette.primary.main, // Use theme for consistent icon color
  position: 'absolute',
  right: 10, // Adjust the position of the search icon
  top: '50%', // Center the icon vertically
  transform: 'translateY(-50%)', // Ensure vertical centering
  cursor: 'pointer',
}));

const Search = () => {
  return (
    <SearchContainer>
      <InputSearchBase placeholder="Search for products" />
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
    </SearchContainer>
  );
};

export default Search;
