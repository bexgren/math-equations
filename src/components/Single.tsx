import { translations } from "../utils/translations";

const Single = ({ classname }: { classname: string }) => {
  const singleVersion = classname.substring(4, 5) === "x";
  return (
    // <div className={`${classname}`}>{classname.substring(0, 3)}</div>
    <img
      className={`${classname}`}
      src={singleVersion ? "src/assets/bag.svg" : "src/assets/coin.svg"}
      alt={translations().sv.alt[`${singleVersion ? "bag" : "coin"}`]}
    />
  );
};

export default Single;
