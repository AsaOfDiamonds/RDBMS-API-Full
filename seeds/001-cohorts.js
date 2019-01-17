
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cohorts')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cohorts').insert([
        { cohortName: "Web01" },
        { cohortName: "Web02" },
        { cohortName: "Web03" },
        { cohortName: "Web04" },
        { cohortName: "Web05" },
        { cohortName: "Web06" },
        { cohortName: "Web07" },
        { cohortName: "Web08" },
        { cohortName: "Web09" },
        { cohortName: "Web10" },
        { cohortName: "Web11" },
        { cohortName: "Web12" },
        { cohortName: "Web13" },
        { cohortName: "Web14" },
        { cohortName: "Web15" },
      ]);
    });
};
