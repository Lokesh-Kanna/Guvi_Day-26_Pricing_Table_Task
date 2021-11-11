import './App.css';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CheckIcon from '@mui/icons-material/Check';
import ClearIcon from '@mui/icons-material/Clear';

function App() {
  const cardContent = [
    {
      option: "FREE",
      price: "$0",
      user: "Single User",
      storage: "5GB Storage",
      publicprojects: "Unlimited Public Projects",
      access: "Community Access",
      privateprojects: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      statusreport: "Monthly Status Report"
    },
    {
      option: "PLUS",
      price: "$9",
      user: "5 Users",
      storage: "5GB Storage",
      publicprojects: "Unlimited Public Projects",
      access: "Community Access",
      privateprojects: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      statusreport: "Monthly Status Report"
    },
    {
      option: "PRO",
      price: "$49",
      user: "Unlimited Users",
      storage: "5GB Storage",
      publicprojects: "Unlimited Public Projects",
      access: "Community Access",
      privateprojects: "Unlimited Private Projects",
      support: "Dedicated Phone Support",
      subdomain: "Free Subdomain",
      statusreport: "Monthly Status Report"
    }
  ]
  return (
    <div className="App">
      <Distributer cardContent={cardContent} />
    </div>
  );
}

function Distributer({ cardContent }) {
  return (
      <div className="content">
        {cardContent.map((cont, index) => {
          return (
            <CardDisp 
                option = {cont.option}
                price = {cont.price}
                user = {cont.user}
                storage = {cont.storage}
                publicprojects = {cont.publicprojects}
                access = {cont.access}
                privateprojects = {cont.privateprojects}
                support = {cont.support}
                subdomain = {cont.subdomain}
                statusreport = {cont.statusreport}
                id = {cont.index}
                />
          )
        })}
      </div>
  )
}



function CardDisp({option, price, user, storage, publicprojects, access, privateprojects, support, subdomain, statusreport, id}) {
  // let ids = {id};
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
        <Typography className="typo">
        {option == "FREE" ? <ClearIcon /> : <CheckIcon />}
            {privateprojects}
          </Typography>
        <Typography className="typo">
        {option == "FREE" ? <ClearIcon /> : <CheckIcon />}
            {support}
          </Typography>
        <Typography className="typo">
        {option == "FREE" ? <ClearIcon /> : <CheckIcon />}
            {subdomain}
          </Typography>
        <Typography className="typo">
        {option == "FREE" || option == "PLUS"? <ClearIcon /> : <CheckIcon />}
            {statusreport}
          </Typography>
      </div>
    </CardContent>
    <CardActions className="cardaction">
      <Button id="btn" variant="contained">Button</Button>
    </CardActions>
  </Card>
  )
}

export default App;
