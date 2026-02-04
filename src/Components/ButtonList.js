import Button from "./Button";

const List = ['All','Gaming',"Songs","Live",'Soccer',"Cricket","Cooking","Cricket","Cooking"]

const ButtonList = () => {
  return (
    <div className='flex'>
      {List?.map((data,i)=>{
        return (
           <Button key={i} name={data} />
        )
      })}
    </div>
  );
};

export default ButtonList;
