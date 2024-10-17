export const storeReturn = (product, mileage) => {
    const dataList = JSON.parse(localStorage.getItem("dataList"));
  
    if (product.type === "meter")
      product.durability -= Math.ceil(mileage / 10) * 2;
  
    product.availability = true;
    product.mileage += parseInt(mileage);
  
    const result = {
      ...product,
      startDate: null,
      endDate: null,
    };
  
    console.log(result);
  
    const productIndex = dataList.findIndex((item) => item.id === product.id);
    dataList[productIndex] = { ...result };
  
    localStorage.setItem("dataList", JSON.stringify(dataList));
  
    //console.log(dataList);
  }  
