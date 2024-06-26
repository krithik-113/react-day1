import Premium from "./premium/Premium";


function App() {
  const plan = ["FREE", "PLUS", "PRO"];
  const price = [0, 9, 49];
  
  const benefits = [
    "Single User",
    "50GB Storage",
    "Unlimited Public Projects",
    "Community Access",
    "Unlimited Private Projects",
    "Dedicated Phone Support",
    "Free Subdomain",
    "Monthly Status Reports",
  ];
  
  return (
    <div className="App">
      <Premium
        key={price[0]}
        plan={plan[0]}
        price={price[0]}
        benefits={benefits}
      />
      <Premium
        plan={plan[1]}
        price={price[1]}
        benefits={benefits}
      />
      <Premium
        plan={plan[2]}
        price={price[2]}
        benefits={benefits}
      />
    </div>
  );
}

export default App;
