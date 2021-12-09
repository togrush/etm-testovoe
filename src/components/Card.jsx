import React from "react";
import { useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CardItem = () => {
  const history = useHistory();
  const params = useParams();
  const item = useSelector((state) => state.rows).filter(
    (item) => item.id === params.id
  )[0];
  return item ? (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <Card sx={{ maxWidth: 270 }}>
        <CardMedia
          component="img"
          height="270"
          image={item.imageUrl}
          alt={item.title}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="p">
            {item.title}
          </Typography>
          <Typography variant="body2" color="text.secondary" component="p">
            <div>
              <p>Продавец - {item.vendor}</p>
              <p>Кол-во - {item.pack}</p>
              <p>Стоимость - {item.price}</p>
            </div>
          </Typography>
          <Button onClick={() => history.push('/')} variant="contained" color="inherit" component="span">
            назад
          </Button>
        </CardContent>
      </Card>
    </div>
  ) : (
    <Redirect to="/" />
  );
};
export default CardItem;