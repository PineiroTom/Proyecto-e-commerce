import { Card, CardMedia, CardContent, CardActions, Typography, Button} from "@mui/material";
import "./productCard.css";
import { Link } from "react-router-dom";

const ProductCard = ({title,price,imageURL, description, id}) => {
  return (
      <Card sx={{ width: 250, height: 300 }}>
        <CardMedia
          sx={{ height: 140 }}
          image={imageURL}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {price}
          </Typography>
        </CardContent>
        <CardActions>
        <Link to={`/productDetail/${id}`}>
          <Button size="small">
            Ver detalle
          </Button>
        </Link>
        </CardActions>
      </Card>
  )
}

export default ProductCard