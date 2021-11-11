import './App.css';
import { Distributer } from './Distributer';

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
      subdomain: "Unlimited Free Subdomain",
      statusreport: "Monthly Status Report"
    }
  ]
  return (
    <div className="App">
      <Distributer cardContent={cardContent} />
    </div>
  );
}

export default App;
