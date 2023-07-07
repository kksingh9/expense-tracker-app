

const ProfileOnScreen = (props) => {
    return (
        <>
        <li>
            <span>{props.displayName}</span>
            <span>{props.photoUrl}</span>
        </li>
        </>
    )
};

export default ProfileOnScreen;