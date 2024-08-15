export default input => {
    const results = []
    const properties = input.properties

    for(const key in properties){
        if(!input.required.includes(key)){
            if(properties[key].type === 'array' && properties[key].minItems == 0){
                results.push({
                    message: `O campo '${key}' do tipo array e não required, aconcelha-se que o atributo minItems seja igual a 1.`
                })
            }
        }
    }

    return results
};