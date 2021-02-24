export const isNullorUndefined = (data) => {
  return data === null || data === undefined ? true : false;
};
export const ConvertPrice=(tag,price)=>{
  switch(tag)
  {
    case "INR":
      return price*72.34;
    case "EURO":
      return price*.82; 
    default:
      return price;
  }
}