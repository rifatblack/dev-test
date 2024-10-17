export const storeBooking= (product, timerange) => {
    const duration = timerange.duration;
    const dataList = JSON.parse(localStorage.getItem("dataList"));
  
    if (product.type === "plain") product.durability -= 1 * duration;
    else if (product.type === "meter") product.durability -= 2 * duration;
  
    if (product.type === "meter") {
      product.mileage += 10 * duration;
      product.durability -= 2 * duration;
    }
  
    product.availability = false;
  
    const result = {
      ...product,
      startDate: timerange.startDate,
      endDate: timerange.endDate,
    };
  
    console.log(result);
  
    const productIndex = dataList.findIndex((item) => item.id === product.id);
    dataList[productIndex] = { ...result };
  
    localStorage.setItem("dataList", JSON.stringify(dataList));
  
    //console.log(dataList);
  }
  