import { CardDisp } from "./CardDisp";

export function Distributer({ cardContent }) {
  return (
    <div className="content">
      {cardContent.map((cont, index) => {
        return (
          <CardDisp
            option={cont.option}
            price={cont.price}
            user={cont.user}
            storage={cont.storage}
            publicprojects={cont.publicprojects}
            access={cont.access}
            privateprojects={cont.privateprojects}
            support={cont.support}
            subdomain={cont.subdomain}
            statusreport={cont.statusreport}
            id={cont.index} />
        );
      })}
    </div>
  );
}
