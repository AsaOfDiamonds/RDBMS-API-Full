exports.seed = function (knex, Promise) {
    return knex('cohorts')
        .del()
        .then(function () {
            return knex('cohorts').insert([
                { "id": 1, "cohortName": "Web01" },
                { "id": 2, "cohortName": "Web02" },
                { "id": 3, "cohortName": "Web03" },
                { "id": 4, "cohortName": "Web04" },
                { "id": 5, "cohortName": "Web05" },
                { "id": 6, "cohortName": "Web06" },
                { "id": 7, "cohortName": "Web07" },
                { "id": 8, "cohortName": "Web08" },
                { "id": 9, "cohortName": "Web09" },
                { "id": 10, "cohortName": "Web10" },
                { "id": 10, "cohortName": "Web11" },
                { "id": 10, "cohortName": "Web12" },
                { "id": 10, "cohortName": "Web13" },
                { "id": 10, "cohortName": "Web14" },
                { "id": 10, "cohortName": "Web15" },
            ]);
        });
};
