const generateTickets = (amount) => {
  let tickets = [];

  for (let i = 1; i <= amount; i++) {
    tickets.push({
      userId: `user${i}`,
      value: i,
      statusT: i % 2 === 0 ? "active" : "inactive", 
    });
  }
  return tickets;
};


module.exports = generateTickets;