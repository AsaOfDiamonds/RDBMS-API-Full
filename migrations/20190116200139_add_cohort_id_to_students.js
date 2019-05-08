
exports.up = function(knex, Promise) {
    return knex.schema.table('students', function (tbl) {
        tbl.integer('cohort_id');
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.table('students', function (tbl) {
        tbl.dropColumn('cohort_id');
    });    
};
