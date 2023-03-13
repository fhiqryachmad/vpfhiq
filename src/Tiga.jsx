function formatName(user) {
    return user.firstName + ' ' + user.lastName;
  }
  
  const user = {
    firstName: 'Fhiqry',
    lastName: 'Achmad'
  };
  
  const element = (
    <h1>
      Assalamu'alaikum {formatName(user)}
    </h1>
  );



function Tiga() {
    return (
        element
    );
}

export default Tiga;