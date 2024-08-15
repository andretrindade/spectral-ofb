export default input => {
    const results = []
    const objects = input
    
    objects.required.forEach(element => {
        if(!objects.properties.hasOwnProperty(element)){
            results.push({
                message: `O campo '${element}' esta definido como requerid, mas não possui propriedade definida em properties do mesmo schema.`
            })
        }
    });

    return results
  };