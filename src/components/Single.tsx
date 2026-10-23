const Single = ({
  classname,
}: {
  classname: string;
  keys: string | number;
}) => {
  return (
    <div className={`${classname}`}>{classname.substring(0, 3)}</div>
    // <img className={`${classname}`} src="./circle-regular-full.svg" />
  );
};

export default Single;
