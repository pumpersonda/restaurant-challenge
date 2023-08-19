import { RatingIcon } from "@/components/atoms/rating/RatingIcon";

export interface RatingsProps {
  rating: number;
}
export default function Ratings({ rating }: RatingsProps) {
  let isInteger = Number.isInteger(rating);
  let size = Math.floor(rating);

  return (
    <>
      {[...Array(size)].map((e, i) => (
        <RatingIcon key={i} isFullStar={true} />
      ))}
      {!isInteger && <RatingIcon key={"half"} isFullStar={false} />}
    </>
  );
}
