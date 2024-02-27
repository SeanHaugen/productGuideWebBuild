import * as React from "react";
import { NavLink } from "react-router-dom";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
// import Grid from "@mui/material/Unstable_Grid2";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Stats from "./adherence/Stats";

function FrontPage({ category, setSubCategory }) {
  // const [productsCategory, setProductsCategory] = useState([]);

  return (
    <Box>
      {/* Grid container */}
      <div container className="container">
        <Grid item className="grid">
          <div className="frontPage-links">
            <Typography
              variant="body1"
              style={{ display: "flex", marginTop: ".5em" }}
            >
              <Button variant="contained" color="success" 
                style={{
                  // backgroundColor: "#7B919C",
                  marginRight: "5px",
                }}>
                <NavLink
                  onClick={() => {
                    if (
                      window.confirm(
                        "You are leaving the app, once you leave you will need to reopen the app"
                      )
                    ) {
                      window.location.href =
                        "https://www.showdowndisplays.com/category/buildyourown";
                    }
                  }}
                  style={{ color: "white" }}
                >
                  Custom Banner Tool
                </NavLink>
              </Button>
            </Typography>
            <Typography
              variant="body1"
              style={{ display: "flex", marginTop: ".5em" }}
            >
              <Button variant="contained" color="success"                   
              style={{
                    // backgroundColor: "#7B919C",
                    marginRight: "5px",
                  }}>
                <NavLink
                  onClick={() => {
                    if (
                      window.confirm(
                        "You are leaving the app, once you leave you will need to reopen the app"
                      )
                    ) {
                      window.location.href =
                        "https://signzoneinc.sharepoint.com/:w:/s/ShowdownNorthAmerica/EQOUvm8yNl5Nu6DixOSoYcsBaAcSDDg1ldyu5ZphDRNiWQ?e=4%3AUhGPBl&at=9";
                    }
                  }}
                  style={{ color: "white" }}
                >
                  Custom Master Document
                </NavLink>
              </Button>
            </Typography>
            <Typography
              variant="body1"
              style={{ display: "flex", marginTop: ".5em" }}
            >
              <NavLink to={"/OutdoorProducts"}>
                <Button
                  variant="contained"
                  color="success"
                  style={{
                    // backgroundColor: "#7B919C",
                    marginRight: "5px",
                  }}
                >
                  Outdoor Products
                </Button>
              </NavLink>
            </Typography>
            <Typography
              variant="body1"
              style={{ display: "flex", marginTop: ".5em" }}
            >
              <NavLink to={"/Promos"}>
                <Button
                  variant="contained"
                  color="success"
                  style={{
                    // backgroundColor: "#7B919C",
                    marginRight: "5px",
                  }}
                >
                  Promo Products
                </Button>
              </NavLink>
            </Typography>
            <Typography
              variant="body1"
              style={{ display: "flex", marginTop: ".5em" }}
            >
              <NavLink to={"/NewProducts"}>
                <Button
                  variant="contained"
                  color="success"
                  style={{
                    // backgroundColor: "#7B919C",
                    marginRight: "5px",
                  }}
                >
                  New Products
                </Button>
              </NavLink>
            </Typography>
            <Typography
              variant="body1"
              style={{ display: "flex", marginTop: ".5em" }}
            >
              <NavLink to={"/addProduct"}>
                <Button
                  variant="contained"
                  color="success"
                  style={{
                    // backgroundColor: "#7B919C",
                    marginRight: "5px",
                  }}
                >
                  Add Products
                </Button>
              </NavLink>
            </Typography>
          </div>
          {/* <Grid>
   
              <h1>Change Log</h1>
            
          </Grid> */}
          <Grid>
            <Paper>
              <iframe title="dashboard" height="500px" width="1100" src="https://analytics.8x8.com/shared-dashboard/9f5cecc8-b02a-49c4-a0da-a67a8c5f8e74/dark"></iframe>
            </Paper>
          </Grid>
          <Grid>
            <Paper>
              <Stats />
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Box>
  );
}

export default FrontPage;
