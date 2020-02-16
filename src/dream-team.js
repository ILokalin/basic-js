module.exports = function createDreamTeam(members = []) {

  if (!Array.isArray(members)) {
    return false;
  } 

  if (members.length === 0) {
    throw 'Not implemented';
  }

  let teamSecretName = [];

  members.forEach(name => {
    if (typeof name === 'string') {
      teamSecretName.push(/[A-Z]/i.exec(name)[0].toUpperCase());
    }
  })
  
  return teamSecretName.sort().join('');
};