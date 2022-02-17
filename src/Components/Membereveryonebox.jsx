import React from "react";
import { members } from "./users";
import FourColumnRow from "./FourColumnRow";

function MembersEveryoneBox() {
  const my_data = members.user_profiles;
  console.log(my_data[0].full_name);
  return (
    <div className="members-div">
      <FourColumnRow
        class4colrow="col-lg-3 event-heading-text"
        col1="Name"
        col2="Channel"
        col3="Type"
      />
      {my_data.map((user) => (
        <FourColumnRow
          class4colrow="col-lg-3 event-text"
          col1={user.full_name}
          col2={user.channel}
          col3={user.type}
        />
      ))}
    </div>
  );
}

export default MembersEveryoneBox;
// col4="Tags"
//col4={user.tags}
