const fs=require("fs/promises");
async function handleFile(fileName){
    const data=await fs.readFile(fileName,"utf-8");
    await fs.writeFile("D:\\30 Days Of JavaScripts\\Day12\\output.txt",data.toUpperCase());
    console.log(data.toUpperCase());
}

handleFile("D:\\30 Days Of JavaScripts\\Day12\\sample.txt").catch((err)=>{
    console.log("Error:",err.message);
})