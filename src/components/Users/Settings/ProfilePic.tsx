import profile from "../../../assets/profile.png";

const ProfilePic = () => {

    return (
        <div className="">
            <div className="text-center">
                <p style={{ color: '#2F80ED' }}>Submitted documents</p>
                <img src={profile} className="rounded" alt="..." />
            </div>
        </div>
    )

}

export default ProfilePic;