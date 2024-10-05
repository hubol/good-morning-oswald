function hook() {
    function addIguaValuesToEntity(entity) {
        if (!entity.values.find(({ name }) => name === 'name'))
            entity.values.push({
                "name": "name",
                "definition": "String",
                "display": 0,
                "defaults": "",
                "maxLength": 0,
                "trimWhitespace": true
            });
    }

    return {
        beforeSaveProject: (project, data) => {
            data.entities.forEach(addIguaValuesToEntity);
            return data;
        },
    }
}

hook();
