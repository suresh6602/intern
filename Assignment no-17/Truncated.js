const truncate = (str,num,suffix = '...') =>{
    if (str.length <=num){
        return str
    }
    const truncate  = str.slice(0,num);
    const lastcharacter = truncate.trim().slice(-1);
    if(lastcharacter === '!'){
        return truncate;
    }
    return truncate + suffix;  
};
console.log(truncate("We are doing Js Exercises" ,15));
console.log(truncate("We are doing Js Exercises" ,15,'!!!'));