const UserProfile = (props) => {
    return (
        <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
        <h2 style={{ color: 'blue', fontSize: '2rem', margin: '2rem' }}>{props.name}</h2>
        <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
        <p>Bio: {props.bio}</p>
 </div>
    );
};

export default UserProfile;