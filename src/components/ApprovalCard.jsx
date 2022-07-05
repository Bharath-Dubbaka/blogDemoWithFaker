import React from "react";

function ApprovalCard(props) {
  //   let val = false;

  //   const onDeclineClick = () => {
  //     return val = !val
  //   };
  //   const fun = () => {
  //     if (val === true) {
  //       return "Are you sure to delete?";
  //     } else {
  //       return props.children;
  //     }
  //   };

  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Approve</div>
          <div
            className="ui basic red button"
            // onClick={() => {
            //   return (val = !val), console.log(val);
            // }}
          >
            Decline
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApprovalCard;
