export default input => {
    // const results = []
    // var schemas = input
    
    // for(const key in schemas){
    //     var properties = schemas[key].properties
        
    //     if(schemas[key].required){
    //         schemas[key].required.forEach(element => {
    //             if(properties.hasOwnProperty(element)){
    //                 if(properties[element].type == "array" && properties[element].minItems > 0){
    //                     results.push({
    //                         message: `O campo '${element}' esta definido como requerid no schema '${key}' e é do type array, assim, é aconcelhavel que o minItems deste campo seja 0.`
    //                     })
    //                 }
    //             }else{
    //                 if(properties[element].type == "array" && properties[element].minItems == 0){
    //                     results.push({
    //                         message: `O campo '${element}' esta não está definido como requerid no schema '${key}' e é do type array, assim, é aconcelhavel que o minItems deste campo seja 1.`
    //                     })
    //                 }
    //             }
    //         });
    //     }

    //     for(const key in properties){
    //         var propertiesIn = properties[key].properties

    //         if(propertiesIn[key].required){
    //             if(propertiesIn.hasOwnProperty(element)){
    //                 if(propertiesIn[element].type == "array" && propertiesIn[element].minItems > 0){
    //                     results.push({
    //                         message: `O campo '${element}' esta definido como requerid no schema '${key}' e é do type array, assim, é aconcelhavel que o minItems deste campo seja 0.`
    //                     })
    //                 }
    //             }else{
    //                 if(propertiesIn[element].type == "array" && propertiesIn[element].minItems == 0){
    //                     results.push({
    //                         message: `O campo '${element}' esta não está definido como requerid no schema '${key}' e é do type array, assim, é aconcelhavel que o minItems deste campo seja 1.`
    //                     })
    //                 }
    //             }
    //         }
    //     }
    // }

    // return results
  };