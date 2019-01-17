
exports.up = function(knex, Promise) {
    // make changes to our database
    return knex.schema.createTable('cohorts', function (tbl) {
        // primary key
        tbl.increments(); // defaults to a column named id

        // other fields
        tbl.string('cohortName', 255);

        // timestamps
        tbl.timestamps(true, true);

        // foreign key example
        tbl
            .integer('category_id')
            .unsigned()
            .references('id')
            .inTable('categories');

        // constraints
        tbl.unique('cohortName', 'uq_cohorts_cohortName'); // makes name unique
    });
  
};

exports.down = function(knex, Promise) {
    // rollback/undo the changes
    return knex.schema.dropTableIfExists('cohorts');
  
};
