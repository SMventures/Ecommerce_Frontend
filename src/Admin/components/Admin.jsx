import React from 'react';
import { useNavigate } from "react-router-dom";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { Box, Avatar, CssBaseline, Drawer } from "@mui/material";
import List from "@mui/material/List";
import Toolbar from "@mui/material/Toolbar";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import { deepPurple } from "@mui/material/colors";
import { Route, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import DashboardIcon from '@mui/icons-material/Dashboard';
import AdminDashboard from './Dashboard';
import ProductsTable from './Products/ProductsTable';
import  OrdersTable from './OrdersTable';
import CreateProductForm from './AddProduct/CreateProductForm';
import CustomersTable from './customers/CustomersTable';
import UpdateProductForm from './UpdateProductForm';
// import { AccountCircle } from '@mui/icons-material';
// import { ThemeProvider } from "@emotion/react";
import { logout } from "../../State/Auth/Action";


import { useEffect } from "react";
const drawerWidth = 240;

// Define your selector function
// const selectUserData = state => state.user ? state.user.data : null;

const menu=[
    {name:"Dashboard",path:"/Admin",icon:<DashboardIcon/>},
    {name:"Products",path:"Admin/products",icon:<DashboardIcon/>},
    {name:"Customers",path:"Admin/customers",icon:<DashboardIcon/>},
    {name:"Orders",path:"Admin/orders",icon:<DashboardIcon/>},
    {name:"AddProduct",path:"Admin/product/create",icon:<DashboardIcon/>}
]
const Admin = () =>{
    const theme = useTheme();
    const isLargeScreen = useMediaQuery(theme.breakpoints.up("lg"));
    const [sideBarVisible, setSideBarVisible] = React.useState(false);
    const navigate=useNavigate();
    const dispatch=useDispatch()
    const {auth}=useSelector(store=>store);
    // const userData = useSelector(selectUserData);


    const handleLogout = () => {
   
        dispatch(logout());
        navigate("/")
    
      };

      const drawer = (
        <Box
          sx={{
            overflow: "auto",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          {isLargeScreen && <Toolbar />}
          <List>
            {menu.map((item, index) => (
              <ListItem key={item.name} disablePadding onClick={()=>navigate(item.path)}>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={item.name} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
    
          <List sx={{ position: "absolute", bottom: 0, width: "100%" }}>
            <Divider />
           
            <ListItem onClick={handleLogout}  disablePadding >
                <ListItemButton>
                <Avatar
                            className="text-white"
                            onClick={handleLogout}
                           
                            sx={{
                              bgcolor: deepPurple[500],
                              color: "white",
                              cursor: "pointer",
                            }}
                          >
                            {auth.user?.firstName[0].toUpperCase()}
                          </Avatar>
                         {/* <ListItemIcon>
                            <AccountCircle/>
                            </ListItemIcon>  */}
                  <ListItemText className="ml-5" primary={"Logout"} />
                </ListItemButton>
              </ListItem>
            
          </List>
        </Box>
      );
    
      const handleSideBarViewInMobile = () => {
        setSideBarVisible(true);
      };
    
      const handleCloseSideBar = () => {
        setSideBarVisible(false);
      };
    
      const drawerVariant = isLargeScreen ? "permanent" : "temporary";
    
      return (
        // <ThemeProvider >
          <Box sx={{ display: `${isLargeScreen ? "flex" : "block"}` }}>
            <CssBaseline />
            {/* <AdminNavbar handleSideBarViewInMobile={handleSideBarViewInMobile} /> */}
    
            <Drawer
              variant={drawerVariant}
              sx={{
                width: drawerWidth,
                flexShrink: 0,
                [`& .MuiDrawer-paper`]: {
                  width: drawerWidth,
                  boxSizing: "border-box",
                  ...(drawerVariant === "temporary" && {
                    top: 0,
                    [`& .MuiPaper-root.MuiDrawer-paperAnchorTop.MuiDrawer-paperTemporary`]:
                      {
                        position: "fixed",
                        left: 0,
                        right: 0,
                        height: "100%",
                        zIndex: (theme) => theme.zIndex.drawer + 2,
                      },
                  }),
                },
              }}
              open={isLargeScreen || sideBarVisible}
              onClose={handleCloseSideBar}
            >
              {drawer}
        </Drawer>
        <Box className="adminContainer" component="main" sx={{ flexGrow: 1 }}>
          <Toolbar />
          <Routes>
            <Route path="/" element={ <AdminDashboard />}></Route>
            <Route path="/Admin/product/create" element={<CreateProductForm/>}></Route>
            <Route path="/product/update/:productId" element={<UpdateProductForm/>}></Route>
            <Route path="/Admin/products" element={<ProductsTable/>}></Route>
            <Route path="/orders" element={<OrdersTable/>}></Route>
            <Route path="/customers" element={<CustomersTable/>}></Route>

          </Routes>
    
   
          </Box>
      </Box>
    // </ThemeProvider>
  );
}


export default Admin;