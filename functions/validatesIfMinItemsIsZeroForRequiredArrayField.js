export default input => {
    const results = []
    const objects = input

    objects.required.forEach(element => {
      if(objects.properties.hasOwnProperty(element)){
        if(objects.properties[element].type === 'array' && objects.properties[element].minItems > 0){
            results.push({
                message: `O campo '${element}' do tipo array é required, neste caso aconcelha-se que o atributo minItems seja igual a zero.`
            })
        }
      }
        
    });

    return results
};