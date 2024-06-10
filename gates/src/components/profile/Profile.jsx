
import billgates from "/public/billgates.jpg";
import './Profile.css'

function Profile() {
  return (
    <div id='profile'>
        <img id='photo' src={billgates} alt="bill gates" />
        <h1>Spend Bill Money</h1>
    </div>
  )
}

export default Profile