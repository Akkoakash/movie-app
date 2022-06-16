import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Card, CardActions, CardContent } from "@mui/material";
import { Counter } from "./Counter";

export function Movie({ name, poster, rating, summary }) {
  const styles = {
    color: rating > 8.5 ? "green" : "red",
  };
  const [show, setShow] = useState(true);
  const summaryStyles = {
    display: show ? "block" : "none",
  };
  return (
    <Card className="movie-container">
      <img src={poster} alt={name} className="movie-poster" />
      <CardContent>
        <div className="movie-specs">
          <h2 className="movie-name">
            {name}
            <IconButton
              color="primary"
              onClick={() => setShow(!show)}
              aria-label="Toggle summary">
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </h2>
          <p style={styles} className="movie-rating">
            ⭐{rating}
          </p>
        </div>

        {show ? <p className="movie-summary">{summary}</p> : ""}
      </CardContent>
      <CardActions>
        <Counter />
      </CardActions>
    </Card>
  );
}
