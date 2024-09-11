import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const CartWidget = () => {
  return (
    <div>
        <Badge badgeContent={4} color="primary">
          <ShoppingCartIcon/>
    </Badge>
    </div>
  )
}

export default CartWidget