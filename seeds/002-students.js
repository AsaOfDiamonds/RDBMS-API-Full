
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').del()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        { studentName: "Lauren Worthington" },
        { studentName: "Ashwin Sundararajan" },
        { studentName: "Stephen Bondor" },
        { studentName: "Eileen Cuevas" },
        { studentName: "Daniel Mendez" },
        { studentName: "Tyrone Cartwright" },
        { studentName: "Nedim Omerovic" },
        { studentName: "Austin Blake" },
        { studentName: "Joseph Eastman" },
        { studentName: "Kai Lovingfoss" },
        { studentName: "Jarrad Miller" },
        { studentName: "Asa Shalom" },
      ]);
    });
};
