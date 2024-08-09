export default input => {
    const results = []
    var schemas = input
    
    for(const key in schemas){
        var properties = schemas[key].properties
        
        if(schemas[key].required !== undefined){
            schemas[key].required.forEach(element => {
                if(!properties.hasOwnProperty(element)){
                    results.push({
                        message: `O campo '${element}' esta definido como requerid no schema '${key}', mas não possui propriedade definida em properties do mesmo schema.`
                    })
                }
            });
        }
    }

    return results
  };