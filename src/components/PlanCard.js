import Button from "./Button";
import Image from "./Image";

/**
 * Input Component
 * @param {String} variant - PlanCard variant: <PlanCard variant="best-seller">
 * @param {String} className - Additional classes for the button
 */
const PlanCard = ({ variant, className }) => {
  if (variant === "best-seller") {
    return (
      <div className={`h-[26rem] flex flex-col justify-between items-center text-center bg-neutral-700 border border-neutral-400 rounded-lg shadow px-14 py-12 relative ${className ?? ''}`}>
        <div className="ribbon-wrapper">
          <div className="ribbon">BEST SELLER</div>
        </div>
        <div className="text-neutral-50 -mt-1">
          <Image variant="small" className="bg-neutral-50 mb-2" />
          <p className="text-xl">Title</p>
          <p>Subtitle</p>
        </div>
        <div className="text-neutral-300 text-sm">
          <p className="mb-2">Feature 1</p>
          <p className="mb-2">Feature 2</p>
          <p>Feature 3</p>
        </div>
        <Button variant="primary" size="medium" isCustom={true} className="mt-8">Order Now</Button>
      </div>
    )
  }
  else {
    return (
      <div className={`h-[26rem] flex flex-col justify-between items-center text-center bg-neutral-700 border border-neutral-400 rounded-lg shadow px-14 py-12 relative scale-90 ${className ?? ''}`}>
        <div className="text-neutral-50 -mt-1">
          <Image variant="small" className="bg-neutral-50 mb-2" />
          <p className="text-xl">Title</p>
          <p>Subtitle</p>
        </div>
        <div className="text-neutral-300 text-sm">
          <p className="mb-2">Feature 1</p>
          <p className="mb-2">Feature 2</p>
          <p>Feature 3</p>
        </div>
        <Button variant="secondary" size="medium" isCustom={true} className="mt-8">Order Now</Button>
      </div>
    )
  }
}

export default PlanCard
