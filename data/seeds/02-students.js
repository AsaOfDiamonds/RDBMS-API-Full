exports.seed = function (knex, Promise) {
    return knex('students')
        .del()
        .then(function () {
            return knex('students').insert([
                {
                    "id": 1,
                    "studentName": "Lauren Worthington",
                    "cohort_id": 1
                }, {
                    "id": 2,
                    "studentName": "Ashwin Sundararajan ",
                    "cohort_id": 2
                }, {
                    "id": 3,
                    "studentName": "Stephen Bondor",
                    "cohort_id": 3
                }, {
                    "id": 4,
                    "studentName": "Eileen Cuevas",
                    "cohort_id": 4
                }, {
                    "id": 5,
                    "studentName": "Daniel Mendez",
                    "cohort_id": 5
                }, {
                    "id": 6,
                    "studentName": "Tyrone Cartwright",
                    "cohort_id": 6
                }, {
                    "id": 7,
                    "studentName": "Nedim Omerovic",
                    "cohort_id": 7
                }, {
                    "id": 8,
                    "studentName": "Austin Blake",
                    "cohort_id": 8
                }, {
                    "id": 9,
                    "studentName": "Joseph Eastman",
                    "cohort_id": 9
                }, {
                    "id": 10,
                    "studentName": "Kai Lovingfoss",
                    "cohort_id": 10
                }, {
                    "id": 11,
                    "studentName": "Jarrad Miller",
                    "cohort_id": 11
                }, {
                    "id": 12,
                    "studentName": "Asa Shalom",
                    "cohort_id": 12
                },    

            ]);
        });
};
