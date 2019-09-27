const Sequelize = require('sequelize');
const Op = Sequelize.Op;

const filtersHandler = {
    process: (filters) => {
        let processedFilters = {};
        for (let idx = 0; idx < filters.length; idx++) {
            let currentFilter = filters[idx];
            for (filterKey in currentFilter) {
                switch (currentFilter[filterKey].op) {
                    case "like":
                        processedFilters[filterKey] = {
                            [Op.like]: currentFilter[filterKey].value + "%"
                        };
                        break;
                    case "eq" :
                    default:
                        for (filterKey in currentFilter) {
                            processedFilters[filterKey] = {
                                [Op.eq]: currentFilter[filterKey].value
                            }
                        }
                        break;
                }
            }
        }
        return processedFilters;
    }
};

module.exports = filtersHandler;