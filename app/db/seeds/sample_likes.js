
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('likes').del()
    .then(function () {
      // Inserts seed entries
      return knex('likes').insert([
        {liker_id: 1, liked_id: 4},
        {liker_id: 1, liked_id: 2},
        {liker_id: 1, liked_id: 6},
        {liker_id: 1, liked_id: 7},
        {liker_id: 1, liked_id: 9},
        {liker_id: 1, liked_id: 11},
        {liker_id: 2, liked_id: 3},
        {liker_id: 2, liked_id: 5},
        {liker_id: 2, liked_id: 9},
        {liker_id: 2, liked_id: 12},
        {liker_id: 2, liked_id: 8},
        {liker_id: 2, liked_id: 4},
        {liker_id: 3, liked_id: 1},
        {liker_id: 3, liked_id: 2},
        {liker_id: 3, liked_id: 5},
        {liker_id: 3, liked_id: 6},
        {liker_id: 3, liked_id: 7},
        {liker_id: 3, liked_id: 10},
        {liker_id: 3, liked_id: 13}
      ]);
    });
};
