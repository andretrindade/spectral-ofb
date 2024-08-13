export default input => {
    const results = []
    var schemas = input
    
    for(const key in schemas){
        var properties = schemas[key].properties
        
        if(schemas[key].required){
            schemas[key].required.forEach(element => {
                if(!properties.hasOwnProperty(element)){
                    results.push({
                        message: `O campo '${element}' esta definido como requerid no schema '${key}', mas não possui propriedade definida em properties do mesmo schema.`
                    })
                }
            });
        }

        for(const key in properties){
            var propertiesIn = properties[key].properties

            if(properties[key].required){
                properties[key].required.forEach(element => {
                    if(!propertiesIn.hasOwnProperty(element)){
                        results.push({
                            message: `O campo '${element}' esta definido como requerid no schema '${key}', mas não possui propriedade definida em properties do mesmo schema.`
                        })
                    }
                });
            }
        }
    }

    return results
  };