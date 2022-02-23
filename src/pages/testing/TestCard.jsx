import Button from "../../components/Button"
import PlanCard from "../../components/PlanCard"

const TestCard = () => {
  return (
    <>
      <div className="flex justify-evenly mt-16">
        <PlanCard variant="best-seller" />
        <PlanCard />
      </div>
    </>
  )
}

export default TestCard