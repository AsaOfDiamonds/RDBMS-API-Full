
exports.up = function(knex, Promise) {
    // make changes to our database
    return knex.schema.createTable('students', function (tbl) {
        // primary key
        tbl.increments(); // defaults to a column named id

        // other fields
        tbl.string('studentName', 255);

        // timestamps
        tbl.timestamps(true, true);

        // foreign key example
        tbl
            .integer('cohort_id')
            .unsigned()
            .references('id')
            .inTable('cohorts');

        // constraints
        tbl.unique('studentName', 'uq_students_studentName'); // makes name unique
    });
};

exports.down = function(knex, Promise) {
    // rollback/undo the changes
    return knex.schema.dropTableIfExists('students');
};
