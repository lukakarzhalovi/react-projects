import BiographyCard from "./Components/BiographyCard/BiographyCard"
import type  {BiographyData}  from "./data/BiographyData";

const steveJobsData: BiographyData = {
  name: "gela",
  birthYear: 1995,
  deathYear: 2022
};

function App() {
  return (
    <>
    <BiographyCard  data={steveJobsData}/>
    </>
  )
}

export default App
