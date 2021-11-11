import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';


export function CardDisp({ option, price, user, storage, publicprojects, access, privateprojects, support, subdomain, statusreport, id }) {
  const style1 = { color: option == "FREE" ? "lightgrey" : "black" };
  const style2 = { color: option == "FREE" || option == "PLUS" ? "lightgrey" : "black" };
  return (
    <Card id="card" sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {option}
        </Typography>
        <Typography variant="h5" component="div">
          {price} <span id="subtxt">/month</span>
        </Typography>
        <hr></hr>
        <div className="details">
          <Typography className="typo">
            <CheckIcon />
            {user}
          </Typography>
          <Typography className="typo">
            <CheckIcon />
            {storage}
          </Typography>
          <Typography className="typo">
            <CheckIcon />
            {publicprojects}
          </Typography>
          <Typography className="typo">
            <CheckIcon />
            {access}
          </Typography>
          <Typography className="typo" style={style1}>
            {option == "FREE" ? <ClearIcon /> : <CheckIcon />}
            {privateprojects}
          </Typography>
          <Typography className="typo" style={style1}>
            {option == "FREE" ? <ClearIcon /> : <CheckIcon />}
            {support}
          </Typography>
          <Typography className="typo" style={style1}>
            {option == "FREE" ? <ClearIcon /> : <CheckIcon />}
            {subdomain}
          </Typography>
          <Typography className="typo" style={style2}>
            {option == "FREE" || option == "PLUS" ? <ClearIcon /> : <CheckIcon />}
            {statusreport}
          </Typography>
        </div>
      </CardContent>
      <CardActions className="cardaction">
        <Button id="btn" variant="contained">Button</Button>
      </CardActions>
    </Card>
  );
}
