try {
    //  const jsonData = '{ "product": "Data", "Price": "450" }';
     const data = "Data Corrupted";
    const ConvertJsonData = JSON.parse(jsonData);
    console.log(ConvertJsonData);
    
}
catch (Error)
{
    console.log("Invalid JSON format");
}