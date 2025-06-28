import CircularProgress from "@mui/material/CircularProgress";
// import Box from '@mui/material/Box';

import "./SPNormal.css";

export default function Spinner() {
  return (
    <div className="spinner-ui">
      <CircularProgress color="secondary" />
    </div>
  );
}
